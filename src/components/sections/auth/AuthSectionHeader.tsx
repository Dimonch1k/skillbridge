'use client'

import { cn } from '@/utils/cn'

export interface AuthSectionHeaderProps {
	title: string
	subTitle: string
	className?: string
}

export function AuthSectionHeader({
	title,
	subTitle,
	className
}: AuthSectionHeaderProps) {
	return (
		<div
			className={cn('w-full text-center', 'space-y-2 2xl:space-y-3', className)}
		>
			<h2
				className={cn(
					'text-grey-15 font-semibold',
					'text-[28px] lg:text-[38px] 2xl:text-[48px]'
				)}
			>
				{title}
			</h2>
			<p
				className={cn(
					'text-grey-30 font-normal',
					'text-sm lg:text-base 2xl:text-lg'
				)}
			>
				{subTitle}
			</p>
		</div>
	)
}
