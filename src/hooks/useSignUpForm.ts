import type { TypeSignUpFormState } from '@/types/auth.types'
import { displayError } from '@/utils/display-error'

import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface UseSignUpFormProps {
	successMessage?: string
	loadingMessage?: string
	errorMessage?: string
}

export function useSignUpForm({
	successMessage = 'You signed up successfully',
	loadingMessage = 'Signing up...',
	errorMessage = 'Failed to sign up. Please try again.'
}: UseSignUpFormProps = {}) {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const getDefaultValues = (): TypeSignUpFormState => ({
		fullName: '',
		email: '',
		password: ''
	})

	const form = useForm<TypeSignUpFormState>({
		mode: 'onSubmit',
		defaultValues: getDefaultValues()
	})

	const onSubmit: SubmitHandler<TypeSignUpFormState> = async data => {
		setIsSubmitting(true)
		const loadingToast = toast.loading(loadingMessage)

		try {
			const response = await axios.post('/api/register', data, {
				headers: { 'Content-Type': 'application/json' },
				timeout: 15000
			})

			toast.dismiss(loadingToast)

			if (response.data?.success) {
				toast.success(successMessage, { duration: 5000 })
				form.reset(getDefaultValues())
			} else {
				throw new Error(response.data?.error || 'Something went wrong')
			}
		} catch (error: any) {
			displayError(loadingToast, error, errorMessage)
		} finally {
			setIsSubmitting(false)
		}
	}

	return {
		...form,
		isSubmitting,
		onSubmit
	}
}
