import { ReactNode } from 'react';

export interface RevealProps {
	children: ReactNode,
	type?: 'scale' | 'slide',
	direction?: 'up' | 'left' | 'down' | 'right',
	delay?: number,
	once?: boolean,
	styles?: string,
	threshold?: number
}