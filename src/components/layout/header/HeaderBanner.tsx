'use client'

import { ROUTES } from '@/constants/routes.constants'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function HeaderBanner() {
	return (
		<div className='w-full bg-orange-50 py-3.5 text-white rounded-lg'>
			<Link
				href={ROUTES.COURSES}
				className='flex items-center justify-center gap-6 transition-all hover:translate-x-1 duration-300 ease-in-out'
			>
				<span className='font-medium text-xs xs:text-sm md:text-lg leading-[150%]'>
					Free Courses 🌟 Sale Ends Soon, Get It Now
				</span>

				<ArrowRight
					size={24}
					className='size-4 xs:size-5 md:size-6'
				/>
			</Link>
		</div>
	)
}
