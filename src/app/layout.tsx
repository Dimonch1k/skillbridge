import './globals.css'

import { SEO_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { cn } from '@/utils/cn'

import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'

import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin']
})

const beVietnamPro = Be_Vietnam_Pro({
	variable: '--font-be-vietnam-pro',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SEO_DESCRIPTION,
	openGraph: {
		title: SITE_NAME,
		description: SEO_DESCRIPTION,
		images: '/logo.svg'
	},
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
	)
}
export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='icon'
					href='/logo.svg'
					sizes='any'
				/>
			</head>
			<body
				className={cn(inter.variable, beVietnamPro.variable, 'antialiased')}
			>
				<Header />
				<main className='flex-1 bg-white-97 px-4 lg:px-20 2xl:px-[163px] py-12.5 lg:pt-20 2xl:pt-25 lg:pb-25 2xl:pb-37.5'>
					{children}
				</main>
				<Footer />

				{/* Toast notifications */}
				<Toaster
					position='top-right'
					toastOptions={{
						duration: 4000
					}}
				/>
			</body>
		</html>
	)
}
