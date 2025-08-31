'use client'

import { CourseList } from '@/components/sections/courses/list/CourseList'
import { PageContainer } from '@/components/shared/PageContainer'
import { PageHeader } from '@/components/shared/PageHeader'

import { courseListData } from '@/data/courses.data'

export function Courses() {
	return (
		<PageContainer>
			<PageHeader
				title='Online Courses on Design and Development'
				description='Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.'
			/>

			<CourseList list={courseListData} />
		</PageContainer>
	)
}
