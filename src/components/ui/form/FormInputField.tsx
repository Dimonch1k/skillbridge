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
		let inputClasses = `w-full flex bg-white-99 p-5 2xl:py-6 border border-white-95 rounded-md 2xl:rounded-lg placeholder:text-grey-40 text-sm lg:text-base 2xl:text-lg font-normal focus:outline-hidden transition-colors duration-300 ease-linear appearance-none ${className}`

		// Add styles for the different states
		if (disabled) {
			inputClasses += 'text-gray-500 border-gray-300 cursor-not-allowed'
		} else if (error) {
			inputClasses += 'text-danger border-danger'
		} else if (success) {
			inputClasses += 'text-success border-success'
		} else {
			inputClasses += 'bg-transparent text-grey-15 border-white-95'
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
