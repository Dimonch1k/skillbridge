'use client'

import type { IBenefit } from '@/types/home.interface'
import { cn } from '@/utils/cn'
import { BenefitListItem } from './BenefitListItem'

export interface BenefitListProps {
	list: IBenefit[]
	className?: string
}

export function BenefitList({ list, className }: BenefitListProps) {
	return (
		<ul
			className={cn(
				'w-full grid lg:grid-cols-2 2xl:grid-cols-3 gap-5',
				className
			)}
		>
			{list.map((benefit, index = 1) => (
				<BenefitListItem
					key={index}
					index={index + 1}
					item={benefit}
				/>
			))}
		</ul>
	)
}
