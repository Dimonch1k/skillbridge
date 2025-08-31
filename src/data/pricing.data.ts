import type { IPricing, TypePricing } from '@/types/sections/pricing.interface'

export const pricingSelectorsData: {
	title: string
	pricingType: TypePricing
}[] = [
	{ title: 'Montly', pricingType: 'month' },
	{ title: 'Yearly', pricingType: 'year' }
]

export const pricingListData: IPricing[] = [
	{
		title: 'Free Plan',
		pricePerMonth: 0,
		pricePerYear: 0,
		features: [
			{
				text: 'Access to selected free courses.',
				isAvailable: true
			},
			{
				text: 'Limited course materials and resources.',
				isAvailable: true
			},
			{
				text: 'Basic community support.',
				isAvailable: true
			},
			{
				text: 'No certification upon completion.',
				isAvailable: true
			},
			{
				text: 'Ad-supported platform.',
				isAvailable: true
			},
			{
				text: 'Access to exclusive Pro Plan community forums.',
				isAvailable: false
			},
			{
				text: 'Early access to new courses and updates.',
				isAvailable: false
			}
		]
	},
	{
		title: 'Pro Plan',
		pricePerMonth: 79,
		pricePerYear: 959,
		features: [
			{
				text: 'Unlimited access to all courses.',
				isAvailable: true
			},
			{
				text: 'Unlimited course materials and resources.',
				isAvailable: true
			},
			{
				text: 'Priority support from instructors.',
				isAvailable: true
			},
			{
				text: 'Course completion certificates.',
				isAvailable: true
			},
			{
				text: 'Ad-free experience.',
				isAvailable: true
			},
			{
				text: 'Access to exclusive Pro Plan community forums.',
				isAvailable: true
			},
			{
				text: 'Early access to new courses and updates.',
				isAvailable: true
			}
		]
	}
]
