'use client'

import Link from 'next/link'

import type { INavItem } from '@/types/nav.interface'

import { cn } from '@/utils/cn'

export interface NavListItemProps {
	item: INavItem
	isActive: boolean
	closeMenu?: () => void
	className?: string
}

export function NavListItem({
	item,
	isActive,
	closeMenu,
	className
}: NavListItemProps) {
	return (
		<li>
			<Link
				href={item.href}
				onClick={closeMenu}
				className={cn(
					'text-grey-15 leading-[150%] text-sm 2xl:text-lg',
					className,
					isActive
						? 'text-orange-50 md:text-grey-15 md:bg-white-95 md:rounded-lg md:px-6 md:py-3.5'
						: 'hover:text-orange-50 transition-colors duration-300 ease-in-out'
				)}
			>
				{item.label}
			</Link>
		</li>
	)
}
