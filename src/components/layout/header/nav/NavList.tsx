'use client'

import type { INavItem } from '@/types/nav.interface'
import { cn } from '@/utils/cn'

import { NavListItem } from './NavListItem'

export interface NavListProps {
	list: INavItem[]
	closeMenu?: () => void
	className?: string
}

export function NavList({ list, closeMenu, className }: NavListProps) {
	return (
		<ul className={cn('', className)}>
			{list.map((item, index) => (
				<NavListItem key={index} item={item} closeMenu={closeMenu} />
			))}
		</ul>
	)
}
