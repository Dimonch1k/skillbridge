'use client'

import {
	ErrorMessage,
	Fieldset,
	FormInputField,
	Label,
	ShowPasswordButton
} from '@/components/ui/form'

import { ROUTES } from '@/constants/routes.constants'
import type { TypeLoginFormState } from '@/types/auth.types'
import { cn } from '@/utils/cn'

import Link from 'next/link'
import { useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface LoginPasswordFieldProps {
	register: UseFormRegister<TypeLoginFormState>
	errors: FieldErrors<TypeLoginFormState>
	isLogin?: boolean
}

export function LoginPasswordField({
	register,
	errors,
	isLogin
}: LoginPasswordFieldProps) {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<Fieldset>
			<Label htmlFor='password'>Password</Label>
			<div className='relative'>
				<FormInputField
					id='password'
					type={showPassword ? 'text' : 'password'}
					placeholder='Enter your Password'
					error={!!errors.password}
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Password must be at least 6 characters long'
						}
					})}
				/>
				<ShowPasswordButton
					showPassword={showPassword}
					setShowPassword={() => setShowPassword(prev => !prev)}
				/>
			</div>

			{isLogin && (
				<Link
					href={ROUTES.SIGN_UP}
					className={cn(
						'text-right text-grey-30 font-normal leading-[150%]',
						'text-sm lg:text-base 2xl:text-lg'
					)}
				>
					Forgot Password?
				</Link>
			)}
			<ErrorMessage error={errors.password?.message as string} />
		</Fieldset>
	)
}
