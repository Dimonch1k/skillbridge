'use client'

import type { INavItem } from '@/types/nav.interface'
import { cn } from '@/utils/cn'

import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import { NavListItem } from './NavListItem'

export interface NavListProps {
	list: INavItem[]
	closeMenu?: () => void
	className?: string
}

export function NavList({ list, closeMenu, className }: NavListProps) {
	const pathname = usePathname()

	return (
		<ul className={cn('flex items-center justify-center gap-7', className)}>
			{list.map((item, index) => (
				<NavListItem
					key={index}
					item={item}
					isActive={!!match(item.href)(pathname)}
					closeMenu={closeMenu}
				/>
			))}
		</ul>
	)
}
