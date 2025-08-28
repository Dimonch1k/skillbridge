import {
	AlarmIcon,
	BackpackIcon,
	BookIcon,
	CrownIcon,
	LightningShieldIcon,
	MasksIcon,
	MedalIcon,
	PuzzleIcon
} from '@/components/ui/icons/about'

import { IAboutItem } from '@/types/about.interface'

const aboutIconColor = '#ff9500'

export const achievementListData: IAboutItem[] = [
	{
		icon: <CrownIcon color={aboutIconColor} />,
		title: 'Trusted by Thousands',
		description:
			'We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.'
	},
	{
		icon: <MedalIcon color={aboutIconColor} />,
		title: 'Award-Winning Courses',
		description:
			'Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.'
	},
	{
		icon: <MasksIcon color={aboutIconColor} />,
		title: 'Positive Student Feedback',
		description:
			'We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.'
	},
	{
		icon: <LightningShieldIcon color={aboutIconColor} />,
		title: 'Industry Partnerships',
		description:
			'We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies'
	}
]

export const goalListData: IAboutItem[] = [
	{
		icon: <BackpackIcon color={aboutIconColor} />,
		title: 'Provide Practical Skills',
		description:
			'We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.'
	},
	{
		icon: <BookIcon color={aboutIconColor} />,
		title: 'Foster Creative Problem-Solving',
		description:
			'We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.'
	},
	{
		icon: <PuzzleIcon color={aboutIconColor} />,
		title: 'Promote Collaboration and Community',
		description:
			'We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.'
	},
	{
		icon: <AlarmIcon color={aboutIconColor} />,
		title: 'Stay Ahead of the Curve',
		description:
			'The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.'
	}
]
