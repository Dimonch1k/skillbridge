import type { TypeLoginFormState } from '@/types/auth.types'
import { displayError } from '@/utils/display-error'

import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface UseLoginFormProps {
	successMessage?: string
	loadingMessage?: string
	errorMessage?: string
}

export function useLoginForm({
	successMessage = 'You logged in successfully',
	loadingMessage = 'Logging...',
	errorMessage = 'Failed to log into account. Please try again.'
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
		const loadingToast = toast.loading(loadingMessage)

		try {
			const response = await axios.post('/api/login', data, {
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
