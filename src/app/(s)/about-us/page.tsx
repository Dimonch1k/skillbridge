import type { Metadata } from 'next'

import { AboutUs } from './AboutUs'

export const metadata: Metadata = {
	title: 'About Us'
}

export default function AboutUsPage() {
	return (
		<>
			<AboutUs />
		</>
	)
}
