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
	ref,
}) => {
	// Size Classes
	const sizeClasses = {
		sm: 'px-4 py-3 text-sm',
		md: 'px-5 py-3.5 text-sm',
		none: '',
	}

	// Variant Classes
	const variantClasses = {
		primary:
			'bg-background text-primary border-2 border-background shadow-[0_4px_14px_rgba(0,0,0,0.1)]',
		outline:
			'bg-transparent text-background border-2 border-background hover:bg-background/10',
		none: '',
	}

	return (
		<button
			className={cn(
				'inline-flex items-center justify-center font-medium gap-2 rounded-full hover:transform hover:-translate-y-0.5 transition-all duration-200 ease-linear cursor-pointer',
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
