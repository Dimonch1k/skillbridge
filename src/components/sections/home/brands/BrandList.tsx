'use client'

import type { IBrand } from '@/types/sections/home.interface'
import { cn } from '@/utils/cn'

export interface BrandListProps {
	list: IBrand[]
	className?: string
}

export function BrandList({ list, className }: BrandListProps) {
	return (
		<ul
			className={cn(
				'w-full flex items-center divide-x divide-white-95 overflow-x-auto',
				className
			)}
		>
			{list.map((brand, index) => (
				<li
					key={index}
					title={brand.title}
					className='flex-1 grid place-content-center px-7.5 py-5'
				>
					{brand.icon}
				</li>
			))}
		</ul>
	)
}
