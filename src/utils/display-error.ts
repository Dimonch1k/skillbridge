import toast from 'react-hot-toast'
import axios, { AxiosError } from 'axios'

export const displayError = (
	loadingToast: string,
	error: any,
	defaultMessage: string
) => {
	toast.dismiss(loadingToast)

	console.error('Contact form submission error:', error)

	let error_message = defaultMessage

	if (axios.isAxiosError(error)) {
		const axiosError = error as AxiosError<{ error?: string }>

		if (axiosError.code === 'ECONNABORTED') {
			error_message =
				'Request timeout. Please check your internet connection and try again.'
		} else if (axiosError.response?.status === 400) {
			error_message =
				axiosError.response.data?.error || 'Please fill in all required fields.'
		} else if (axiosError.response?.status === 500) {
			error_message = 'Server error. Please try again later.'
		} else if (axiosError.response?.data?.error) {
			error_message = axiosError.response.data.error
		} else if (!axiosError.response) {
			error_message =
				'No connection to server. Please check your internet connection.'
		}
	}

	toast.error(error_message, {
		duration: 7000
	})
}
