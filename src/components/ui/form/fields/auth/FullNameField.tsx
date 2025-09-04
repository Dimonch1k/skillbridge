'use client'

import {
	ErrorMessage,
	Fieldset,
	FormInputField,
	Label
} from '@/components/ui/form'

import type { TypeSignUpFormState } from '@/types/auth.types'

import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface FullNameFieldProps {
	register: UseFormRegister<TypeSignUpFormState>
	errors: FieldErrors<TypeSignUpFormState>
}

export function FullNameField({ register, errors }: FullNameFieldProps) {
	return (
		<Fieldset>
			<Label htmlFor='fullName'>Full Name</Label>
			<FormInputField
				id='fullName'
				type='text'
				placeholder='Enter your Name'
				error={!!errors.fullName}
				{...register('fullName', {
					required: 'Full Name is required',
					minLength: {
						value: 2,
						message: 'Full Name must be at least 2 characters long'
					},
					maxLength: {
						value: 100,
						message: 'Full Name cannot exceed 100 characters'
					}
				})}
			/>
			<ErrorMessage error={errors.fullName?.message as string} />
		</Fieldset>
	)
}
