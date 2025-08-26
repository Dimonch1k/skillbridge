'use client'

import { PageHeader } from '@/components/shared/PageHeader'
import { Loader } from '@/components/ui/Loader'

import { courseListData } from '@/data/courses.data'

import { useParams } from 'next/navigation'

export function Course() {
	const { id } = useParams()
	const course = courseListData.find(d => d.id === Number(id))

	if (!course) return <Loader />

	return (
		<div className=''>
			<PageHeader
				title={course?.title || 'Course'}
				description={course?.description || ''}
			/>
		</div>
	)
}
