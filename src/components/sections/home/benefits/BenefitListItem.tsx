'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import type { IBenefit } from '@/types/sections/home.interface'

import { cn } from '@/utils/cn'

export interface BenefitListItemProps {
	index: number
	item: IBenefit
	className?: string
}

export function BenefitListItem({
	index,
	item,
	className
}: BenefitListItemProps) {
	return (
		<li
			className={cn(
				'flex-1 flex flex-col gap-7.5 p-7.5 items-end',
				'bg-white rounded-[10px]',
				className
			)}
		>
			<h3 className='text-[50px] lg:text-[60px] 2xl:text-[80px] font-bold text-right'>
				{String(index).padStart(2, '0')}
			</h3>
			<div className='w-full flex flex-col items-start gap-2.5'>
				<h5 className='text-grey-20 text-xl 2xl:text-2xl font-semibold leading-[150%]'>
					{item.title}
				</h5>
				<p className='text-grey-30 text-sm lg:text-base 2xl:text-lg font-normal leading-[150%]'>
					{item.description}
				</p>
			</div>

			<Link
				href={item.href}
				className={cn(
					'lg:mt-auto bg-white-99 border border-white-95 rounded-md 2xl:rounded-lg',
					'p-3.5 2xl:p-5'
				)}
			>
				<ArrowUpRight
					size={13}
					className='text-orange-50 size-6.5 2xl:size-8.5'
				/>
			</Link>
		</li>
	)
}
