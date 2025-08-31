import {
	FacebookIcon,
	LinkedInIcon,
	MailIcon,
	MapPinIcon,
	PhoneIcon,
	TwitterIcon
} from '@/components/ui/icons/footer'

import { ROUTES } from '@/constants/routes.constants'
import { homeSectionsData } from '@/data/home.data'

import type {
	IFooterInfo,
	IFooterLink,
	IFooterSocialProfileLink
} from '@/types/footer.interface'

const footerIconColor = '#262626'

export const footerInfoData: IFooterInfo[] = [
	{
		icon: <MailIcon color={footerIconColor} />,
		text: 'hello@skillbridge.com',
		href: 'mailto:hello@skillbridge.com'
	},
	{
		icon: <PhoneIcon color={footerIconColor} />,
		text: '+91 91813 23 2309',
		href: 'tel:+9191813232309'
	},
	{
		icon: <MapPinIcon color={footerIconColor} />,
		text: 'Some Where in the World',
		href: 'https://www.google.com/maps'
	}
]

export const footerLinksData: IFooterLink[] = [
	{
		title: 'Home',
		list: homeSectionsData.map(item => ({
			href: `/#${item.id}`,
			label: item.title
		}))
	},
	{
		title: 'About Us',
		list: [
			{ href: `${ROUTES.ABOUT_US}#company`, label: 'Company' },
			{
				href: `${ROUTES.ABOUT_US}#achievements`,
				label: 'Achievements'
			},
			{
				href: `${ROUTES.ABOUT_US}#goals`,
				label: 'Our Goals'
			}
		]
	}
]

export const footerSocialProfilesData: IFooterSocialProfileLink[] = [
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
