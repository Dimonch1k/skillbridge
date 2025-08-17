'use client'

import { Copyright } from './Copyright'
import { FooterContainer } from './FooterContainer'

export function Footer() {
	return (
		<footer className='w-full flex flex-col gap-5 lg:gap-7.5 2xl:12.5 px-5 lg:px-20 2xl:px-[163px] pt-12.5 lg:pt-15 2xl:pt-25 pb-6 lg:pb-5 2xl:pb-7.5 bg-white'>
			<FooterContainer />
			<div className='w-full h-0.25 bg-white-95'></div>
			<Copyright />
		</footer>
	)
}
