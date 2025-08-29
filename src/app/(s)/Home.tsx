'use client'

import {
	BenefitsSection,
	BrandsSection,
	CoursesSection,
	FaqSection,
	HeroSection,
	TestimonialsSection,
	VideoSection
} from '@/components/sections/home'

import { PricingSection } from '@/components/shared/pricing/PricingSection'

export function Home() {
	return (
		<div className='w-full flex flex-col gap-12.5 lg:gap-25 2xl:gap-37.5'>
			<div>
				<HeroSection />
				<BrandsSection />
				<VideoSection />
			</div>

			<BenefitsSection />
			<CoursesSection />
			<TestimonialsSection />
			<PricingSection
				hasTitle
				hasDescription
			/>
			<FaqSection />
		</div>
	)
}
