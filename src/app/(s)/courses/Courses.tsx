'use client'

import { CourseList } from '@/components/sections/courses/CourseList'
import { PageHeader } from '@/components/shared/PageHeader'

import { courseListData } from '@/data/courses.data'

export function Courses() {
	return (
		<div className='w-full flex flex-col gap-12.5 lg:gap-20 2xl:gap-25'>
			<PageHeader
				title='Online Courses on Design and Development'
				description='Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.'
			/>

			<CourseList list={courseListData} />
		</div>
	)
}
