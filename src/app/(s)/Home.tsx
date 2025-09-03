'use client'

import {
	BenefitsSection,
	BrandsSection,
	CoursesSection,
	FaqSection,
	HeroSection,
	VideoSection
} from '@/components/sections/home'

import { PageContainer } from '@/components/shared/PageContainer'
import { PricingSection } from '@/components/shared/pricing/PricingSection'
import { TestimonialsSection } from '@/components/shared/testimonials/TestimonialsSection'

export function Home() {
	return (
		<PageContainer className='lg:gap-25 2xl:gap-37.5'>
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
		</PageContainer>
	)
}
