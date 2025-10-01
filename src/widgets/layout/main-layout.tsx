'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useRef, useState } from 'react';

import {
  addFullscreenListener,
  enterFullscreen,
  isFullscreen,
  removeFullscreenListener,
} from '@/shared/lib/fullscreen';
import { fullscreenManager } from '@/shared/lib/fullscreen-manager';
import { ModalManager } from '@/shared/ui';

import styles from './main-layout.module.scss';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [, setIsInFullscreen] = useState(false);
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(false);
  const pathname = usePathname();

  const excludeLayoutPaths = ['/qr'];
  const shouldApplyLayout = !excludeLayoutPaths.some(path =>
    pathname?.startsWith(path)
  );

  useEffect(() => {
    // Add fullscreen change listener
    const handleFullscreenChange = () => {
      const fullscreen = isFullscreen();
      setIsInFullscreen(fullscreen);
      setShowFullscreenPrompt(!fullscreen);

      // Update fullscreen manager state
      fullscreenManager.setFullscreenState(fullscreen);

      console.log('Fullscreen changed:', fullscreen);
    };

    addFullscreenListener('change', handleFullscreenChange);

    // Check initial fullscreen state
    handleFullscreenChange();

    return () => {
      removeFullscreenListener('change', handleFullscreenChange);
    };
  }, []);

  // Handle scaling based on viewport size
  useEffect(() => {
    const updateScale = () => {
      if (contentRef.current) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Base dimensions for 9:16 ratio
        const baseWidth = 900;
        const baseHeight = 1600;

        // Calculate scale factor to fit viewport while maintaining aspect ratio
        const scaleX = viewportWidth / baseWidth;
        const scaleY = viewportHeight / baseHeight;
        const scale = Math.min(scaleX, scaleY);

        contentRef.current.style.transform = `scale(${scale})`;
        contentRef.current.style.width = `${baseWidth}px`;
        contentRef.current.style.height = `${baseHeight}px`;
      }
    };

    // Initial scale
    updateScale();

    // Update scale on window resize
    window.addEventListener('resize', updateScale);

    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  // Handle route changes - ensure fullscreen is maintained
  useEffect(() => {
    const handleRouteChange = async () => {
      if (containerRef.current && fullscreenManager.shouldStayInFullscreen()) {
        await fullscreenManager.handleRouteChange(containerRef.current);
      }
    };

    // Small delay to ensure DOM is updated after route change
    const timeoutId = setTimeout(handleRouteChange, 100);

    return () => clearTimeout(timeoutId);
  }, [children]);

  const handleEnterFullscreen = async () => {
    try {
      if (containerRef.current) {
        await enterFullscreen(containerRef.current);
        fullscreenManager.setFullscreenState(true);
      }
    } catch (error) {
      console.warn('Failed to enter fullscreen:', error);
    }
  };

  if (!shouldApplyLayout) {
    return (
      <>
        {children}
        <ModalManager />
      </>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`terminalContainer ${styles.container} ${showFullscreenPrompt ? styles.clickable : ''}`}
      onClick={showFullscreenPrompt ? handleEnterFullscreen : undefined}
    >
      <div ref={contentRef} className={styles.scaling}>
        <div className={styles.content}>
          {children}
          <ModalManager />
        </div>
      </div>
    </div>
  );
}
