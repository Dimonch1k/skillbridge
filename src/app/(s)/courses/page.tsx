import type { Metadata } from 'next'

import { Courses } from './Courses'

export const metadata: Metadata = {
	title: 'Courses'
}

export default function CoursesPage() {
	return (
		<>
			<Courses />
		</>
	)
}
