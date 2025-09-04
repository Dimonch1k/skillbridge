'use client'

import {
	ErrorMessage,
	Fieldset,
	FormInputField,
	Label
} from '@/components/ui/form'
import type { FormFieldProps } from '@/types/form-field.interface'

export function FirstNameField({ register, errors }: FormFieldProps) {
	return (
		<Fieldset>
			<Label htmlFor='firstName'>First Name</Label>
			<FormInputField
				id='firstName'
				type='text'
				placeholder='Enter your First Name'
				error={!!errors.firstName}
				{...register('firstName', {
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
			<ErrorMessage error={errors.firstName?.message as string} />
		</Fieldset>
	)
}
