import { ReactNode } from 'react';

export interface WaggingProps {
	children: ReactNode;
	type?: 'slide' | 'rotate';
	origin?:
    | 'origin-center'
    | 'origin-top'
    | 'origin-top-right'
    | 'origin-right'
    | 'origin-bottom-right'
    | 'origin-bottom-left'
    | 'origin-left'
    | 'origin-top-left';
  duration?: number;
  amplitude?: number;
  infinity?: boolean;
  className?: string;
}