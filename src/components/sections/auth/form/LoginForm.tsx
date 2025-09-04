'use client'

import { Button } from '@/components/ui/buttons/Button'
import { LoginEmailField } from '@/components/ui/form/fields/auth/LoginEmailField'
import { LoginPasswordField } from '@/components/ui/form/fields/auth/LoginPasswordField'
import { RememberMeCheckbox } from '@/components/ui/form/fields/auth/RememberMeCheckbox'

import { useLoginForm } from '@/hooks/useLoginForm'
import { cn } from '@/utils/cn'

export interface LoginFormProps {
	className?: string
}

export function LoginForm({ className }: LoginFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		isSubmitting,
		onSubmit
	} = useLoginForm({
		successMessage: 'You logged in successfully',
		loadingMessage: 'Logging...',
		errorMessage: 'Failed to log into account. Please try again.'
	})

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn('grid', 'gap-5 2xl:gap-6', className)}
		>
			<LoginEmailField
				register={register}
				errors={errors}
			/>
			<LoginPasswordField
				register={register}
				errors={errors}
				isLogin
			/>
			<RememberMeCheckbox register={register} />

			<Button
				type='submit'
				className={cn(
					'px-5 py-3 lg:px-6 2xl:px-8.5 2xl:py-3.5',
					'bg-orange-50 text-white border border-orange-50',
					'font-normal rounded-md text-sm 2xl:text-lg leading-[150%]'
				)}
			>
				{isSubmitting ? 'Logging...' : 'Login'}
			</Button>
		</form>
	)
}
