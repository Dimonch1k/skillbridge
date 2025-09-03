'use client'

import type { ITestimonial } from '@/types/sections/testimonial.interface'
import { cn } from '@/utils/cn'

import { Button } from '@/components/ui/buttons/Button'
import { MoveLeftIcon } from '@/components/ui/icons/testimonial/MoveLeftIcon'
import { MoveRightIcon } from '@/components/ui/icons/testimonial/MoveRightIcon'

import { useState } from 'react'

import { TestimonialListItem } from './TestimonialListItem'

export interface TestimonialListProps {
	list: ITestimonial[]
	isSlider?: boolean
	className?: string
}

export function TestimonialList({
	list,
	isSlider = true,
	className
}: TestimonialListProps) {
	const [currentIndex, setCurrentIndex] = useState(0)

	if (!list || list.length === 0) return null

	const handlePrev = () => {
		setCurrentIndex(prev => (prev === 0 ? list.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setCurrentIndex(prev => (prev === list.length - 1 ? 0 : prev + 1))
	}

	if (!isSlider) {
		return (
			<ul
				className={cn(
					'w-full',
					'grid lg:grid-cols-2 gap-5 2xl:gap-7.5',
					className
				)}
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

	// Slider layout with right-side buttons
	return (
		<div
			className={cn(
				'w-full flex flex-col',
				'gap-5 lg:gap-6 2xl:gap-7.5',
				className
			)}
		>
			<TestimonialListItem
				item={list[currentIndex]}
				isSlider={isSlider}
				className='flex-1'
			/>

			{/* Buttons */}
			<div
				className={cn(
					'w-full flex',
					'justify-center lg:justify-end',
					'gap-2.5 2xl:gap-3.75'
				)}
			>
				<Button
					onClick={handlePrev}
					className={cn(
						'bg-white border border-white-95',
						'p-3 2xl:p-3.5',
						'rounded-md 2xl:rounded-lg'
					)}
					aria-label='Previous testimonial'
				>
					<MoveLeftIcon
						color='#262626'
						className='size-7.5 2xl:size-8.5'
					/>
				</Button>

				<Button
					onClick={handleNext}
					className={cn(
						'bg-white border border-white-95',
						'p-3 2xl:p-3.5',
						'rounded-md 2xl:rounded-lg'
					)}
					aria-label='Next testimonial'
				>
					<MoveRightIcon
						color='#262626'
						className='size-7.5 2xl:size-8.5'
					/>
				</Button>
			</div>
		</div>
	)
}
