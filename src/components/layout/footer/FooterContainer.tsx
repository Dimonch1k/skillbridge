'use client'

import { FooterInfo } from './FooterInfo'
import { FooterLinks } from './FooterLinks'

export function FooterContainer() {
	return (
		<div className='flex flex-col sm:flex-row lg:grid lg:grid-cols-[3fr_5fr] gap-6'>
			<FooterInfo />
			<FooterLinks />
		</div>
	)
}
