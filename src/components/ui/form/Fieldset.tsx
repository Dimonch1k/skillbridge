'use client'

import { cn } from '@/utils/cn'

export interface FieldsetProps {
	className?: string
	children?: React.ReactNode
}

export function Fieldset({ className, children }: FieldsetProps) {
	return (
		<fieldset className={cn('flex flex-col gap-1', className)}>
			{children}
		</fieldset>
	)
}
