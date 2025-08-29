'use client'

import { Button } from '@/components/ui/buttons/Button'

import { cn } from '@/utils/cn'

import { Plus } from 'lucide-react'

export interface FaqListItemQuestionProps {
	question: string
	isOpen: boolean
	openItem: () => void
	className?: string
}

export function FaqListItemQuestion({
	question,
	isOpen,
	openItem,
	className
}: FaqListItemQuestionProps) {
	return (
		<Button
			onClick={openItem}
			className={cn(
				'w-full flex items-center gap-10 lg:gap-7.5',
				'py-6 lg:py-10 2xl:py-12.5',
				'text-left focus:outline-none transition-none',
				isOpen && 'pb-5 2xl:pb-6 border-b border-white-95',
				className
			)}
		>
			<p
				className={cn(
					'w-full font-medium leading-[150%]',
					'text-grey-15 text-base lg:text-lg 2xl:text-xl'
				)}
			>
				{question}
			</p>

			<span className='p-2.5 2xl:p-3 bg-orange-95 rounded-md 2xl:rounded-lg '>
				<Plus
					className={cn(
						'size-5 lg:size-6 2xl:size-7 text-grey-15',
						'transition-transform duration-200 ease-in-out',
						isOpen && 'rotate-[-135deg]'
					)}
				/>
			</span>
		</Button>
	)
}
