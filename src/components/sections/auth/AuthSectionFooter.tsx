'use client'

import { ROUTES } from '@/constants/routes.constants'
import type { TypeAuth } from '@/types/auth.types'
import { cn } from '@/utils/cn'
import { ArrowUpRight } from 'lucide-react'

import Link from 'next/link'

export interface AuthSectionFooterProps {
	authType: TypeAuth
	className?: string
}

export function AuthSectionFooter({
	authType,
	className
}: AuthSectionFooterProps) {
	return (
		<div className={cn('flex justify-center items-center gap-1.5', className)}>
			<p
				className={cn(
					'flex gap-1.5 text-grey-15 font-normal leading-[150%]',
					'text-sm lg:text-base 2xl:text-lg'
				)}
			>
				<span>
					{authType === 'login'
						? "Don't have an account?"
						: 'Already have an account? '}
				</span>

				<Link href={authType === 'login' ? ROUTES.SIGN_UP : ROUTES.LOGIN}>
					<span className='underline hover:no-underline font-medium'>
						{authType === 'login' ? 'Sign Up' : 'Login'}
					</span>
				</Link>
			</p>

			<ArrowUpRight className='size-5 2xl:size-6' />
		</div>
	)
}
