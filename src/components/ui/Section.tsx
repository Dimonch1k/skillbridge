'use client'

import { cn } from '@/utils/cn'

export interface SectionProps {
	id: string
	title?: string
	titleClassName?: string
	className?: string
	children?: React.ReactNode
}

export function Section({
	id,
	title,
	titleClassName,
	className,
	children,
}: SectionProps) {
	return (
		<section id={id} className={cn('', className, title && '')}>
			{title && <h2 className={cn('', titleClassName)}>{title}</h2>}
			<div className=''>{children}</div>
		</section>
	)
}
