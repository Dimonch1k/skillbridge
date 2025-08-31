'use client'

import { cn } from '@/utils/cn'

export interface FieldsetProps {
	className?: string
	children?: React.ReactNode
}

export function Fieldset({ className, children }: FieldsetProps) {
	return (
		<fieldset
			className={cn('w-full flex flex-col', 'gap-3 2xl:gap-4', className)}
		>
			{children}
		</fieldset>
	)
}
