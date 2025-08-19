import {
	AdobeIcon,
	AmazonIcon,
	NetflixIcon,
	NotionIcon,
	SpotifyIcon,
	ZapierIcon,
	ZoomIcon
} from '@/components/ui/icons/home/brands'
import { ROUTES } from '@/constants/routes.constants'

import type { IBenefit, IBrand, IHomeSection } from '@/types/home.interface'

const brandIconColor = '#4c4c4d'
const brandIconClassName = 'xl:w-full h-6 lg:h-7 2xl:h-8.5'

export const homeSectionsData: IHomeSection[] = [
	{
		id: 'benefits',
		title: 'Benefits'
	},
	{
		id: 'courses',
		title: 'Our Courses'
	},
	{
		id: 'testimonials',
		title: 'Our Testimonials'
	},
	{
		id: 'faq',
		title: 'Our FAQ'
	}
]

export const brandListData: IBrand[] = [
	{
		title: 'Zapier',
		icon: (
			<ZapierIcon
				color={brandIconColor}
				className={brandIconClassName}
			/>
		)
	},
	{
		title: 'Spotify',
		icon: (
			<SpotifyIcon
				color={brandIconColor}
				className={brandIconClassName}
			/>
		)
	},
	{
		title: 'Zoom',
		icon: (
			<ZoomIcon
				color={brandIconColor}
				className={brandIconClassName}
			/>
		)
	},
	{
		title: 'Amazon',
		icon: (
			<AmazonIcon
				color={brandIconColor}
				className={brandIconClassName}
			/>
		)
	},
	{
		title: 'Adobe',
		icon: (
			<AdobeIcon
				color={brandIconColor}
				className={brandIconClassName}
			/>
		)
	},
	{
		title: 'Notion',
		icon: (
			<NotionIcon
				color={brandIconColor}
				className={brandIconClassName}
			/>
		)
	},
	{
		title: 'Netflix',
		icon: (
			<NetflixIcon
				color={brandIconColor}
				className={brandIconClassName}
			/>
		)
	}
]

export const benefitsListData: IBenefit[] = [
	{
		title: 'Flexible Learning Schedule',
		description:
			'Fit your coursework around your existing commitments and obligations.',
		href: ROUTES.HOME
	},
	{
		title: 'Expert Instruction',
		description:
			'Learn from industry experts who have hands-on experience in design and development.',
		href: ROUTES.HOME
	},
	{
		title: 'Diverse Course Offerings',
		description:
			'Explore a wide range of design and development courses covering various topics.',
		href: ROUTES.HOME
	},
	{
		title: 'Updated Curriculum',
		description:
			'Access courses with up-to-date content reflecting the latest trends and industry practices.',
		href: ROUTES.HOME
	},
	{
		title: 'Practical Projects and Assignments',
		description:
			'Develop a portfolio showcasing your skills and abilities to potential employers.',
		href: ROUTES.HOME
	},
	{
		title: 'Interactive Learning Environment',
		description:
			'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.',
		href: ROUTES.HOME
	}
]
