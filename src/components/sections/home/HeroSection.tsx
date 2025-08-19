'use client'

import { Button } from '@/components/ui/buttons/Button'
import { AbstractLinesIcon } from '@/components/ui/icons/home/AbstractLinesIcon'
import { LightningIcon } from '@/components/ui/icons/home/LightningIcon'
import { Section } from '@/components/ui/Section'

import { ROUTES } from '@/constants/routes.constants'
import { cn } from '@/utils/cn'

import Link from 'next/link'

export function HeroSection() {
	return (
		<Section
			id='hero'
			className='w-fit mx-auto gap-12.5 2xl:gap-15'
		>
			<div className='flex flex-col items-center gap-4'>
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
						<span className='text-orange-500'>Unlock </span>
						Your Creative Potential
					</p>

					<div className='absolute -left-2.5 sm:-left-6 -top-5 sm:-top-7.5'>
						<AbstractLinesIcon color='#262626' />
					</div>
				</div>

				<div className='flex flex-col gap-1.5 px-7.5 text-grey-15 text-center'>
					<h1 className='text-2xl lg:text-[28px] 2xl:text-[38px] font-medium leading-[150%]'>
						with Online Design and Development Courses.
					</h1>
					<p className='text-sm lg:text-base 2xl:text-lg font-normal leading-[150%]'>
						Learn from Industry Experts and Enhance Your Skills.
					</p>
				</div>
			</div>

			<div className='flex justify-center items-center gap-3'>
				<Link href={ROUTES.COURSES}>
					<Button
						variant='primary'
						className={cn(
							'font-semibold 2xl:text-lg',
							'px-5 py-3.5 2xl:px-6 2xl:py-4.5'
						)}
					>
						Explore Courses
					</Button>
				</Link>
				<Link href={ROUTES.PRICING}>
					<Button
						variant='primary'
						className={cn(
							'2xl:text-lg text-grey-15 bg-white border border-white-95 font-medium',
							'px-5 py-3.5 2xl:px-6 2xl:py-4.5'
						)}
					>
						View Pricing
					</Button>
				</Link>
			</div>
		</Section>
	)
}
