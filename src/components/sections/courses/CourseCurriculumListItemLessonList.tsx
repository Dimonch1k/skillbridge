'use client'

import type { ICourse } from '@/types/course.interface'
import { cn } from '@/utils/cn'
import { Clock3 } from 'lucide-react'

export interface CourseCurriculumListItemLessonListProps {
	item: ICourse['curriculum'][number]
	className?: string
}

export function CourseCurriculumListItemLessonList({
	item,
	className
}: CourseCurriculumListItemLessonListProps) {
	return (
		<ul className={cn('flex flex-col', 'gap-4 2xl:gap-5', className)}>
			{item.lessons.map(lesson => (
				<li
					key={lesson.id}
					className={cn(
						'w-full flex border border-white-95',
						'flex-col lg:flex-row lg:items-center',
						'p-6 lg:px-5 2xl:px-7.5',
						'gap-6 lg:gap-1.5',
						'rounded-md 2xl:rounded-lg',
						lesson.isHighlighted && 'border-orange-80 ring-4 ring-orange-95'
					)}
				>
					<div className='w-full grid gap-0.5'>
						<h6
							className={cn(
								'text-grey-20 font-medium leading-[150%]',
								'text-base 2xl:text-xl'
							)}
						>
							{lesson.title}
						</h6>
						<p
							className={cn(
								'text-grey-35 font-normal leading-[150%]',
								'text-sm 2xl:text-lg'
							)}
						>
							Lesson {String(lesson.id).padStart(2, '0')}
						</p>
					</div>

					<div
						className={cn(
							'w-fit h-fit flex items-center gap-1 bg-white-97 rounded-md text-grey-30',
							'p-2.5 2xl:px-3.5 2xl:py-3',
							lesson.isHighlighted && 'bg-orange-90'
						)}
					>
						<Clock3
							className={cn(
								'size-5 2xl:size-6',
								lesson.isHighlighted ? 'text-grey-35' : 'text-grey-30'
							)}
						/>
						<p className='text-grey-35 text-nowrap text-sm 2xl:text-lg font-normal'>
							{lesson.time}
						</p>
					</div>
				</li>
			))}
		</ul>
	)
}
