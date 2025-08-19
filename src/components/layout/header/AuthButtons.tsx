'use client'

import { Button } from '@/components/ui/buttons/Button'
import { ROUTES } from '@/constants/routes.constants'

import Link from 'next/link'

export function AuthButtons() {
	return (
		<div className='flex items-center gap-7.5'>
			<Link href={ROUTES.SIGN_UP}>
				<Button>Sign Up</Button>
			</Link>
			<Link href={ROUTES.LOGIN}>
				<Button
					type='button'
					variant='primary'
					className='px-5 py-3 lg:px-6 2xl:px-8.5 2xl:py-3.5'
				>
					Login
				</Button>
			</Link>
		</div>
	)
}
