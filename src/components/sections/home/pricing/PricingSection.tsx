'use client'

import { PricingSelector } from '@/components/shared/pricing/PricingSelector'
import { Section } from '@/components/ui/Section'

import { pricingListData } from '@/data/pricing.data'
import type { TypePricing } from '@/types/pricing.interface'

import { useState } from 'react'

import { PricingList } from './PricingList'

export function PricingSection() {
	const [pricingType, setPricingType] = useState<TypePricing>('month')

	return (
		<Section
			id='pricing'
			title='Our Pricing'
			titleClassName='text-[28px] lg:text-[38px] 2xl:text-5xl'
			description='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'
			headerChildren={
				<PricingSelector
					pricingType={pricingType}
					setPricingType={setPricingType}
				/>
			}
			childrenClassName='w-full bg-white rounded-xl p-5 lg:p-12.5 2xl:p-20'
		>
			<PricingList
				list={pricingListData}
				pricingType={pricingType}
			/>
		</Section>
	)
}
