'use client'

import type { ICourse } from '@/types/sections/course.interface'

import { cn } from '@/utils/cn'

export interface CourseListItemInfoProps {
	course: ICourse
}

export function CourseListItemInfo({ course }: CourseListItemInfoProps) {
	return (
		<div className='flex flex-col gap-3.5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center'>
			<div className='flex items-center gap-2.5'>
				<div
					className={cn(
						'px-3.5 py-2 2xl:px-4 2xl:py-2.5 rounded-md 2xl:rounded-lg',
						'bg-white border border-white-95'
					)}
				>
					<p className='text-grey-30 text-sm 2xl:text-lg font-normal'>
						{course.time}
					</p>
				</div>

				<div
					className={cn(
						'px-3.5 py-2 2xl:px-4 2xl:py-2.5 rounded-md 2xl:rounded-lg',
						'bg-white border border-white-95'
					)}
				>
					<p className='text-grey-30 text-sm 2xl:text-lg font-normal'>
						{course.level}
					</p>
				</div>
			</div>

			<p className='text-grey-15 text-base 2xl:text-xl font-medium'>
				By {course.author}
			</p>
		</div>
	)
}
