import { cn } from '@/utils/cn'
import { ForwardedRef, ReactNode } from 'react'

export interface ButtonProps {
	children: ReactNode
	type?: 'button' | 'submit' | 'reset'
	size?: 'sm' | 'md' | 'none'
	variant?: 'primary' | 'outline' | 'none'
	startIcon?: ReactNode
	endIcon?: ReactNode
	onClick?: () => void
	disabled?: boolean
	className?: string
	title?: string
	ref?: ForwardedRef<HTMLButtonElement>
}

export const Button: React.FC<ButtonProps> = ({
	children,
	type = 'button',
	size = 'none',
	variant = 'none',
	startIcon,
	endIcon,
	onClick,
	className = '',
	disabled = false,
	title,
	ref
}) => {
	// Size Classes
	const sizeClasses = {
		sm: 'px-4 py-3 text-sm',
		md: 'px-5 py-3.5 text-sm',
		none: ''
	}

	// Variant Classes
	const variantClasses = {
		primary: 'bg-orange-50 text-white px-5 px-6 lg:px-8.5 py-3 lg:py-3.5',
		outline:
			'bg-transparent text-black px-8.5 py-3.5 border-2 border-orange-50',
		none: ''
	}

	return (
		<button
			className={cn(
				'inline-flex items-center justify-center font-normal gap-2 rounded-md transition-colors duration-300 ease-linear cursor-pointer text-sm xl:text-lg leading-[150%]',
				sizeClasses[size],
				variantClasses[variant],
				className,
				disabled ? 'cursor-not-allowed opacity-50' : ''
			)}
			onClick={onClick}
			disabled={disabled}
			type={type}
			title={title}
			ref={ref}
		>
			{startIcon && <span className='flex items-center'>{startIcon}</span>}
			{children}
			{endIcon && <span className='flex items-center'>{endIcon}</span>}
		</button>
	)
}
