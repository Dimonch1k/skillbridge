'use client'

import type { ITestimonial } from '@/types/testimonial.interface'
import { cn } from '@/utils/cn'

import { TestimonialListItem } from './TestimonialListItem'

export interface TestimonialListProps {
	list: ITestimonial[]
	className?: string
}

export function TestimonialList({ list, className }: TestimonialListProps) {
	return (
		<ul
			className={cn('w-full grid lg:grid-cols-2 gap-5 2xl:gap-7.5', className)}
		>
			{list.map((testimonial, index) => (
				<TestimonialListItem
					key={index}
					item={testimonial}
				/>
			))}
		</ul>
	)
}
