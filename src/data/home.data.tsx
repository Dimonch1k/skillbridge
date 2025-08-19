import {
	AdobeIcon,
	AmazonIcon,
	NetflixIcon,
	NotionIcon,
	SpotifyIcon,
	ZapierIcon,
	ZoomIcon
} from '@/components/ui/icons/home/brands'

import type { IBrand, IHomeSection } from '@/types/home.interface'

const brandIconColor = '#4c4c4d'

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
				className='h-6 lg:h-7 2xl:h-8.5'
			/>
		)
	},
	{
		title: 'Spotify',
		icon: (
			<SpotifyIcon
				color={brandIconColor}
				className='h-6 lg:h-7 2xl:h-8.5'
			/>
		)
	},
	{
		title: 'Zoom',
		icon: (
			<ZoomIcon
				color={brandIconColor}
				className='h-6 lg:h-7 2xl:h-8.5'
			/>
		)
	},
	{
		title: 'Amazon',
		icon: (
			<AmazonIcon
				color={brandIconColor}
				className='h-6 lg:h-7 2xl:h-8.5'
			/>
		)
	},
	{
		title: 'Adobe',
		icon: (
			<AdobeIcon
				color={brandIconColor}
				className='h-6 lg:h-7 2xl:h-8.5'
			/>
		)
	},
	{
		title: 'Notion',
		icon: (
			<NotionIcon
				color={brandIconColor}
				className='h-6 lg:h-7 2xl:h-8.5'
			/>
		)
	},
	{
		title: 'Netflix',
		icon: (
			<NetflixIcon
				color={brandIconColor}
				className='h-6 lg:h-7 2xl:h-8.5'
			/>
		)
	}
]
