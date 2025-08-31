// import type { TypeSendMessage } from '@/types/send-message.types'
// import {
// 	getContactAutoReplyTemplate,
// 	getContactEmailTemplate
// } from '@/utils/email-templates'

// import nodemailer from 'nodemailer'

// class EmailService {
// 	private transporter: nodemailer.Transporter

// 	constructor() {
// 		this.transporter = nodemailer.createTransport({
// 			host: process.env.EMAIL_HOST || 'smtp.gmail.com',
// 			port: parseInt(process.env.EMAIL_PORT || '587'),
// 			secure: false,
// 			auth: {
// 				user: process.env.EMAIL_USER,
// 				pass: process.env.EMAIL_PASS
// 			}
// 		})
// 	}

// 	async sendContactEmail(data: TypeSendMessage) {
// 		const promises = []

// 		const adminMailOptions = {
// 			from: process.env.EMAIL_USER,
// 			to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
// 			subject: `💌 New Contact Message from ${data.name}`,
// 			html: getContactEmailTemplate(data),
// 			replyTo: data.email
// 		}
// 		promises.push(this.transporter.sendMail(adminMailOptions))

// 		const autoReplyOptions = {
// 			from: process.env.EMAIL_USER,
// 			to: data.email,
// 			subject: `✅ Message Received - Thank you ${data.name}!`,
// 			html: getContactAutoReplyTemplate(data)
// 		}
// 		promises.push(this.transporter.sendMail(autoReplyOptions))

// 		return await Promise.all(promises)
// 	}
// }

// export const emailService = new EmailService()
