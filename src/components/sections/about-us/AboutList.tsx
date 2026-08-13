'use client'

import type { IAboutItem } from '@/types/sections/about.interface'

import { cn } from '@/utils/cn'

import { AboutListItem } from './AboutListItem'

export interface AboutListProps {
	list: IAboutItem[]
	className?: string
}

export function AboutList({ list, className }: AboutListProps) {
	return (
		<ul className={cn('grid lg:grid-cols-2', 'gap-5 2xl:gap-7.5', className)}>
			{list.map((achievement, index) => (
				<AboutListItem
					key={index}
					item={achievement}
				/>
			))}
		</ul>
	)
}
