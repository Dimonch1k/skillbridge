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
				>
					Login
				</Button>
			</Link>
		</div>
	)
}
