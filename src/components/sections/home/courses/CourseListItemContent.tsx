'use client'

import type { ICourse } from '@/types/course.interface'
import { cn } from '@/utils/cn'

export interface CourseListItemContentProps {
	item: ICourse
}

export function CourseListItemContent({ item }: CourseListItemContentProps) {
	return (
		<>
			<div className='flex flex-col gap-3.5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center'>
				<div className='flex items-center gap-2.5'>
					<div
						className={cn(
							'px-3.5 py-2 2xl:px-4 2xl:py-2.5 rounded-md 2xl:rounded-lg',
							'bg-white border border-white-95'
						)}
					>
						<p className='text-grey-30 text-sm 2xl:text-lg font-normal'>
							{item.time}
						</p>
					</div>

					<div
						className={cn(
							'px-3.5 py-2 2xl:px-4 2xl:py-2.5 rounded-md 2xl:rounded-lg',
							'bg-white border border-white-95'
						)}
					>
						<p className='text-grey-30 text-sm 2xl:text-lg font-normal'>
							{item.level}
						</p>
					</div>
				</div>

				<p className='text-grey-15 text-base 2xl:text-[20px] font-medium'>
					By {item.author}
				</p>
			</div>

			<div className='space-y-2.5 2xl:space-y-3.5'>
				<h5 className='text-grey-15 text-[20px] 2xl:text-2xl font-semibold leading-[150%]'>
					{item.title}
				</h5>
				<p className='text-grey-30 text-sm lg:text-base 2xl:text-lg font-normal leading-[150%]'>
					{item.description}
				</p>
			</div>
		</>
	)
}
