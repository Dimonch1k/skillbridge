'use client'

import { Logo } from '@/components/layout/header/Logo'

import { footerInfoData } from '@/data/footer.data'

export function FooterInfo() {
	return (
		<div className='w-full flex flex-col gap-7.5'>
			<Logo />

			<div className='flex flex-col gap-3 font-normal text-grey-15 text-[15px] lg:text-base 2xl:text-lg'>
				{footerInfoData.map((item, index) => (
					<div
						key={index}
						className='flex items-center gap-1.5 leading-[150%]'
					>
						<div className='size-6 grid place-content-center'>{item.icon}</div>
						<span>{item.text}</span>
					</div>
				))}
			</div>
		</div>
	)
}
