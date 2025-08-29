'use client'

import { cn } from '@/utils/cn'

export interface SectionProps {
	id: string
	title?: string
	description?: string
	headerChildren?: React.ReactNode
	children?: React.ReactNode

	className?: string
	headerClassName?: string
	titleClassName?: string
	childrenClassName?: string
}

export function Section({
	id,
	title,
	description,
	headerChildren,
	children,

	className,
	headerClassName,
	titleClassName,
	childrenClassName
}: SectionProps) {
	return (
		<section
			id={id}
			className={cn(
				'w-full flex flex-col',
				(title || description || headerChildren) &&
					'gap-10 lg:gap-15 2xl:gap-20',
				className
			)}
		>
			{(title || description || headerChildren) && (
				<div
					className={cn(
						title &&
							'w-full flex flex-col lg:flex-row items-start lg:items-end lg:justify-between gap-5 lg:gap-[250px] 2xl:gap-[300px]',
						headerClassName
					)}
				>
					{(title || description) && (
						<div className='space-y-1 2xl:space-y-1.5'>
							{/* Title */}
							{title && (
								<h2
									className={cn(
										'text-grey-15 font-semibold leading-[150%]',
										titleClassName
									)}
								>
									{title}
								</h2>
							)}

							{/* Description */}
							{description && (
								<p className='text-grey-35 text-sm lg:text-base 2xl:text-lg font-normal leading-[150%]'>
									{description}
								</p>
							)}
						</div>
					)}

					{/* Other section header children */}
					{headerChildren}
				</div>
			)}

			{/* Section children */}
			{title || description || headerChildren ? (
				<div className={childrenClassName}>{children}</div>
			) : (
				children
			)}
		</section>
	)
}
