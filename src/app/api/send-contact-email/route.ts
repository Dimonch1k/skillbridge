// import { emailService } from '@/services/email.service'
// import type { TypeSendMessage } from '@/types/send-message.types'

// import { NextRequest, NextResponse } from 'next/server'

// export async function POST(request: NextRequest) {
// 	try {
// 		const data: TypeSendMessage = await request.json()

// 		// Validate required fields
// 		if (!data.name || !data.email || !data.message) {
// 			return NextResponse.json(
// 				{ error: 'Required fields: name, email, and message' },
// 				{ status: 400 }
// 			)
// 		}

// 		// Validate email format
// 		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// 		if (!emailRegex.test(data.email)) {
// 			return NextResponse.json(
// 				{ error: 'Please provide a valid email address' },
// 				{ status: 400 }
// 			)
// 		}

// 		// Send contact email
// 		await emailService.sendContactEmail(data)

// 		return NextResponse.json(
// 			{
// 				message: 'Message sent successfully',
// 				success: true
// 			},
// 			{ status: 200 }
// 		)
// 	} catch (error) {
// 		console.error('Error sending contact email:', error)
// 		return NextResponse.json(
// 			{ error: 'Error sending message. Please try again.' },
// 			{ status: 500 }
// 		)
// 	}
// }
