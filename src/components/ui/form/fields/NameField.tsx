'use client'

import {
	ErrorMessage,
	Fieldset,
	FormInputField,
	Label,
} from '@/components/ui/form'
import type { TypeSendMessage } from '@/types/send-message.types'

import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface NameFieldProps {
	register: UseFormRegister<TypeSendMessage>
	errors: FieldErrors<TypeSendMessage>
}

export function NameField({ register, errors }: NameFieldProps) {
	return (
		<Fieldset>
			<Label htmlFor='name'>Your Name</Label>
			<FormInputField
				id='name'
				type='text'
				error={!!errors.name}
				{...register('name', {
					required: 'Name is required',
					minLength: {
						value: 2,
						message: 'Name must be at least 2 characters long',
					},
					maxLength: {
						value: 100,
						message: 'Name cannot exceed 100 characters',
					},
				})}
			/>
			<ErrorMessage error={errors.name?.message as string} />
		</Fieldset>
	)
}
