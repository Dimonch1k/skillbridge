'use client'

import {
	ErrorMessage,
	Fieldset,
	FormInputField,
	Label
} from '@/components/ui/form'
import type { FormFieldProps } from '@/types/form-field.interface'

export function first_nameField({ register, errors }: FormFieldProps) {
	return (
		<Fieldset>
			<Label htmlFor='first_name'>First Name</Label>
			<FormInputField
				id='first_name'
				type='text'
				placeholder='Enter your First Name'
				error={!!errors.first_name}
				{...register('first_name', {
					required: 'First Name is required',
					minLength: {
						value: 2,
						message: 'First Name must be at least 2 characters long'
					},
					maxLength: {
						value: 100,
						message: 'First Name cannot exceed 100 characters'
					}
				})}
			/>
			<ErrorMessage error={errors.first_name?.message as string} />
		</Fieldset>
	)
}
