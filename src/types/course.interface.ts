export const COURSE_LEVEL = {
	beginner: 'Beginner' as const,
	intermediate: 'Intermediate' as const,
	advance: 'Advance' as const
} as const

export interface ICourse {
	id: number
	imageSrc: string
	time: string
	level: string
	author: string

	title: string
	description: string

	curriculum: {
		id: number
		title: string
		lessons: {
			id: number
			title: string
			time: string
			isHighlighted: boolean
		}[]
	}[]
}
