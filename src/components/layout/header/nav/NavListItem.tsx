'use client'

import type { INavItem } from '@/types/nav.interface'
import { cn } from '@/utils/cn'

import Link from 'next/link'

export interface NavListItemProps {
	item: INavItem
	closeMenu?: () => void
	className?: string
}

export function NavListItem({ item, closeMenu, className }: NavListItemProps) {
	return (
		<li>
			<Link href={item.href} onClick={closeMenu} className={cn('', className)}>
				{item.label}
			</Link>
		</li>
	)
}
