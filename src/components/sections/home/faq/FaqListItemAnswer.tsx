'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import type { IFaq } from '@/types/sections/faq.interface'

import { cn } from '@/utils/cn'

export interface FaqListItemAnswerProps {
	item: IFaq
	className?: string
}

export function FaqListItemAnswer({ item, className }: FaqListItemAnswerProps) {
	return (
		<div
			className={cn('flex flex-col gap-5 lg:gap-10 2xl:gap-12.5', className)}
		>
			<p
				className={cn(
					'text-grey-30 text-sm lg:text-base 2xl:text-lg font-normal',
					'leading-[150%] tracking-[-0.6%]'
				)}
			>
				{item.answer}
			</p>

			{item.link && (
				<Link
					href={item.link.href}
					className={cn(
						'w-full flex items-center justify-between',
						'bg-white-97 rounded-md border border-white-95',
						'px-5 lg:px-6 2xl:px-7.5 py-3 lg:py-4 2xl:py-5'
					)}
				>
					<span className='text-grey-20 text-sm lg:text-base 2xl:text-lg font-medium leading-[150%]'>
						{item.link.label}
					</span>

					<span className='p-2.5 lg:p-3 2xl:p-3.5 bg-white rounded-full'>
						<ArrowRight className='size-5 lg:size-6 2xl:size-7 text-grey-30' />
					</span>
				</Link>
			)}
		</div>
	)
}
