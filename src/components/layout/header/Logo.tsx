'use client'

import { ROUTES } from '@/constants/routes.constants'
import { cn } from '@/utils/cn'

import Link from 'next/link'

export interface LogoProps {
	closeMenu?: () => void
	className?: string
}

export function Logo({ closeMenu, className }: LogoProps) {
	return (
		<Link
			href={ROUTES.HOME}
			onClick={closeMenu}
			className={cn('flex items-center text-text', className)}
		>
			Logo
		</Link>
	)
}
