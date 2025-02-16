import React from 'react';
import '../../styles/Button.css';

export function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`button ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}