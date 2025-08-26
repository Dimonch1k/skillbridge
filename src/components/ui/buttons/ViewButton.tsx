'use client'

import { cn } from '@/utils/cn'

import Link from 'next/link'

export interface ViewButtonProps {
	href: string
	title: string
	className?: string
}

export function ViewButton({ href, title, className }: ViewButtonProps) {
	return (
		<Link
			href={href}
			className={cn(
				'w-fit font-normal gap-2 rounded-md text-sm xl:text-lg leading-[150%]',
				'text-nowrap text-grey-15 bg-white-99 border border-white-95',
				'px-5 py-3.5 2xl:px-6 2xl:py-4.5',
				className
			)}
		>
			{title}
		</Link>
	)
}
