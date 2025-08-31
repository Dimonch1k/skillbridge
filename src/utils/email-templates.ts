import { TypeSendMessage } from '@/types/send-message.types'

const colors = {
	background: '#ffffff',
	foreground: '#171717',
	primary: '#2563eb',
	secondary: '#64748b',
	accent: '#f8fafc'
}

export const getContactEmailTemplate = (data: TypeSendMessage) => {
	return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Message</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${colors.accent}; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background-color: ${colors.background};">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%); padding: 30px 20px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">
        📧 New Contact Message
      </h1>
    </div>

    <!-- Content -->
    <div style="padding: 30px;">
      
      <!-- Message Info -->
      <div style="background-color: ${colors.accent}; padding: 25px; border-radius: 12px; border-left: 4px solid ${colors.primary};">
        <h2 style="color: ${colors.primary}; font-size: 20px; margin: 0 0 20px 0; font-weight: 600;">
          Contact Details
        </h2>
        
        <div style="margin-bottom: 15px;">
          <p style="margin: 0; color: ${colors.secondary}; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
            Name
          </p>
          <p style="margin: 5px 0 0 0; color: ${colors.foreground}; font-size: 16px; font-weight: 500;">
            ${data.name}
          </p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <p style="margin: 0; color: ${colors.secondary}; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
            Email
          </p>
          <p style="margin: 5px 0 0 0;">
            <a href="mailto:${data.email}" style="color: ${colors.primary}; text-decoration: none; font-size: 16px; font-weight: 500;">
              ${data.email}
            </a>
          </p>
        </div>
        
        <div>
          <p style="margin: 0; color: ${colors.secondary}; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
            Message
          </p>
          <div style="margin: 10px 0 0 0; background: ${colors.background}; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="margin: 0; color: ${colors.foreground}; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">
${data.message}
            </p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${data.email}" style="display: inline-block; background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
          Reply to ${data.name}
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: ${colors.accent}; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="color: ${colors.secondary}; font-size: 14px; margin: 0;">
        This message was sent from your website contact form
      </p>
    </div>
  </div>
</body>
</html>
  `
}

// Auto-reply template for the sender
export const getContactAutoReplyTemplate = (data: TypeSendMessage) => {
	return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message Received</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${colors.accent}; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background-color: ${colors.background};">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%); padding: 30px 20px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">
        ✅ Message Received
      </h1>
    </div>

    <!-- Content -->
    <div style="padding: 30px;">
      <p style="color: ${colors.foreground}; font-size: 18px; margin: 0 0 20px 0; font-weight: 500;">
        Hi ${data.name},
      </p>
      
      <p style="color: ${colors.foreground}; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Thank you for reaching out! I've received your message and will get back to you as soon as possible, typically within 24-48 hours.
      </p>
      
      <!-- Message Summary -->
      <div style="background-color: ${colors.accent}; padding: 20px; border-radius: 8px; border-left: 4px solid ${colors.primary}; margin: 20px 0;">
        <p style="margin: 0 0 10px 0; color: ${colors.secondary}; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
          Your Message
        </p>
        <p style="margin: 0; color: ${colors.foreground}; font-size: 15px; line-height: 1.5; white-space: pre-wrap;">
${data.message}
        </p>
      </div>
      
      <p style="color: ${colors.foreground}; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
        Best regards,<br>
        <strong>Dmytro Leskiv</strong>
      </p>
    </div>

    <!-- Footer -->
    <div style="background-color: ${colors.accent}; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="color: ${colors.secondary}; font-size: 14px; margin: 0;">
        This is an automated response. Please do not reply to this email.
      </p>
    </div>
  </div>
</body>
</html>
  `
}
