'use client'

import { Button } from '@/components/ui/buttons/Button'
import { ROUTES } from '@/constants/routes.constants'

import { Home } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center text-white px-4'>
			<h1 className='text-[8rem] font-extrabold text-orange-50 drop-shadow-lg'>
				404
			</h1>
			<h2 className='mt-4 text-3xl font-semibold text-grey-15'>
				Page Not Found
			</h2>
			<p className='mt-2 max-w-md text-center text-grey-60'>
				Sorry, the page you are looking for doesn’t exist or may have been
				moved. Go back to the homepage to continue browsing.
			</p>

			<Link
				href={ROUTES.HOME}
				className='mt-8'
			>
				<Button
					type='button'
					variant='outline'
					className='border-orange-50 text-orange-50 hover:bg-orange-50 hover:text-grey-15 transition-colors flex items-center gap-2 px-6 py-3 rounded-xl shadow-lg'
				>
					<Home size={18} />
					Go Home
				</Button>
			</Link>
		</div>
	)
}
