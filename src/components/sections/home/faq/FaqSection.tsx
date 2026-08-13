'use client'

import { ViewButton } from '@/components/ui/buttons/ViewButton'
import { Section } from '@/components/ui/Section'

import { ROUTES } from '@/constants/routes.constants'

import { faqListData } from '@/data/faq.data'

import { FaqList } from './FaqList'

export function FaqSection() {
	return (
		<Section
			id='faq'
			title='Frequently Asked Questions'
			titleClassName='text-[28px] lg:text-[38px] 2xl:text-5xl leading-[120%]'
			description='Still you have any questions? Contact our Team via support@skillbridge.com'
			className='bg-white rounded-xl p-6 lg:p-20 2xl:p-25'
			headerClassName='gap-5 lg:gap-[150px] 2xl:gap-[200px]'
			headerChildren={
				<ViewButton
					href={ROUTES.CONTACT}
					title='See All FAQ’s'
				/>
			}
		>
			<FaqList list={faqListData} />
		</Section>
	)
}
