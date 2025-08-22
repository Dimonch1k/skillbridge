'use client'

import { ROUTES } from '@/constants/routes.constants'
import { cn } from '@/utils/cn'

import Link from 'next/link'

const linkClassName =
	'rounded-md text-sm 2xl:text-lg leading-[150%] border px-5 py-3.5 2xl:px-6 2xl:py-4.5'

export function HeroLinks() {
	return (
		<div className='flex justify-center items-center gap-3'>
			<Link
				href={ROUTES.COURSES}
				className={cn(
					linkClassName,
					'font-semibold bg-orange-50 text-white border-orange-50'
				)}
			>
				Explore Courses
			</Link>
			<Link
				href={ROUTES.PRICING}
				className={cn(
					linkClassName,
					'font-medium text-grey-15 bg-white border-white-95'
				)}
			>
				View Pricing
			</Link>
		</div>
	)
}
