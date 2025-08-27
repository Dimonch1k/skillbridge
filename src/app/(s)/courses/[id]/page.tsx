import type { Metadata } from 'next'

import { courseListData } from '@/data/courses.data'

import { Course } from './Course'

type Params = { id: string }

export async function generateMetadata({
	params
}: {
	params: Promise<Params>
}): Promise<Metadata> {
	const { id } = await params
	const course = courseListData.find(s => s.id === Number(id))

	return {
		title: course?.title || `Course ${id}`,
		description: course?.description || ''
	}
}

export default function CoursePage() {
	return (
		<>
			<Course />
		</>
	)
}
