import { FC, ReactNode } from 'react'

import { cn } from '@/utils/cn'

interface ILabelProps {
	htmlFor?: string
	children: ReactNode
	className?: string
	isWarning?: boolean
}

export const Label: FC<ILabelProps> = ({
	htmlFor,
	children,
	className,
	isWarning,
}) => {
	return (
		<label
			htmlFor={htmlFor}
			className={cn(
				'text-sm font-inter text-foreground ml-1.5 font-medium',
				className
			)}
		>
			{children} {isWarning && <span className='text-warning'>*</span>}
		</label>
	)
}
