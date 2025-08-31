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
		<ul className={cn('w-full grid lg:grid-cols-2 gap-5', className)}>
			{list.map((course, index) => (
				<CourseListItem
					key={index}
					course={course}
				/>
			))}
		</ul>
	)
}
