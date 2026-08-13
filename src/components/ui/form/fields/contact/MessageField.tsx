'use client'

import { ErrorMessage, Fieldset, Label } from '@/components/ui/form'

import type { FormFieldProps } from '@/types/form-field.interface'

import { cn } from '@/utils/cn'

export function MessageField({ register, errors }: FormFieldProps) {
	return (
		<Fieldset>
			<Label htmlFor='message'>Message</Label>
			<textarea
				id='message'
				placeholder='Enter your Message here...'
				className={cn(
					'w-full flex bg-white-99 resize-none',
					'p-5 2xl:py-6',
					'h-36 2xl:h-44',
					'border border-white-95 rounded-md 2xl:rounded-lg',
					'text-sm lg:text-base 2xl:text-lg',
					'placeholder:text-grey-40 font-normal focus:outline-hidden appearance-none',
					'transition-colors duration-300 ease-linear',
					errors.message && 'text-danger border-danger'
				)}
				{...register('message', {
					minLength: {
						value: 10,
						message: 'Message must be at least 10 characters long'
					},
					maxLength: {
						value: 300,
						message: 'Message cannot exceed 300 characters'
					}
				})}
			/>
			<ErrorMessage error={errors.message?.message as string} />
		</Fieldset>
	)
}
