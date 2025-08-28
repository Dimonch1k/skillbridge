'use client'

import { AboutJoin } from '@/components/sections/about-us/AboutJoin'
import { AchievementSection } from '@/components/sections/about-us/AchievementSection'
import { GoalsSection } from '@/components/sections/about-us/GoalsSection'
import { PageHeader } from '@/components/shared/PageHeader'

export function AboutUs() {
	return (
		<div className='w-full flex flex-col gap-12.5 lg:gap-20 2xl:gap-25'>
			<PageHeader
				title='About Skillbridge'
				description='Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.'
			/>

			<AchievementSection />
			<GoalsSection />
			<AboutJoin />
		</div>
	)
}
