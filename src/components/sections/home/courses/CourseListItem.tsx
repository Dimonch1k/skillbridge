'use client'

import { CourseListItemInfo } from '@/components/shared/courses/CourseListItemInfo'

import { ROUTES } from '@/constants/routes.constants'
import type { ICourse } from '@/types/sections/course.interface'
import { cn } from '@/utils/cn'

import Image from 'next/image'
import Link from 'next/link'

export interface CourseListItemProps {
	course: ICourse
	className?: string
}

export function CourseListItem({ course, className }: CourseListItemProps) {
	return (
		<li
			className={cn(
				'flex-1 flex flex-col gap-6 lg:gap-7.5 2xl:gap p-6',
				'bg-white rounded-[10px] border border-white-95',
				className
			)}
		>
			<Image
				src={course.imageSrc}
				alt={course.title}
				width={684}
				height={380}
				className='w-full object-contain rounded-lg'
			/>

			<CourseListItemInfo course={course} />

			<div className='space-y-2.5 2xl:space-y-3.5'>
				<h5 className='text-grey-15 text-xl 2xl:text-2xl font-semibold leading-[150%]'>
					{course.title}
				</h5>

				<p className='text-grey-30 text-sm lg:text-base 2xl:text-lg font-normal leading-[150%]'>
					{course.description}
				</p>
			</div>

			<Link
				href={ROUTES.COURSE(course.id)}
				className={cn(
					'mt-auto w-full bg-white-97 border border-white-95 rounded-md 2xl:rounded-lg',
					'text-grey-15 text-sm 2xl:text-lg text-center',
					'px-6 py-3.5 2xl:py-4.5'
				)}
			>
				Get it Now
			</Link>
		</li>
	)
}
