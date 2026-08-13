'use client'

import { Button } from '@/components/ui/buttons/Button'
import {
	AgreeTermsCheckbox,
	FullNameField,
	SignUpEmailField,
	SignUpPasswordField
} from '@/components/ui/form/fields'

import { useSignUpForm } from '@/hooks/useSignUpForm'

import { cn } from '@/utils/cn'

export interface SignUpFormProps {
	className?: string
}

export function SignUpForm({ className }: SignUpFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		isSubmitting,
		onSubmit
	} = useSignUpForm({
		success_message: 'You signed up successfully',
		loading_message: 'Signing up...',
		error_message: 'Failed to sign up. Please try again.'
	})

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn('grid', 'gap-5 2xl:gap-6', className)}
		>
			<FullNameField
				register={register}
				errors={errors}
			/>
			<SignUpEmailField
				register={register}
				errors={errors}
			/>
			<SignUpPasswordField
				register={register}
				errors={errors}
			/>
			<AgreeTermsCheckbox register={register} />

			<Button
				type='submit'
				className={cn(
					'px-5 py-3 lg:px-6 2xl:px-8.5 2xl:py-3.5',
					'bg-orange-50 text-white border border-orange-50',
					'font-normal rounded-md text-sm 2xl:text-lg leading-[150%]'
				)}
			>
				{isSubmitting ? 'Signing Up...' : 'Sign Up'}
			</Button>
		</form>
	)
}
