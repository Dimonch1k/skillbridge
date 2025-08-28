'use client'

import { Section } from '@/components/ui/Section'

import { goalListData } from '@/data/about-us.data'

import { AboutList } from './AboutList'

export function GoalsSection() {
	return (
		<Section
			id='goals'
			title='Our Goals'
			titleClassName='font-medium text-2xl lg:text-[30px] 2xl:text-[48px] leading-[120%]'
			description='At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to provide not only technical knowledge, but also practical experience, real-world projects, and mentorship that prepare our learners for success. By fostering a supportive community and encouraging creativity, we help individuals build confidence, unlock new opportunities, and bridge the gap between learning and professional growth'
		>
			<AboutList list={goalListData} />
		</Section>
	)
}
