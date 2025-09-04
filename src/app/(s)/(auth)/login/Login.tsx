'use client'

import { AuthPageContainer } from '@/components/sections/auth/AuthPageContainer'
import { AuthSection } from '@/components/sections/auth/AuthSection'

export function Login() {
	return (
		<AuthPageContainer>
			<AuthSection
				authType='login'
				title='Login'
				subTitle='Welcome back! Please log in to access your account.'
			/>
		</AuthPageContainer>
	)
}
