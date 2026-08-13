'use client'

import Link from 'next/link'

import type { IFooterSocialProfileLink } from '@/types/footer.interface'

import { cn } from '@/utils/cn'

export interface SocialProfileListProps {
	list: IFooterSocialProfileLink[]
	className?: string
}

export function SocialProfileList({ list, className }: SocialProfileListProps) {
	return (
		<ul className={cn('flex gap-3.5', className)}>
			{list.map((item, index) => (
				<li
					key={index}
					className='flex items-center'
					title={item.title}
				>
					<Link
						target='_blank'
						href={item.href}
						className='bg-white-97 hover:bg-orange-97 border border-white-95 hover:border-orange-90 rounded-md 2xl:rounded-lg p-3 2xl:p-3.5 transition-colors duration-200 ease-linear'
					>
						<div className='size-5 2xl:size-6 grid place-content-center'>
							{item.icon}
						</div>
					</Link>
				</li>
			))}
		</ul>
	)
}
