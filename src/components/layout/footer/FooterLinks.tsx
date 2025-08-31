'use client'

import { footerLinksData, footerSocialProfilesData } from '@/data/footer.data'

import Link from 'next/link'
import { SocialProfileList } from './SocialProfileList'

export function FooterLinks() {
	return (
		<div className='w-full flex flex-col lg:flex-row lg:justify-between gap-6'>
			<ul className='w-full flex gap-7.5 lg:gap-6'>
				{footerLinksData.map((item, i1) => (
					<li
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
										target='_blank'
										href={item.href}
										className='text-nowrap hover:text-orange-50 transition-colors duration-100 ease-linear'
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>

			<div className='flex-1 flex flex-col gap-2.5'>
				<h3 className='text-lg 2xl:text-xl text-grey-15 font-semibold'>
					Social Profiles
				</h3>
				<SocialProfileList list={footerSocialProfilesData} />
			</div>
		</div>
	)
}
