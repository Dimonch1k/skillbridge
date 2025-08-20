'use client'

import { ROUTES } from '@/constants/routes.constants'
import type { ICourse } from '@/types/course.interface'
import { cn } from '@/utils/cn'

import Image from 'next/image'
import Link from 'next/link'

import { CourseListItemContent } from './CourseListItemContent'

export interface CourseListItemProps {
	item: ICourse
	className?: string
}

export function CourseListItem({ item, className }: CourseListItemProps) {
	return (
		<li
			className={cn(
				'flex-1 flex flex-col gap-6 lg:gap-7.5 2xl:gap p-6',
				'bg-white rounded-[10px] border border-white-95',
				className
			)}
		>
			<Image
				src={item.imageSrc}
				alt={item.title}
				width={684}
				height={380}
				className='w-full h-full object-contain'
			/>

			<CourseListItemContent item={item} />

			<Link
				href={ROUTES.COURSE(item.id)}
				className={cn(
					'w-full bg-white-97 border border-white-95 rounded-md 2xl:rounded-lg',
					'text-grey-15 text-sm 2xl:text-lg text-center',
					'px-6 py-3.5 2xl:py-4.5'
				)}
			>
				Get it Now
			</Link>
		</li>
	)
}
