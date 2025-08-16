'use client'

import { ErrorMessage, Fieldset, Label } from '@/components/ui/form'
import type { TypeSendMessage } from '@/types/send-message.types'
import { cn } from '@/utils/cn'

import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface MessageFieldProps {
	register: UseFormRegister<TypeSendMessage>
	errors: FieldErrors<TypeSendMessage>
}

export function MessageField({ register, errors }: MessageFieldProps) {
	return (
		<Fieldset className='mt-4'>
			<Label htmlFor='message'>Your Message</Label>
			<textarea
				id='message'
				className={cn(
					'h-36 w-full rounded-sm appearance-none px-4 py-2.5 text-sm font-inter placeholder:text-gray-400 focus:outline-hidden transition-colors duration-300 ease-linear bg-transparent text-background border border-background/20 resize-none',
					errors.message && 'text-danger border-danger'
				)}
				{...register('message', {
					minLength: {
						value: 10,
						message: 'Message must be at least 10 characters long',
					},
					maxLength: {
						value: 300,
						message: 'Message cannot exceed 300 characters',
					},
					required: 'Message is required',
				})}
			/>
			<ErrorMessage error={errors.message?.message as string} />
		</Fieldset>
	)
}
