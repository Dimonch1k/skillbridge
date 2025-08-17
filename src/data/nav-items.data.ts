import { ROUTES } from '@/constants/routes.constants'
import type { INavItem } from '@/types/nav.interface'

export const navItemsData: INavItem[] = [
	{
		href: ROUTES.HOME,
		label: 'Home'
	},
	{
		href: ROUTES.COURSES,
		label: 'Courses'
	},
	{
		href: ROUTES.ABOUT_US,
		label: 'About Us'
	},
	{
		href: ROUTES.PRICING,
		label: 'Pricing'
	},
	{
		href: ROUTES.CONTACT,
		label: 'Contact'
	}
]
