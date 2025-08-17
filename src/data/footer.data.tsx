import {
	FacebookIcon,
	LinkedInIcon,
	MailIcon,
	MapPinIcon,
	PhoneIcon,
	TwitterIcon
} from '@/components/ui/icons/footer'

import { ROUTES } from '@/constants/routes.constants'

const footerIconColor = '#262626'

export const footerInfoData = [
	{ icon: <MailIcon color={footerIconColor} />, text: 'hello@skillbridge.com' },
	{ icon: <PhoneIcon color={footerIconColor} />, text: '+91 91813 23 2309' },
	{
		icon: <MapPinIcon color={footerIconColor} />,
		text: 'Somewhere in the World'
	}
]

export const footerLinksData = [
	{
		title: 'Home',
		list: [
			{ href: '/#benefits', label: 'Benefits' },
			{ href: '/#courses', label: 'Our Courses' },
			{ href: '/#testimonials', label: 'Our Testimonials' },
			{ href: '/#faq', label: 'Our FAQ' }
		]
	},
	{
		title: 'About Us',
		list: [
			{ href: `${ROUTES.ABOUT_US}/#company`, label: 'Company' },
			{
				href: `${ROUTES.ABOUT_US}/#achievements`,
				label: 'Achievements'
			},
			{
				href: `${ROUTES.ABOUT_US}/#goals`,
				label: 'Our Goals'
			}
		]
	}
]

export const footerSocialProfilesData: {
	href: string
	icon: React.ReactNode
	title: string
}[] = [
	{
		href: '/',
		icon: <FacebookIcon color={footerIconColor} />,
		title: 'Facebook'
	},
	{
		href: '/',
		icon: <LinkedInIcon color={footerIconColor} />,
		title: 'LinkedIn'
	},
	{ href: '/', icon: <TwitterIcon color={footerIconColor} />, title: 'Twitter' }
]
