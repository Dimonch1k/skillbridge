'use client'

import { Button } from '@/components/ui/buttons/Button'
import { EmailField } from '@/components/ui/form/fields'
import { AgreeTermsCheckbox } from '@/components/ui/form/fields/AgreeTermsCheckbox'
import { FullNameField } from '@/components/ui/form/fields/FullNameField'
import { PasswordField } from '@/components/ui/form/fields/PasswordField'

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
		successMessage: 'You signed up successfully',
		loadingMessage: 'Signing up...',
		errorMessage: 'Failed to sign up. Please try again.'
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
			<EmailField
				register={register}
				errors={errors}
			/>
			<PasswordField
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
