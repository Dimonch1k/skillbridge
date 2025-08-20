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
			className={cn(
				'w-full flex flex-col',
				className,
				title && 'gap-10 lg:gap-15 2xl:gap-20'
			)}
		>
			{title && (
				<div className='w-full flex flex-col lg:flex-row items-start lg:items-end gap-5 lg:gap-[250px] 2xl:gap-[300px]'>
					<div className='space-y-1 2xl:space-y-1.5'>
						{/* Title */}
						<h2
							className={cn(
								'text-grey-15 font-semibold leading-[150%]',
								titleClassName
							)}
						>
							{title}
						</h2>

						{/* Description */}
						<p className='text-grey-35 text-sm lg:text-base 2xl:text-lg font-normal leading-[150%]'>
							{description}
						</p>
					</div>

					{/* Other section header children */}
					{headerChildren}
				</div>
			)}

			{/* Section children */}
			{title ? <div className={childrenClassName}>{children}</div> : children}
		</section>
	)
}
