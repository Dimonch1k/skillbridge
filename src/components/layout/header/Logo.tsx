'use client'

import { ROUTES } from '@/constants/routes.constants'
import { cn } from '@/utils/cn'

import Image from 'next/image'
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
			className={cn('size-10 lg:size-11 2xl:size-13.5', className)}
		>
			<Image
				src='/logo.svg'
				alt='SkillBridge Logo'
				width={54}
				height={54}
				className='w-full h-full'
			/>
		</Link>
	)
}
