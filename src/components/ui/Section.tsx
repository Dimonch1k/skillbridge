'use client'

import { cn } from '@/utils/cn'

export interface SectionProps {
	id: string
	title?: string
	titleClassName?: string
	className?: string
	children?: React.ReactNode
	childrenClassName?: string
}

export function Section({
	id,
	title,
	titleClassName,
	className,
	children,
	childrenClassName
}: SectionProps) {
	return (
		<section
			id={id}
			className={cn('w-full flex flex-col', className, title && '')}
		>
			{title && <h2 className={cn('', titleClassName)}>{title}</h2>}
			{title ? <div className={childrenClassName}>{children}</div> : children}
		</section>
	)
}
