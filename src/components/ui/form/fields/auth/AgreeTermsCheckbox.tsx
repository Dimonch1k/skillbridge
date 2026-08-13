'use client'

import { UseFormRegister } from 'react-hook-form'
import Link from 'next/link'

import { Fieldset, Label } from '@/components/ui/form'

import { ROUTES } from '@/constants/routes.constants'

import type { TypeSignUpFormState } from '@/types/auth.types'

export interface AgreeTermsCheckboxProps {
	register: UseFormRegister<TypeSignUpFormState>
}

export function AgreeTermsCheckbox({ register }: AgreeTermsCheckboxProps) {
	return (
		<Fieldset className='flex flex-row items-center gap-2 2xl:gap-2.5'>
			<input
				id='is_agree_terms'
				type='checkbox'
				{...register('is_agree_terms')}
				className='size-6 2xl:size-7.5 border-white-95 accent-orange-90 hover:accent-orange-80'
			/>

			<Label
				htmlFor='is_agree_terms'
				className='text-grey-40 font-normal leading-[150%]'
			>
				I agree with{' '}
				<Link
					href={ROUTES.SIGN_UP}
					className='underline'
				>
					Terms of Use
				</Link>{' '}
				and{' '}
				<Link
					href={ROUTES.SIGN_UP}
					className='underline'
				>
					Privacy Policy
				</Link>
			</Label>
		</Fieldset>
	)
}
