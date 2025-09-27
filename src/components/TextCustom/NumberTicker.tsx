'use client';

import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

import clsxm from '@/lib/clsxm';

export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  className,
  decimalPlaces = 0,
  suffix = '',
}: {
  value: number;
  direction?: 'up' | 'down';
  className?: string;
  delay?: number; // delay in s
  decimalPlaces?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    isInView &&
      setTimeout(() => {
        motionValue.set(direction === 'down' ? 0 : value);
      }, delay * 1000);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          const formattedNumber = Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)));

          ref.current.textContent = `${formattedNumber}${suffix}`;
        }
      }),
    [springValue, decimalPlaces, suffix]
  );

  return (
    <span
      className={clsxm(
        'inline-block tabular-nums text-black dark:text-white',
        className
      )}
      ref={ref}
    />
  );
}
