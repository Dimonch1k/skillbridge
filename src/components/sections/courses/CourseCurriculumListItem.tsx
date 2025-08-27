'use client'

import type { ICourse } from '@/types/course.interface'
import { cn } from '@/utils/cn'

import { CourseCurriculumListItemLessonList } from './CourseCurriculumListItemLessonList'

export interface CourseCurriculumListItemProps {
	item: ICourse['curriculum'][number]
	className?: string
}

export function CourseCurriculumListItem({
	item,
	className
}: CourseCurriculumListItemProps) {
	return (
		<li
			className={cn(
				'flex flex-col bg-white',
				'gap-7.5 lg:gap-10 2xl:gap-12.5',
				'p-7.5 lg:p-10 2xl:p-12.5',
				'rounded-[10px] 2xl:rounded-xl',
				className
			)}
		>
			<div className='flex items-center justify-end'>
				<p className='text-grey-15 font-bold leading-none text-[50px] lg:text-[60px] 2xl:text-[80px]'>
					{String(item.id).padStart(2, '0')}
				</p>
			</div>

			<p
				className={cn(
					'text-grey-20 font-semibold leading-[150%] tracking-[-0.6%]',
					'text-lg lg:text-[20px] 2xl:text-2xl'
				)}
			>
				{item.title}
			</p>

			<CourseCurriculumListItemLessonList item={item} />
		</li>
	)
}
