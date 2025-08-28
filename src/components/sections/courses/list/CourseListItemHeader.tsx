'use client'

import { ViewButton } from '@/components/ui/buttons/ViewButton'

import { ROUTES } from '@/constants/routes.constants'
import type { ICourse } from '@/types/course.interface'
import { cn } from '@/utils/cn'

export interface CourseListItemHeaderProps {
	course: ICourse
	className?: string
}

export function CourseListItemHeader({
	course,
	className
}: CourseListItemHeaderProps) {
	return (
		<div
			className={cn(
				'w-full flex flex-col gap-5 lg:gap-12.5',
				'lg:flex-row lg:items-center',
				className
			)}
		>
			<div className='space-y-1 lg:space-y-2 2xl:space-y-2.5'>
				{/* Title */}
				<h2
					className={cn(
						'text-grey-15 font-semibold leading-[150%]',
						'text-lg lg:text-xl 2xl:text-2xl'
					)}
				>
					{course.title}
				</h2>

				{/* Description */}
				<p
					className={cn(
						'text-grey-35 font-normal leading-[150%]',
						'text-sm lg:text-base 2xl:text-lg'
					)}
				>
					{course.description}
				</p>
			</div>

			<ViewButton
				href={ROUTES.COURSE(course.id)}
				title='View Course'
			/>
		</div>
	)
}
