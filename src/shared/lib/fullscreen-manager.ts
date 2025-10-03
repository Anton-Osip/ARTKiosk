'use client';

import { enterFullscreen, isFullscreen } from './fullscreen';

class FullscreenManager {
  private static instance: FullscreenManager;
  private isInitialized = false;
  private containerElement: HTMLElement | null = null;
  private shouldMaintainFullscreen = false;
  private fullscreenListeners: Set<() => void> = new Set();

  private constructor() {}

  static getInstance(): FullscreenManager {
    if (!FullscreenManager.instance) {
      FullscreenManager.instance = new FullscreenManager();
    }

    return FullscreenManager.instance;
  }

  async initialize(container: HTMLElement): Promise<void> {
    if (this.isInitialized) return;

    this.containerElement = container;
    this.isInitialized = true;

    // Wait for the next frame to ensure DOM is ready
    await new Promise(resolve => requestAnimationFrame(resolve));

    // Check if element is still connected to DOM
    if (!container.isConnected) {
      console.warn('Container element is not connected to DOM');

      return;
    }

    // Enter fullscreen if not already in fullscreen
    if (!isFullscreen()) {
      try {
        await enterFullscreen(container);
        this.shouldMaintainFullscreen = true;
        console.log('Fullscreen initialized');
      } catch (error) {
        console.warn('Failed to initialize fullscreen:', error);
      }
    } else {
      this.shouldMaintainFullscreen = true;
    }
  }

  async ensureFullscreen(): Promise<void> {
    if (!this.containerElement || isFullscreen()) return;

    // Check if element is still connected to DOM
    if (!this.containerElement.isConnected) {
      console.warn('Container element is not connected to DOM');

      return;
    }

    try {
      await enterFullscreen(this.containerElement);
      this.shouldMaintainFullscreen = true;
    } catch (error) {
      console.warn('Failed to ensure fullscreen:', error);
    }
  }

  // Method to handle route changes - reinitialize if needed
  async handleRouteChange(container: HTMLElement): Promise<void> {
    this.containerElement = container;

    // If we should maintain fullscreen but we're not in fullscreen, re-enter
    if (this.shouldMaintainFullscreen && !isFullscreen()) {
      await this.ensureFullscreen();
    }
  }

  // Method to check if we should maintain fullscreen
  shouldStayInFullscreen(): boolean {
    return this.shouldMaintainFullscreen;
  }

  // Method to set fullscreen state (called when user manually exits)
  setFullscreenState(inFullscreen: boolean): void {
    this.shouldMaintainFullscreen = inFullscreen;
    // Notify all listeners
    this.fullscreenListeners.forEach(listener => listener());
  }

  // Method to add fullscreen state change listener
  addFullscreenStateListener(listener: () => void): () => void {
    this.fullscreenListeners.add(listener);

    return () => this.fullscreenListeners.delete(listener);
  }

  isReady(): boolean {
    return this.isInitialized && this.containerElement !== null;
  }
}

export const fullscreenManager = FullscreenManager.getInstance();
