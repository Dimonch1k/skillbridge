'use client'

import {
	ErrorMessage,
	Fieldset,
	FormInputField,
	Label
} from '@/components/ui/form'
import type { FormFieldProps } from '@/types/form-field.interface'

export function SubjectField({ register, errors }: FormFieldProps) {
	return (
		<Fieldset>
			<Label htmlFor='subject'>Subject</Label>
			<FormInputField
				id='subject'
				type='subject'
				placeholder='Enter your Subject'
				error={!!errors.subject}
				{...register('subject', {
					required: 'Subject is required'
				})}
			/>
			<ErrorMessage error={errors.subject?.message as string} />
		</Fieldset>
	)
}
