'use client'

import { Button } from '@/components/ui/buttons/Button'

import { ROUTES } from '@/constants/routes.constants'
import { cn } from '@/utils/cn'

import { useRouter } from 'next/navigation'

export function HeroButtons() {
	const router = useRouter()

	return (
		<div className='flex justify-center items-center gap-3'>
			<Button
				variant='primary'
				onClick={() => router.push(ROUTES.COURSES)}
				className={cn(
					'font-semibold 2xl:text-lg',
					'px-5 py-3.5 2xl:px-6 2xl:py-4.5'
				)}
			>
				Explore Courses
			</Button>
			<Button
				variant='primary'
				onClick={() => router.push(ROUTES.PRICING)}
				className={cn(
					'2xl:text-lg text-grey-15 bg-white border border-white-95 font-medium',
					'px-5 py-3.5 2xl:px-6 2xl:py-4.5'
				)}
			>
				View Pricing
			</Button>
		</div>
	)
}
