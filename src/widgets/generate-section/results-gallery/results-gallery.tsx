'use client';

import { StaticImageData } from 'next/image';
import { useEffect, useRef } from 'react';

import { useGenerateStore, useModalStore } from '@/shared/lib';

import img from '../../../../public/selectedPhoto.png';
import { ResultThumbnail } from './result-thumbnail';
import styles from './results-gallery.module.scss';

interface Props {
  withScrolling: boolean;
}

export const ResultsGallery = ({ withScrolling }: Props) => {
  const { openModal, closeModal } = useModalStore();
  const { generateData, replaceThumbnail, scrollLeft, setScrollLeft } =
    useGenerateStore();
  const columns = [] as (typeof generateData)[];
  for (let i = 0; i < generateData.length; i += 2) {
    columns.push(generateData.slice(i, i + 2));
  }
  const groups = [] as (typeof columns)[];
  for (let i = 0; i < columns.length; i += 2) {
    groups.push(columns.slice(i, i + 2));
  }

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!withScrolling) return;
    const el = containerRef.current;
    if (!el) return;

    if (scrollLeft > 0) {
      el.scrollLeft = scrollLeft;
    }
  }, [withScrolling]); // Убираем scrollLeft из зависимостей

  useEffect(() => {
    if (!withScrolling) return;
    const el = containerRef.current;
    if (!el) return;

    let rafId: number | null = null;
    let lastScrollLeft = el.scrollLeft;
    let scrollTimeout: NodeJS.Timeout | null = null;

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
      if (Math.abs(el.scrollLeft - lastScrollLeft) > 1) {
        lastScrollLeft = el.scrollLeft;
        setScrollLeft(lastScrollLeft);

        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          throttledUpdateActive();
        }, 200);
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
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [withScrolling, setScrollLeft]);

  const showResultThumbnailModal = (id: string, image: StaticImageData) => {
    openModal({
      type: 'thumbnail-preview-modal',
      onRetake: () => {
        replaceThumbnail(id, img);
        closeModal();
      },
      onConfirm: () => {
        console.log('onConfirm');
      },
      id,
      image,
    });
  };

  if (!withScrolling) {
    const firstFour = generateData.slice(0, 4);

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
