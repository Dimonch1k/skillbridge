'use client'

import { CourseCurriculumList } from '@/components/sections/courses/CourseCurriculumList'
import { CourseVideo } from '@/components/sections/courses/CourseVideo'
import { PageHeader } from '@/components/shared/PageHeader'
import { Loader } from '@/components/ui/Loader'

import { courseListData } from '@/data/courses.data'

import { useParams } from 'next/navigation'

export function Course() {
	const { id } = useParams()
	const course = courseListData.find(d => d.id === Number(id))

	if (!course) return <Loader />

	return (
		<div className='w-full flex flex-col gap-12.5 lg:gap-20 2xl:gap-25'>
			<PageHeader
				title={course?.title || 'Course'}
				description={course?.description || ''}
			/>

			<CourseVideo videoSrc={course?.imageSrc || ''} />
			<CourseCurriculumList list={course?.curriculum || []} />
		</div>
	)
}
