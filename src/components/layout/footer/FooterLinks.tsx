'use client'

import { footerLinksData, footerSocialProfilesData } from '@/data/footer.data'

import Link from 'next/link'

export function FooterLinks() {
	return (
		<div className='w-full flex flex-col lg:flex-row lg:justify-between gap-6'>
			<div className='w-full flex gap-7.5 lg:gap-6'>
				{footerLinksData.map((item, i1) => (
					<div
						key={i1}
						className='flex-1 flex flex-col gap-2.5'
					>
						<h3 className='text-lg 2xl:text-xl text-grey-15 font-semibold'>
							{item.title}
						</h3>
						<ul className='flex flex-col gap-1 text-sm lg:text-base 2xl:text-lg text-grey-35'>
							{item.list.map((item, i2) => (
								<li key={i2}>
									<Link
										href={item.href}
										className='text-nowrap hover:text-orange-50 transition-colors duration-100 ease-linear'
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className='flex-1 flex flex-col gap-2.5'>
				<h3 className='text-lg 2xl:text-xl text-grey-15 font-semibold'>
					Social Profiles
				</h3>
				<ul className='flex gap-3.5'>
					{footerSocialProfilesData.map((item, index) => (
						<li
							key={index}
							className='flex items-center'
							title={item.title}
						>
							<Link
								href={item.href}
								className='bg-white-97 hover:bg-orange-97 border border-white-95 hover:border-orange-90 rounded-md 2xl:rounded-lg p-3 2xl:p-3.5 transition-colors duration-200 ease-linear'
							>
								<div className='size-5 2xl:size-6 grid place-content-center'>
									{item.icon}
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
