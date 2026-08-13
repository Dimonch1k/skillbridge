'use client'

import Link from 'next/link'

import { ROUTES } from '@/constants/routes.constants'

import { cn } from '@/utils/cn'

export function AuthLinks() {
	return (
		<div className='flex items-center gap-7.5'>
			<Link
				href={ROUTES.SIGN_UP}
				className='font-normal text-sm 2xl:text-lg leading-[150%]'
			>
				Sign Up
			</Link>
			<Link
				href={ROUTES.LOGIN}
				className={cn(
					'px-5 py-3 lg:px-6 2xl:px-8.5 2xl:py-3.5',
					'bg-orange-50 text-white border border-orange-50',
					'font-normal rounded-md text-sm 2xl:text-lg leading-[150%]'
				)}
			>
				Login
			</Link>
		</div>
	)
}
