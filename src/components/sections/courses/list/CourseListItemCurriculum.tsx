'use client'

import type { ICourse } from '@/types/course.interface'
import { cn } from '@/utils/cn'

import React from 'react'

export interface CourseListItemCurriculumProps {
	curriculum: ICourse['curriculum']
	className?: string
}

export function CourseListItemCurriculum({
	curriculum,
	className
}: CourseListItemCurriculumProps) {
	return (
		<div
			className={cn('w-full rounded-[10px] border border-white-95', className)}
		>
			<h5
				className={cn(
					'text-grey-15 font-semibold leading-[150%] border-b border-white-95',
					'px-5 lg:px-6 2xl:px-7.5 py-3.5 lg:py-5 2xl:py-6',
					'text-base lg:text-lg 2xl:text-[22px]'
				)}
			>
				Curriculum
			</h5>

			<ul
				className={cn(
					'w-full bg-white flex rounded-xl',
					'flex-col lg:flex-row',
					'gap-5 lg:gap-10 2xl:gap-12.5',
					'p-6 lg:px-10 2xl:px-12.5 2xl:py-7.5'
				)}
			>
				{curriculum.map(item => (
					<React.Fragment key={`item-${item.id}`}>
						<li
							className={cn('w-full flex flex-col', 'gap-3 lg:gap-4 2xl:gap-5')}
						>
							<h3 className='text-[30px] lg:text-[40px] 2xl:text-[50px] font-bold'>
								{String(item.id).padStart(2, '0')}
							</h3>
							<p
								className={cn(
									'text-grey-35 font-medium leading-[150%]',
									'text-sm lg:text-base 2xl:text-lg'
								)}
							>
								{item.title}
							</p>
						</li>

						{item.id !== curriculum.length - 1 && (
							<div className='w-full h-[1px] lg:w-[1px] lg:h-auto self-stretch bg-white-95' />
						)}
					</React.Fragment>
				))}
			</ul>
		</div>
	)
}
