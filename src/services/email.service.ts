import type { TypeSendMessage } from '@/types/send-message.types'
import nodemailer from 'nodemailer'

class EmailService {
	private transporter: nodemailer.Transporter

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST || 'smtp.gmail.com',
			port: parseInt(process.env.EMAIL_PORT || '587'),
			secure: false,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS
			}
		})
	}

	async sendContactEmail(data: TypeSendMessage) {
		const fullName = `${data.firstName} ${data.lastName}`.trim()

		const promises = []

		// --- Email to admin ---
		const adminMailOptions = {
			from: process.env.EMAIL_USER,
			to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
			subject: `📩 New Contact Request from ${fullName}`,
			html: `
				<h2>New Contact Request - SkillBridge</h2>
				<p><strong>Name:</strong> ${fullName}</p>
				<p><strong>Email:</strong> ${data.email}</p>
				<p><strong>Phone:</strong> ${data.phone}</p>
				<p><strong>Subject:</strong> ${data.subject}</p>
				${data.message ? `<p><strong>Message:</strong><br/>${data.message}</p>` : ''}
				<hr/>
				<p>This message was sent via the <em>SkillBridge Contact Form</em>.</p>
			`,
			replyTo: data.email
		}
		promises.push(this.transporter.sendMail(adminMailOptions))

		// --- Auto-reply to user ---
		const autoReplyOptions = {
			from: process.env.EMAIL_USER,
			to: data.email,
			subject: `📚 Thanks for reaching out, ${data.firstName}!`,
			html: `
				<h2>Hi ${data.firstName},</h2>
				<p>Thank you for contacting <strong>SkillBridge</strong>! 🎓</p>
				<p>We’ve received your message regarding <strong>${data.subject}</strong>. Our team will review it carefully and get back to you within 24–48 hours.</p>

				<p>At SkillBridge, our mission is to make learning accessible and empowering for everyone. While you wait, feel free to explore our resources, tutorials, and guides to continue your learning journey.</p>

				<p>📩 <em>This is an automatic confirmation — no need to reply.</em></p>

				<hr/>
				<p>Best regards,</p>
				<p><strong>The SkillBridge Team</strong></p>
			`
		}
		promises.push(this.transporter.sendMail(autoReplyOptions))

		return await Promise.all(promises)
	}
}

export const emailService = new EmailService()
