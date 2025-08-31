import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'

export const displayError = (
	loadingToast: string,
	error: any,
	defaultMessage: string
) => {
	toast.dismiss(loadingToast)

	console.error('Contact form submission error:', error)

	let errorMessage = defaultMessage

	if (axios.isAxiosError(error)) {
		const axiosError = error as AxiosError<{ error?: string }>

		if (axiosError.code === 'ECONNABORTED') {
			errorMessage =
				'Request timeout. Please check your internet connection and try again.'
		} else if (axiosError.response?.status === 400) {
			errorMessage =
				axiosError.response.data?.error || 'Please fill in all required fields.'
		} else if (axiosError.response?.status === 500) {
			errorMessage = 'Server error. Please try again later.'
		} else if (axiosError.response?.data?.error) {
			errorMessage = axiosError.response.data.error
		} else if (!axiosError.response) {
			errorMessage =
				'No connection to server. Please check your internet connection.'
		}
	}

	toast.error(errorMessage, {
		duration: 7000
	})
}
