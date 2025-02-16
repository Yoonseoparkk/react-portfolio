import React from 'react';
import '../../styles/Card.css';

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`card ${className || ''}`}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`card-content ${className || ''}`}>{children}</div>;
}