'use client'

import type { ICourse } from '@/types/course.interface'
import { cn } from '@/utils/cn'

import { CourseCurriculumListItem } from './CourseCurriculumListItem'

export interface CourseCurriculumListProps {
	list: ICourse['curriculum']
	className?: string
}

export function CourseCurriculumList({
	list,
	className
}: CourseCurriculumListProps) {
	return (
		<ul
			className={cn(
				'w-full grid lg:grid-cols-2',
				'gap-5 2xl:gap-7.5',
				className
			)}
		>
			{list.map(item => (
				<CourseCurriculumListItem
					key={item.id}
					item={item}
				/>
			))}
		</ul>
	)
}
