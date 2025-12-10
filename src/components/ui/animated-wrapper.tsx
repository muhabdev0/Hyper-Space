"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-in-up' | 'slide-in-left' | 'slide-in-right';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  animation: AnimationType;
  className?: string;
  delay?: string;
  threshold?: number;
}

export const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  animation,
  className,
  delay = '0s',
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn('opacity-0', isVisible && animation, className)}
      style={{ animationDelay: isVisible ? delay : '0s' }}
    >
      {children}
    </div>
  );
};
