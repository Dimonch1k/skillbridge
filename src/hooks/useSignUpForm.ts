import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import axios from 'axios'

import type { TypeSignUpFormState } from '@/types/auth.types'

import { displayError } from '@/utils/display-error'

interface UseSignUpFormProps {
	success_message?: string
	loading_message?: string
	error_message?: string
}

export function useSignUpForm({
	success_message = 'You signed up successfully',
	loading_message = 'Signing up...',
	error_message = 'Failed to sign up. Please try again.'
}: UseSignUpFormProps = {}) {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const getDefaultValues = (): TypeSignUpFormState => ({
		full_name: '',
		email: '',
		password: ''
	})

	const form = useForm<TypeSignUpFormState>({
		mode: 'onSubmit',
		defaultValues: getDefaultValues()
	})

	const onSubmit: SubmitHandler<TypeSignUpFormState> = async data => {
		setIsSubmitting(true)
		const loadingToast = toast.loading(loading_message)

		try {
			const response = await axios.post('/api/register', data, {
				headers: { 'Content-Type': 'application/json' },
				timeout: 15000
			})

			toast.dismiss(loadingToast)

			if (response.data?.success) {
				toast.success(success_message, { duration: 5000 })
				form.reset(getDefaultValues())
			} else {
				throw new Error(response.data?.error || 'Something went wrong')
			}
		} catch (error: any) {
			displayError(loadingToast, error, error_message)
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
