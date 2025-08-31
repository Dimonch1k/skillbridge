import { emailService } from '@/services/email.service'
import type { TypeSendMessage } from '@/types/send-message.types'

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	try {
		const data: TypeSendMessage = await request.json()

		// Validate required fields
		if (
			!data.firstName ||
			!data.lastName ||
			!data.email ||
			!data.phone ||
			!data.subject
		) {
			return NextResponse.json(
				{
					error:
						'Required fields: firstName, lastName, email, phone, and subject'
				},
				{ status: 400 }
			)
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(data.email)) {
			return NextResponse.json(
				{ error: 'Please provide a valid email address' },
				{ status: 400 }
			)
		}

		// Send contact email
		await emailService.sendContactEmail({
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			phone: data.phone,
			subject: data.subject,
			message: data.message ?? ''
		})

		return NextResponse.json(
			{ message: 'Message sent successfully', success: true },
			{ status: 200 }
		)
	} catch (error) {
		console.error('Error sending contact email:', error)
		return NextResponse.json(
			{ error: 'Error sending message. Please try again.' },
			{ status: 500 }
		)
	}
}
