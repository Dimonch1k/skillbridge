'use client'

import Image from 'next/image'

import { Button } from '@/components/ui/buttons/Button'

import { cn } from '@/utils/cn'

export function AboutJoin() {
	return (
		<div
			className={cn(
				'w-full relative bg-white flex overflow-hidden',
				'flex-col xl:flex-row xl:items-center',
				'gap-10 xl:gap-[300px]',
				'rounded-[10px] 2xl:rounded-xl',
				'p-7.5 xl:p-15 2xl:p-20'
			)}
		>
			<div className={cn('z-10 flex flex-col', 'gap-2.5 xl:gap-3.5 2xl:gap-5')}>
				<h2
					className={cn(
						'w-full font-semibold leading-[120%]',
						'text-[28px] xl:text-[38px] 2xl:text-[48px]'
					)}
				>
					<span className='text-orange-50'>Together</span>, let's shape the
					future of digital innovation
				</h2>

				<p
					className={cn(
						'text-grey-30 leading-[150%]',
						'text-sm xl:text-base 2xl:text-xl'
					)}
				>
					Join us on this exciting learning journey and unlock your potential in
					design and development.
				</p>
			</div>

			<Button
				variant='primary'
				className={cn(
					'w-fit z-10 text-nowrap font-semibold',
					'!text-sm 2xl:!text-xl',
					'px-5 py-3.5 2xl:px-6 2xl:py-4.5',
					'rounded-md 2xl:rounded-xl'
				)}
			>
				Join Now
			</Button>

			<div
				className={cn(
					'absolute transform',
					'w-[190px] h-[170px] xl:w-[445px] xl:h-[397px]',
					'bottom-0 right-0 xl:left-3/5 xl:top-0',
					'translate-y-2/6 xl:-translate-y-1/5 2xl:-translate-0'
				)}
			>
				<Image
					src='/about-join.png'
					alt='About Join'
					width={362}
					height={323}
					className='w-full h-full object-contain'
				/>
			</div>
		</div>
	)
}
