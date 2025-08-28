'use client'

import { Section } from '@/components/ui/Section'

import { achievementListData } from '@/data/about-us.data'

import { AboutList } from './AboutList'

export function AchievementSection() {
	return (
		<Section
			id='achievements'
			title='Achievements'
			titleClassName='font-medium text-2xl lg:text-[30px] 2xl:text-[48px] leading-[120%]'
			description='Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements'
		>
			<AboutList list={achievementListData} />
		</Section>
	)
}
