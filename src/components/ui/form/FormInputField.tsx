'use client'

import React from 'react'

export interface InputFieldProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: boolean
	success?: boolean
	className?: string
}

export const FormInputField = React.forwardRef<
	HTMLInputElement,
	InputFieldProps
>(
	(
		{
			type = 'text',
			error = false,
			success = false,
			className = '',
			disabled = false,
			...rest
		},
		ref
	) => {
		// Determine input styles based on state (disabled, success, error)
		let inputClasses = `h-11 w-full rounded-sm border appearance-none px-4 py-2.5 text-sm font-inter placeholder:text-gray-400 focus:outline-hidden transition-colors duration-300 ease-linear ${className}`

		// Add styles for the different states
		if (disabled) {
			inputClasses += 'text-gray-500 border-gray-300 cursor-not-allowed'
		} else if (error) {
			inputClasses += 'text-danger border-danger'
		} else if (success) {
			inputClasses += 'text-success border-success'
		} else {
			inputClasses += 'bg-transparent text-background border-background/20'
		}

		return (
			<input
				type={type}
				disabled={disabled}
				className={inputClasses}
				ref={ref}
				{...rest}
			/>
		)
	}
)

FormInputField.displayName = 'FormInputField'
