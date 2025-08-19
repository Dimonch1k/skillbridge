'use client'

import { cn } from '@/utils/cn'

export interface SectionProps {
	id: string
	title?: string
	titleClassName?: string
	description?: string
	headerChildren?: React.ReactNode

	className?: string
	children?: React.ReactNode
	childrenClassName?: string
}

export function Section({
	id,
	title,
	titleClassName,
	description,
	headerChildren,
	className,
	children,
	childrenClassName
}: SectionProps) {
	return (
		<section
			id={id}
			className={cn('w-full flex flex-col', className, title && '')}
		>
			{title && (
				<div className='space-y-5'>
					<div className='space-y-1'>
						<h2
							className={cn(
								'text-grey-15 text-[28px] font-semibold leading-[150%]',
								titleClassName
							)}
						>
							{title}
						</h2>
						<p className='text-grey-35 text-sm font-normal leading-[150%]'>
							{description}
						</p>
					</div>
					{headerChildren}
				</div>
			)}
			{title ? <div className={childrenClassName}>{children}</div> : children}
		</section>
	)
}
