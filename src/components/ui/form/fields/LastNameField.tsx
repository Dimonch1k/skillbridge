'use client'

import {
	ErrorMessage,
	Fieldset,
	FormInputField,
	Label
} from '@/components/ui/form'
import type { FormFieldProps } from '@/types/form-field.interface'

export function LastNameField({ register, errors }: FormFieldProps) {
	return (
		<Fieldset>
			<Label htmlFor='lastName'>Last Name</Label>
			<FormInputField
				id='lastName'
				type='text'
				placeholder='Enter Last Name'
				error={!!errors.lastName}
				{...register('lastName', {
					required: 'Last Name is required',
					minLength: {
						value: 2,
						message: 'Last Name must be at least 2 characters long'
					},
					maxLength: {
						value: 100,
						message: 'Last Name cannot exceed 100 characters'
					}
				})}
			/>
			<ErrorMessage error={errors.lastName?.message as string} />
		</Fieldset>
	)
}
