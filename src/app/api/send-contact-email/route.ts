import { NextRequest, NextResponse } from 'next/server'

import type { TypeSendMessage } from '@/types/send-message.types'

import { emailService } from '@/services/email.service'

export async function POST(request: NextRequest) {
	try {
		const data: TypeSendMessage = await request.json()

		// Validate required fields
		if (
			!data.first_name ||
			!data.last_name ||
			!data.email ||
			!data.phone ||
			!data.subject
		) {
			return NextResponse.json(
				{
					error:
						'Required fields: first_name, last_name, email, phone, and subject'
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
			first_name: data.first_name,
			last_name: data.last_name,
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
