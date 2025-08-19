'use client'

import { cn } from '@/utils/cn'

import { useRouter } from 'next/navigation'

import { Button } from './Button'

export interface ViewButtonProps {
	href: string
	title: string
	className?: string
}

export function ViewButton({ href, title, className }: ViewButtonProps) {
	const router = useRouter()

	return (
		<Button
			onClick={() => router.push(href)}
			className={cn(
				'text-nowrap text-grey-15 bg-white-99 border border-white-95',
				'px-5 py-3.5 2xl:px-6 2xl:py-4.5',
				className
			)}
		>
			{title}
		</Button>
	)
}
