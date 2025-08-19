'use client'

import {
	BrandsSection,
	HeroSection,
	VideoSection
} from '@/components/sections/home'
import { BenefitsSection } from '@/components/sections/home/benefits/BenefitsSection'

export function Home() {
	return (
		<div className='w-full flex flex-col gap-12.5 lg:gap-25 2xl:gap-37.5'>
			<div>
				<HeroSection />
				<BrandsSection />
				<VideoSection />
			</div>

			<BenefitsSection />
		</div>
	)
}
