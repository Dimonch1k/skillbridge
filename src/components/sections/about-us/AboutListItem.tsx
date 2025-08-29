'use client'

import type { IAboutItem } from '@/types/about.interface'
import { cn } from '@/utils/cn'

export interface AboutListItemProps {
	item: IAboutItem
	className?: string
}

export function AboutListItem({ item, className }: AboutListItemProps) {
	return (
		<li
			className={cn(
				'bg-white flex flex-col',
				'gap-6 2xl:gap-7.5',
				'p-7.5 lg:p-10 2xl:p-12.5',
				'rounded-[10px] 2xl:rounded-xl',
				className
			)}
		>
			<div
				className={cn(
					'w-fit aspect-square grid place-content-center bg-orange-97 border border-orange-90',
					'p-3.5 2xl:p-4',
					'rounded-md 2xl:rounded-lg'
				)}
			>
				{item.icon}
			</div>

			<div className={cn('flex flex-col', 'gap-1.5 lg:gap-2.5 2xl:gap-3.5')}>
				<h5
					className={cn(
						'text-grey-15 font-medium leading-[150%]',
						'text-lg lg:text-xl 2xl:text-2xl'
					)}
				>
					{item.title}
				</h5>

				<p
					className={cn(
						'text-grey-35 font-normal leading-[150%]',
						'text-sm lg:text-base 2xl:text-lg'
					)}
				>
					{item.description}
				</p>
			</div>
		</li>
	)
}
