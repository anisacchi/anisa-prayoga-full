import React from 'react'

export interface AnimationProps {
	key?: string,
	children: React.ReactNode;
	delay?: number;
	duration?: number;
	once?: boolean;
	className?: string;
}