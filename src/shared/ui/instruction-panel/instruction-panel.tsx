'use client';

import React from 'react';

import styles from './instruction-panel.module.scss';

interface InstructionPanelProps {
  icon: React.ReactNode;
  text: string | React.ReactNode;
  className?: string;
}

export function InstructionPanel({
  icon,
  text,
  className,
}: InstructionPanelProps) {
  return (
    <div className={`${styles.instructionPanel} ${className || ''}`}>
      <div className={styles.iconContainer}>{icon}</div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
