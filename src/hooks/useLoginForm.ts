import type { TypeLoginFormState } from '@/types/auth.types'
import { displayError } from '@/utils/display-error'

import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface UseLoginFormProps {
	success_message?: string
	loading_message?: string
	error_message?: string
}

export function useLoginForm({
	success_message = 'You logged in successfully',
	loading_message = 'Logging...',
	error_message = 'Failed to log into account. Please try again.'
}: UseLoginFormProps = {}) {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const getDefaultValues = (): TypeLoginFormState => ({
		email: '',
		password: ''
	})

	const form = useForm<TypeLoginFormState>({
		mode: 'onSubmit',
		defaultValues: getDefaultValues()
	})

	const onSubmit: SubmitHandler<TypeLoginFormState> = async data => {
		setIsSubmitting(true)
		const loadingToast = toast.loading(loading_message)

		try {
			const response = await axios.post('/api/login', data, {
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
