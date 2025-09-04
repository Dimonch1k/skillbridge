'use client'

import { Fieldset, Label } from '@/components/ui/form'

import type {
	TypeLoginFormState,
	TypeSignUpFormState
} from '@/types/auth.types'

import { UseFormRegister } from 'react-hook-form'

export interface RememberMeCheckboxProps {
	register: UseFormRegister<TypeLoginFormState | TypeSignUpFormState>
}

export function RememberMeCheckbox({ register }: RememberMeCheckboxProps) {
	return (
		<Fieldset className='flex flex-row items-center gap-2 2xl:gap-2.5'>
			<input
				id='isRememberMe'
				type='checkbox'
				{...register('isRememberMe')}
				className='size-6 2xl:size-7.5 border-white-95 accent-orange-90 hover:accent-orange-80'
			/>
			<Label
				htmlFor='rememberMe'
				className='text-grey-40 font-normal leading-[150%]'
			>
				Remember Me
			</Label>
		</Fieldset>
	)
}
