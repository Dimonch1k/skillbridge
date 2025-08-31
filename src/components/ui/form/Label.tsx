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
	isWarning
}) => {
	return (
		<label
			htmlFor={htmlFor}
			className={cn(
				'w-full font-be-vietnam-pro font-medium text-grey-15 leading-[150%]',
				'text-sm lg:text-base 2xl:text-lg',
				className
			)}
		>
			{children} {isWarning && <span className='text-warning'>*</span>}
		</label>
	)
}
