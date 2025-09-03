'use client'

import { AuthPageContainer } from '@/components/sections/auth/AuthPageContainer'
import { AuthSection } from '@/components/sections/auth/AuthSection'

export function SignUp() {
	return (
		<AuthPageContainer>
			<AuthSection
				authType='register'
				title='Sign Up'
				subTitle='Create an account to unlock exclusive features.'
			/>
		</AuthPageContainer>
	)
}
