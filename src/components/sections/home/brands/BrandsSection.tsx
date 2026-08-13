'use client'

import { Section } from '@/components/ui/Section'

import { brandListData } from '@/data/home.data'

import { cn } from '@/utils/cn'

import { BrandList } from './BrandList'

export function BrandsSection() {
	return (
		<Section
			id='brands'
			className={cn(
				'bg-white-99 border border-white-95 rounded-lg 2xl:rounded-xl',
				'p-2.5 lg:p-6 2xl:p-7.5 mb-7.5 lg:mb-20 2xl:mb-25'
			)}
		>
			<BrandList list={brandListData} />
		</Section>
	)
}
