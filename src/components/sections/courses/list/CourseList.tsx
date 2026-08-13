'use client'

import type { ICourse } from '@/types/sections/course.interface'

import { cn } from '@/utils/cn'

import { CourseListItem } from './CourseListItem'

export interface CourseListProps {
	list: ICourse[]
	className?: string
}

export function CourseList({ list, className }: CourseListProps) {
	return (
		<ul
			className={cn('flex flex-col', 'gap-5 lg:gap-10 2xl:gap-12.5', className)}
		>
			{list.map((course, index) => (
				<CourseListItem
					key={index}
					course={course}
				/>
			))}
		</ul>
	)
}
