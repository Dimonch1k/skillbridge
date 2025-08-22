export const COURSE_LEVEL = {
	beginner: 'Beginner',
	intermediate: 'Intermediate',
	advance: 'Advance'
} as const

export interface ICourse {
	id: number
	imageSrc: string
	time: string
	level: string
	author: string

	title: string
	description: string
}
