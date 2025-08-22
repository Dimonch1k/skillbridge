'use client'

import { AbstractLinesIcon, LightningIcon } from '@/components/ui/icons/home'

export function HeroBanner() {
	return (
		<div className='relative w-fit flex items-center gap-2.5 p-3.5 lg:p-3 2xl:px-5 2xl:py-3.5 rounded-lg bg-white-99 border-1 border-white-95'>
			<div className='p-3 rounded-md bg-orange-95'>
				<div className='size-6 2xl:size-8.5 grid place-content-center'>
					<LightningIcon
						color='#262626'
						className='2xl:w-[25.5px] 2xl:h-[29.75px]'
					/>
				</div>
			</div>
			<p className='w-full text-center font-semibold leading-[150%] text-base xs:text-xl sm:text-2xl md:text-4xl 2xl:text-5xl'>
				<span className='text-orange-50'>Unlock </span>
				Your Creative Potential
			</p>

			<div className='absolute -left-2.5 sm:-left-6 -top-5 sm:-top-7.5'>
				<AbstractLinesIcon color='#262626' />
			</div>
		</div>
	)
}
