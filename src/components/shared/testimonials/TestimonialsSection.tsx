'use client'

import { ViewButton } from '@/components/ui/buttons/ViewButton'
import { Section } from '@/components/ui/Section'

import { ROUTES } from '@/constants/routes.constants'
import { testimonialListData } from '@/data/testimonials.data'

import { TestimonialList } from './TestimonialList'

import { cn } from '@/utils/cn'

export interface TestimonialsSectionProps {
	hasHeaderChildren?: boolean
	className?: string
}

export function TestimonialsSection({
	hasHeaderChildren = true,
	className
}: TestimonialsSectionProps) {
	return (
		<Section
			id='testimonials'
			title='Our Testimonials'
			titleClassName='text-[28px] lg:text-[30px] 2xl:text-[38px] font-medium'
			description='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'
			headerChildren={
				hasHeaderChildren && (
					<ViewButton
						href={ROUTES.HOME}
						title='View All'
					/>
				)
			}
			className={cn('', className)}
		>
			<TestimonialList list={testimonialListData} />
		</Section>
	)
}
