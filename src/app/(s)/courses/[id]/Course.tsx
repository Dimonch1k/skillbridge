'use client'

import { useParams } from 'next/navigation'

import { CourseCurriculumList } from '@/components/sections/courses/CourseCurriculumList'
import { CourseVideo } from '@/components/sections/courses/CourseVideo'
import { PageContainer } from '@/components/shared/PageContainer'
import { PageHeader } from '@/components/shared/PageHeader'
import { Loader } from '@/components/ui/Loader'

import { courseListData } from '@/data/courses.data'

export function Course() {
	const { id } = useParams()
	const course = courseListData.find(d => d.id === Number(id))

	if (!course) return <Loader />

	return (
		<PageContainer>
			<PageHeader
				title={course?.title || 'Course'}
				description={course?.description || ''}
			/>

			<CourseVideo videoSrc={course?.imageSrc || ''} />
			<CourseCurriculumList list={course?.curriculum || []} />
		</PageContainer>
	)
}
