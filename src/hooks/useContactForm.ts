import type { TypeSendMessage } from '@/types/send-message.types'
import { displayError } from '@/utils/display-error'

import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface UseContactFormProps {
	successMessage?: string
	loadingMessage?: string
	errorMessage?: string
}

export function useContactForm({
	successMessage = '✅ Your message was sent! Our team will get back to you shortly.',
	loadingMessage = '📩 Sending your message...',
	errorMessage = '❌ Failed to send message. Please try again.'
}: UseContactFormProps = {}) {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const getDefaultValues = (): TypeSendMessage => ({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	})

	const form = useForm<TypeSendMessage>({
		mode: 'onSubmit',
		defaultValues: getDefaultValues()
	})

	const onSubmit: SubmitHandler<TypeSendMessage> = async data => {
		setIsSubmitting(true)
		const loadingToast = toast.loading(loadingMessage)

		try {
			const response = await axios.post('/api/send-contact-email', data, {
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
