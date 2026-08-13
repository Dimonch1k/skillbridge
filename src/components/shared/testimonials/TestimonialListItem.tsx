'use client'

import Image from 'next/image'
import Link from 'next/link'

import { ROUTES } from '@/constants/routes.constants'

import type { ITestimonial } from '@/types/sections/testimonial.interface'

import { cn } from '@/utils/cn'

export interface TestimonialListItemProps {
	item: ITestimonial
	isSlider?: boolean
	className?: string
}

export function TestimonialListItem({
	item,
	isSlider = false,
	className
}: TestimonialListItemProps) {
	return (
		<li
			className={cn(
				'flex-1 flex flex-col',
				'bg-white rounded-[10px] border border-white-95',
				className
			)}
		>
			{/* Comment */}
			<div className='p-7.5 lg:p-10 2xl:p-12.5'>
				<p className='text-grey-30 text-sm lg:text-base 2xl:text-lg text-normal leading-[150%]'>
					{item.text}
				</p>
			</div>

			{/* Line */}
			<div className='mt-auto w-full h-0.25 bg-white-95'></div>

			{/* Testimonial footer */}
			<div
				className={cn(
					'flex items-center justify-between',
					'px-7.5 lg:px-10 py-5 lg:py-6 2xl:px-12.5 2xl:py-7.5'
				)}
			>
				<div className='h-full flex items-center gap-2.5 2xl:gap-3.75'>
					<Image
						src={item.profile.src}
						alt={item.profile.full_name}
						width={61}
						height={61}
						className='size-12.5 2xl:size-15 object-contain rounded-md'
					/>

					<p className='text-nowrap text-grey-20 text-base 2xl:text-lg font-semibold leading-[150%]'>
						{item.profile.full_name}
					</p>
				</div>

				<Link
					href={ROUTES.HOME}
					className={cn(
						'bg-white-97 border border-white-95 rounded-md 2xl:rounded-lg',
						'text-grey-15 text-sm 2xl:text-lg text-center font-medium',
						'px-4 py-3.5 2xl:px-6 2xl:py-4.5'
					)}
				>
					{isSlider ? 'Read More' : 'Read Full Story'}
				</Link>
			</div>
		</li>
	)
}
