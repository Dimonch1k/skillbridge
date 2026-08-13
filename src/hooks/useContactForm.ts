import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import axios from 'axios'

import type { TypeSendMessage } from '@/types/send-message.types'

import { displayError } from '@/utils/display-error'

interface UseContactFormProps {
	success_message?: string
	loading_message?: string
	error_message?: string
}

export function useContactForm({
	success_message = 'Your message was sent! Our team will get back to you shortly.',
	loading_message = '📩 Sending your message...',
	error_message = 'Failed to send message. Please try again.'
}: UseContactFormProps = {}) {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const getDefaultValues = (): TypeSendMessage => ({
		first_name: '',
		last_name: '',
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
		const loadingToast = toast.loading(loading_message)

		try {
			const response = await axios.post('/api/send-contact-email', data, {
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
