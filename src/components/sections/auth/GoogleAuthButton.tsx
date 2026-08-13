'use client'

import { Button } from '@/components/ui/buttons/Button'
import { GoogleIcon } from '@/components/ui/icons/auth/GoogleIcon'

import type { TypeAuth } from '@/types/auth.types'

import { cn } from '@/utils/cn'

export interface GoogleAuthButtonProps {
	authType: TypeAuth
	className?: string
}

export function GoogleAuthButton({
	authType,
	className
}: GoogleAuthButtonProps) {
	return (
		<Button
			className={cn(
				'w-full bg-white-97 flex justify-center gap-3.5',
				'rounded-md lg:rounded-lg 2xl:rounded-[10px]',
				'border border-white-95',
				'px-6 py-4 2xl:py-5',
				className
			)}
		>
			<GoogleIcon className='size-6 2xl:size-7.5' />
			<span className={cn('text-grey-15 font-medium')}>
				{authType === 'login' ? 'Login with Google' : 'Sign Up with Google'}
			</span>
		</Button>
	)
}
