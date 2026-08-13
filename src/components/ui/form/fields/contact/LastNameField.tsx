'use client'

import {
	ErrorMessage,
	Fieldset,
	FormInputField,
	Label
} from '@/components/ui/form'
import type { FormFieldProps } from '@/types/form-field.interface'

export function last_nameField({ register, errors }: FormFieldProps) {
	return (
		<Fieldset>
			<Label htmlFor='last_name'>Last Name</Label>
			<FormInputField
				id='last_name'
				type='text'
				placeholder='Enter Last Name'
				error={!!errors.last_name}
				{...register('last_name', {
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
			<ErrorMessage error={errors.last_name?.message as string} />
		</Fieldset>
	)
}
