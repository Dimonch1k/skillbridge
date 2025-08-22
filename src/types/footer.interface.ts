export interface IFooterInfo {
	icon: React.ReactNode
	text: string
}

export interface IFooterLink {
	title: string
	list: {
		href: string
		label: string
	}[]
}

export interface IFooterSocialProfileLink {
	href: string
	icon: React.ReactNode
	title: string
}
