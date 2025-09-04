'use client'

import type { TypeAuth } from '@/types/auth.types'
import { cn } from '@/utils/cn'

import { AuthSectionFooter } from './AuthSectionFooter'
import { AuthSectionHeader } from './AuthSectionHeader'
import { GoogleAuthButton } from './GoogleAuthButton'
import { OrLine } from './OrLine'
import { LoginForm } from './form/LoginForm'
import { SignUpForm } from './form/SignUpForm'

export interface AuthSectionProps {
	authType: TypeAuth
	title: string
	subTitle: string
	className?: string
}

export function AuthSection({
	authType,
	title,
	subTitle,
	className
}: AuthSectionProps) {
	return (
		<section
			id={authType}
			className={cn(
				'bg-white grid',
				'gap-7.5 lg:gap-10 2xl:gap-12.5',
				'p-7.5 lg:p-10 2xl:p-12.5',
				'rounded-[10px] 2xl:rounded-xl',
				className
			)}
		>
			<AuthSectionHeader
				title={title}
				subTitle={subTitle}
			/>

			<div className='grid gap-6 2xl:gap-7.5'>
				{authType === 'login' ? <LoginForm /> : <SignUpForm />}
				<OrLine />
				<GoogleAuthButton authType={authType} />
				<AuthSectionFooter authType={authType} />
			</div>
		</section>
	)
}
