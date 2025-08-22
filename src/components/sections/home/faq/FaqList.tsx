'use client'

import type { IFaq } from '@/types/faq.interface'
import { cn } from '@/utils/cn'

import { useState } from 'react'

import { FaqListItem } from './FaqListItem'

export interface FaqListProps {
	list: IFaq[]
	className?: string
}

export function FaqList({ list, className }: FaqListProps) {
	const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

	return (
		<ul className={cn('flex flex-col gap-5 lg:gap-7.5', className)}>
			{list.map((faq, index) => (
				<FaqListItem
					key={faq.id}
					item={faq}
					isOpen={openFaqIndex === index}
					openItem={() =>
						setOpenFaqIndex(openFaqIndex === index ? null : index)
					}
				/>
			))}
		</ul>
	)
}
