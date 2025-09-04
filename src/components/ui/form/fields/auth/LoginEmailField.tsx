'use client'

import {
	ErrorMessage,
	Fieldset,
	FormInputField,
	Label
} from '@/components/ui/form'

import type { TypeLoginFormState } from '@/types/auth.types'

import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface LoginEmailFieldProps {
	register: UseFormRegister<TypeLoginFormState>
	errors: FieldErrors<TypeLoginFormState>
}

export function LoginEmailField({ register, errors }: LoginEmailFieldProps) {
	return (
		<Fieldset>
			<Label htmlFor='email'>Email</Label>
			<FormInputField
				id='email'
				type='email'
				placeholder='Enter your Email'
				error={!!errors.email}
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						message: 'Please enter a valid email address'
					}
				})}
			/>
			<ErrorMessage error={errors.email?.message as string} />
		</Fieldset>
	)
}
