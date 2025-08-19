'use client'

import { Section } from '@/components/ui/Section'

import { HeroBanner } from './HeroBanner'
import { HeroLinks } from './HeroLinks'
import { HeroText } from './HeroText'

export function HeroSection() {
	return (
		<Section
			id='hero'
			className='w-fit mx-auto gap-12.5 2xl:gap-15 mb-7.5 lg:mb-25'
		>
			<div className='flex flex-col items-center gap-4'>
				<HeroBanner />
				<HeroText />
			</div>

			<HeroLinks />
		</Section>
	)
}
