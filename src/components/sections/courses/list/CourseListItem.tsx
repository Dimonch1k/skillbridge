'use client'

import { CourseListItemInfo } from '@/components/shared/courses/CourseListItemInfo'

import type { ICourse } from '@/types/sections/course.interface'
import { cn } from '@/utils/cn'

import { CourseListItemCurriculum } from './CourseListItemCurriculum'
import { CourseListItemGallery } from './CourseListItemGallery'
import { CourseListItemHeader } from './CourseListItemHeader'

export interface CourseListItemProps {
	course: ICourse
	className?: string
}

export function CourseListItem({ course, className }: CourseListItemProps) {
	return (
		<li
			className={cn(
				'bg-white flex flex-col',
				'gap-10 2xl:gap-12.5',
				'p-6 lg:p-10 2xl:p-12.5',
				'rounded-lg lg:rounded-[10px] 2xl:rounded-xl',
				className
			)}
		>
			<div className={cn('flex flex-col', 'gap-6 2xl:gap-7.5')}>
				<CourseListItemHeader course={course} />
				<CourseListItemGallery course={course} />
				<CourseListItemInfo course={course} />
			</div>

			<CourseListItemCurriculum curriculum={course.curriculum} />
		</li>
	)
}
