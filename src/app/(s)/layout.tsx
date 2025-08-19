import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'

export default function SkillBridgeLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<main className='flex-1 bg-white-97 px-4 lg:px-20 2xl:px-[163px] py-12.5 lg:pt-20 2xl:pt-25 lg:pb-25 2xl:pb-37.5'>
				{children}
			</main>
			<Footer />
		</>
	)
}
