'use client'

import {
	ErrorMessage,
	Fieldset,
	FormInputField,
	Label
} from '@/components/ui/form'

import type { FormFieldProps } from '@/types/form-field.interface'

export function PhoneField({ register, errors }: FormFieldProps) {
	return (
		<Fieldset>
			<Label htmlFor='phone'>Phone</Label>
			<FormInputField
				id='phone'
				type='phone'
				placeholder='Enter Phone Number'
				error={!!errors.phone}
				{...register('phone', {
					required: 'Phone is required'
				})}
			/>
			<ErrorMessage error={errors.phone?.message as string} />
		</Fieldset>
	)
}
