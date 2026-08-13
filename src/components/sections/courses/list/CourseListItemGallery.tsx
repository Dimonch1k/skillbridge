'use client'

import Image from 'next/image'

import type { ICourse } from '@/types/sections/course.interface'

import { cn } from '@/utils/cn'

export interface CourseListItemGalleryProps {
	course: ICourse
	className?: string
}

export function CourseListItemGallery({
	course,
	className
}: CourseListItemGalleryProps) {
	return (
		<ul
			className={cn('w-full flex h-25 sm:h-40 lg:h-auto', 'gap-2.5', className)}
		>
			{[course.imageSrc, course.imageSrc, course.imageSrc].map(
				(imageSrc, index) => (
					<li key={index}>
						<Image
							src={imageSrc}
							alt={course.title}
							width={684}
							height={380}
							className={cn(
								'w-full h-full object-cover',
								'rounded-md 2xl:rounded-lg'
							)}
						/>
					</li>
				)
			)}
		</ul>
	)
}
