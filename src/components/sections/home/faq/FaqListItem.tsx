'use client'

import type { IFaq } from '@/types/faq.interface'
import { cn } from '@/utils/cn'

import { FaqListItemAnswer } from './FaqListItemAnswer'
import { FaqListItemQuestion } from './FaqListItemQuestion'

export interface FaqListItemProps {
	item: IFaq
	isOpen: boolean
	openItem: () => void
	className?: string
}

export function FaqListItem({
	item,
	isOpen,
	openItem,
	className
}: FaqListItemProps) {
	return (
		<li
			className={cn(
				'w-full bg-white rounded-[10px] border border-white-95',
				isOpen && 'space-y-5 lg:space-y-10 2xl:space-y-12.5',
				className
			)}
		>
			<FaqListItemQuestion
				question={item.question}
				isOpen={isOpen}
				openItem={openItem}
			/>

			{isOpen && <FaqListItemAnswer item={item} />}
		</li>
	)
}
