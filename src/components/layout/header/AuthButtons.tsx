'use client'

import { Button } from '@/components/ui/buttons/Button'
import { ROUTES } from '@/constants/routes.constants'

import { useRouter } from 'next/navigation'

export function AuthButtons() {
	const router = useRouter()

	return (
		<div className='flex items-center gap-7.5'>
			<Button onClick={() => router.push(ROUTES.SIGN_UP)}>Sign Up</Button>
			<Button
				type='button'
				variant='primary'
				onClick={() => router.push(ROUTES.LOGIN)}
				className='px-5 py-3 lg:px-6 2xl:px-8.5 2xl:py-3.5'
			>
				Login
			</Button>
		</div>
	)
}
