// 'use client'

// import {
// 	ErrorMessage,
// 	Fieldset,
// 	FormInputField,
// 	Label,
// } from '@/components/ui/form'
// import type { TypeSendMessage } from '@/types/send-message.types'

// import { FieldErrors, UseFormRegister } from 'react-hook-form'

// export interface EmailFieldProps {
// 	register: UseFormRegister<TypeSendMessage>
// 	errors: FieldErrors<TypeSendMessage>
// }

// export function EmailField({ register, errors }: EmailFieldProps) {
// 	return (
// 		<Fieldset>
// 			<Label htmlFor='email'>Your Email</Label>
// 			<FormInputField
// 				id='email'
// 				type='email'
// 				error={!!errors.email}
// 				{...register('email', {
// 					required: 'Email is required',
// 					pattern: {
// 						value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
// 						message: 'Please enter a valid email address',
// 					},
// 				})}
// 			/>
// 			<ErrorMessage error={errors.email?.message as string} />
// 		</Fieldset>
// 	)
// }
