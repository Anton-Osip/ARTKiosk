'use client';

import { StaticImageData } from 'next/image';
import { useEffect, useRef } from 'react';

import { useModalStore } from '@/shared/lib';

import mock1 from './mock/mock1.png';
import mock2 from './mock/mock2.png';
import mock3 from './mock/mock3.png';
import mock4 from './mock/mock4.png';
import { ResultThumbnail } from './result-thumbnail';
import styles from './results-gallery.module.scss';

const result = [
  { id: '1', img: mock1 },
  { id: '2', img: mock2 },
  { id: '3', img: mock3 },
  { id: '4', img: mock4 },
  { id: '5', img: mock1 },
  { id: '6', img: mock2 },
  { id: '7', img: mock3 },
  { id: '8', img: mock4 },
  { id: '9', img: mock1 },
  { id: '10', img: mock2 },
  { id: '11', img: mock3 },
  { id: '12', img: mock4 },
];

interface Props {
  isPaid: boolean;
}

export const ResultsGallery = ({ isPaid }: Props) => {
  const { openModal } = useModalStore();

  const columns = [] as (typeof result)[];
  for (let i = 0; i < result.length; i += 2) {
    columns.push(result.slice(i, i + 2));
  }
  const groups = [] as (typeof columns)[];
  for (let i = 0; i < columns.length; i += 2) {
    groups.push(columns.slice(i, i + 2));
  }

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isPaid) return;
    const el = containerRef.current;
    if (!el) return;

    let rafId: number | null = null;
    let lastScrollLeft = el.scrollLeft;

    const updateActive = () => {
      const containerRect = el.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const groupEls = Array.from(el.children) as HTMLDivElement[];
      groupEls.forEach(g => {
        const cols = Array.from(g.children) as HTMLDivElement[];
        cols.forEach(c => c.classList.remove(styles.columnActive));
      });

      let activeGroup: HTMLDivElement | null = null;
      let best = Number.POSITIVE_INFINITY;
      groupEls.forEach(g => {
        const rect = g.getBoundingClientRect();
        const groupCenterX = rect.left + rect.width / 2;
        const dist = Math.abs(groupCenterX - containerCenterX);
        if (dist < best) {
          best = dist;
          activeGroup = g;
        }
      });

      const ag = activeGroup as HTMLDivElement | null;
      if (ag) {
        const cols = Array.from(ag.children) as HTMLDivElement[];
        cols.forEach(c => c.classList.add(styles.columnActive));
      }
    };

    const throttledUpdateActive = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        updateActive();
        rafId = null;
      });
    };

    const onScroll: EventListener = () => {
      // Only update if scroll position actually changed
      if (Math.abs(el.scrollLeft - lastScrollLeft) > 1) {
        lastScrollLeft = el.scrollLeft;
        throttledUpdateActive();
      }
    };

    requestAnimationFrame(updateActive);
    el.addEventListener('scroll', onScroll, {
      passive: true,
    } as AddEventListenerOptions);
    window.addEventListener('resize', updateActive);

    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActive);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isPaid]);

  const showResultThumbnailModal = (image: StaticImageData) => {
    openModal({
      type: 'thumbnail-preview-modal',
      onRetake: () => {
        console.log('onRetake');
      },
      onConfirm: () => {
        console.log('onConfirm');
      },
      image,
    });
  };

  if (!isPaid) {
    const firstFour = result.slice(0, 4);

    return (
      <div className={styles.staticContainer}>
        {firstFour.map(item => (
          <div key={item.id} className={styles.columnActive}>
            <ResultThumbnail item={item} onClick={showResultThumbnailModal} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.container} ref={containerRef}>
      {groups.map((group, groupIndex) => (
        <div key={`grp-${groupIndex}`} className={styles.group}>
          {group.map((pair, columnIndex) => (
            <div
              key={`col-${groupIndex}-${columnIndex}`}
              className={styles.column}
            >
              {pair.map(item => (
                <ResultThumbnail
                  key={item.id}
                  item={item}
                  onClick={showResultThumbnailModal}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
