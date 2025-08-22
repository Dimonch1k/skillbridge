'use client'

import { ViewButton } from '@/components/ui/buttons/ViewButton'
import { Section } from '@/components/ui/Section'

import { ROUTES } from '@/constants/routes.constants'
import { testimonialListData } from '@/data/testimonials.data'

import { TestimonialList } from './TestimonialList'

export function TestimonialsSection() {
	return (
		<Section
			id='testimonials'
			title='Our Testimonials'
			titleClassName='text-[28px] lg:text-[38px] 2xl:text-5xl'
			description='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'
			headerChildren={
				<ViewButton
					href={ROUTES.HOME}
					title='View All'
				/>
			}
		>
			<TestimonialList list={testimonialListData} />
		</Section>
	)
}
