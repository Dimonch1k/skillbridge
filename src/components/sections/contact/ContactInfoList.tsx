'use client'

import { footerInfoData, footerSocialProfilesData } from '@/data/footer.data'
import { cn } from '@/utils/cn'

import { SocialProfileList } from '@/components/layout/footer/SocialProfileList'
import { ContactInfoListItem } from './ContactInfoListItem'

export function ContactInfoList() {
	return (
		<ul
			className={cn(
				'self-stretch bg-white flex flex-col gap-3.5',
				'gap-5 lg:gap-6 2xl:gap-12.5',
				'p-7.5 lg:p-15 2xl:p-20'
			)}
		>
			{footerInfoData.map((item, index) => (
				<ContactInfoListItem
					key={index}
					item={item}
				/>
			))}

			<ContactInfoListItem
				children={
					<SocialProfileList
						list={footerSocialProfilesData}
						className='gap-2.5 2xl:gap-3.5'
					/>
				}
				childrenText='Social Profiles'
			/>
		</ul>
	)
}
