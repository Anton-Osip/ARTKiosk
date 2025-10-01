interface FullscreenDocument extends Document {
  webkitFullscreenEnabled?: boolean;
  mozFullScreenEnabled?: boolean;
  msFullscreenEnabled?: boolean;
  webkitFullscreenElement?: Element;
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitExitFullscreen?: () => Promise<void> | void;
  mozCancelFullScreen?: () => Promise<void> | void;
  msExitFullscreen?: () => Promise<void> | void;
}

interface FullscreenElement extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void> | void;
  mozRequestFullScreen?: () => Promise<void> | void;
  msRequestFullscreen?: () => Promise<void> | void;
}
/**
 * Check if fullscreen is supported
 */
export function isFullscreenSupported(): boolean {
  const doc = document as FullscreenDocument;

  return !!(
    doc.fullscreenEnabled ||
    doc.webkitFullscreenEnabled ||
    doc.mozFullScreenEnabled ||
    doc.msFullscreenEnabled
  );
}

/**
 * Check if currently in fullscreen mode
 */
export function isFullscreen(): boolean {
  const doc = document as FullscreenDocument;

  return !!(
    doc.fullscreenElement ||
    doc.webkitFullscreenElement ||
    doc.mozFullScreenElement ||
    doc.msFullscreenElement
  );
}

/**
 * Enter fullscreen mode for an element
 */
export async function enterFullscreen(element: HTMLElement): Promise<void> {
  if (!element) {
    throw new Error('Element is required for fullscreen');
  }

  if (!isFullscreenSupported()) {
    throw new Error('Fullscreen API is not supported');
  }
  const el = element as FullscreenElement;

  try {
    if (el.requestFullscreen) {
      await el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      await el.webkitRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      await el.mozRequestFullScreen();
    } else if (el.msRequestFullscreen) {
      await el.msRequestFullscreen();
    } else {
      throw new Error('Fullscreen API not available');
    }
  } catch (error) {
    console.error('Failed to enter fullscreen:', error);
    throw error;
  }
}

/**
 * Exit fullscreen mode
 */
export async function exitFullscreen(): Promise<void> {
  if (!isFullscreen()) {
    return;
  }
  const doc = document as FullscreenDocument;

  try {
    if (document.exitFullscreen) {
      await document.exitFullscreen();
    } else if (doc.webkitExitFullscreen) {
      await doc.webkitExitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      await doc.mozCancelFullScreen();
    } else if (doc.msExitFullscreen) {
      await doc.msExitFullscreen();
    } else {
      throw new Error('Exit fullscreen API not available');
    }
  } catch (error) {
    console.error('Failed to exit fullscreen:', error);
    throw error;
  }
}

/**
 * Toggle fullscreen mode
 */
export async function toggleFullscreen(element: HTMLElement): Promise<void> {
  if (isFullscreen()) {
    await exitFullscreen();
  } else {
    await enterFullscreen(element);
  }
}

/**
 * Add event listener for fullscreen changes
 */
export function addFullscreenListener(
  event: 'change' | 'error',
  callback: (event: Event) => void
): void {
  const eventName = event === 'change' ? 'fullscreenchange' : 'fullscreenerror';
  const webkitEventName = event === 'change' ? 'webkitfullscreenchange' : 'webkitfullscreenerror';
  const mozEventName = event === 'change' ? 'mozfullscreenchange' : 'mozfullscreenerror';
  const msEventName = event === 'change' ? 'msfullscreenchange' : 'msfullscreenerror';

  document.addEventListener(eventName, callback);
  document.addEventListener(webkitEventName, callback);
  document.addEventListener(mozEventName, callback);
  document.addEventListener(msEventName, callback);
}

/**
 * Remove event listener for fullscreen changes
 */
export function removeFullscreenListener(
  event: 'change' | 'error',
  callback: (event: Event) => void
): void {
  const eventName = event === 'change' ? 'fullscreenchange' : 'fullscreenerror';
  const webkitEventName = event === 'change' ? 'webkitfullscreenchange' : 'webkitfullscreenerror';
  const mozEventName = event === 'change' ? 'mozfullscreenchange' : 'mozfullscreenerror';
  const msEventName = event === 'change' ? 'msfullscreenchange' : 'msfullscreenerror';

  document.removeEventListener(eventName, callback);
  document.removeEventListener(webkitEventName, callback);
  document.removeEventListener(mozEventName, callback);
  document.removeEventListener(msEventName, callback);
}
