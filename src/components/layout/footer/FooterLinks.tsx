'use client'

import { footerLinksData, footerSocialProfilesData } from '@/data/footer.data'

import Link from 'next/link'

export function FooterLinks() {
	return (
		<div className='w-full flex flex-col lg:flex-row lg:justify-between gap-6'>
			<div className='w-full flex gap-7.5 lg:gap-6'>
				{footerLinksData.map((item, index) => (
					<div
						key={index}
						className='flex-1 flex flex-col gap-2.5'
					>
						<h3 className='text-lg text-grey-15 font-semibold'>{item.title}</h3>
						<ul className='flex flex-col gap-1 text-sm lg:text-base text-grey-35'>
							{item.list.map((item, index) => (
								<li
									key={index}
									className='hover:text-orange-50 transition-colors duration-100 ease-linear'
								>
									<Link
										href={item.href}
										className='text-nowrap'
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
				<h3 className='text-lg text-grey-15 font-semibold'>Social Profiles</h3>
				<ul className='flex gap-3.5'>
					{footerSocialProfilesData.map((item, index) => (
						<li
							key={index}
							className='flex items-center'
							title={item.title}
						>
							<Link
								href={item.href}
								className='bg-white-97 border border-white-95 rounded-md p-3'
							>
								<div className='size-6 grid place-content-center'>
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
