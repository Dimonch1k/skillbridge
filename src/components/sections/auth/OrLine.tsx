'use client'

import { cn } from '@/utils/cn'

export function OrLine() {
	return (
		<div className={cn('w-full flex items-center gap-3 leading-[150%]')}>
			<span className='h-0.25 w-full bg-white-90'></span>
			<span className='text-grey-60 text-sm lg:text-base 2xl:text-lg'>OR</span>
			<span className='h-0.25 w-full bg-white-90'></span>
		</div>
	)
}
