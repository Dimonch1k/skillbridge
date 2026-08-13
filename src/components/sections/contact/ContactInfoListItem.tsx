'use client'

import Link from 'next/link'

import type { IFooterInfo } from '@/types/footer.interface'

import { cn } from '@/utils/cn'

export interface ContactInfoListItemProps {
	item?: IFooterInfo
	children?: React.ReactNode
	childrenText?: string
	className?: string
}

export function ContactInfoListItem({
	item,
	children,
	childrenText,
	className
}: ContactInfoListItemProps) {
	return (
		<li
			className={cn(
				'flex flex-col items-center justify-center p-7.5',
				'gap-3.5 2xl:gap-5',
				'rounded-md 2xl:rounded-lg',
				'bg-white-99 border border-white-95',
				className
			)}
		>
			{children && !item
				? children
				: item && (
						<Link
							target='_blank'
							href={item.href}
							title={item.text}
							className='bg-white-97 hover:bg-orange-97 border border-white-95 hover:border-orange-90 rounded-md 2xl:rounded-lg p-3 2xl:p-3.5 transition-colors duration-200 ease-linear'
						>
							<div className='size-5 2xl:size-6 grid place-content-center'>
								{item.icon}
							</div>
						</Link>
					)}

			<span
				className={cn(
					'text-grey-30 font-normal leading-[150%]',
					'text-nowrap text-sm lg:text-base 2xl:text-lg'
				)}
			>
				{childrenText && !item ? childrenText : item && item.text}
			</span>
		</li>
	)
}
