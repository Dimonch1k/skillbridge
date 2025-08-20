import { COURSE_LEVEL, type ICourse } from '@/types/course.interface'

export const coursesListData: ICourse[] = [
	{
		id: 1,
		imageSrc: '/courses/home/web-design-fundamentals.jpg',
		time: '4 Weeks',
		level: COURSE_LEVEL.beginner,
		author: 'John Smith',

		title: 'Web Design Fundamentals',
		description:
			'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.'
	},
	{
		id: 2,
		imageSrc: '/courses/home/ui-ux-design.jpg',
		time: '6 Weeks',
		level: COURSE_LEVEL.intermediate,
		author: 'Emily Johnson',

		title: 'UI/UX Design',
		description:
			'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.'
	},
	{
		id: 3,
		imageSrc: '/courses/home/mobile-app-dev.jpg',
		time: '8 Weeks',
		level: COURSE_LEVEL.intermediate,
		author: 'David Brown',

		title: 'Mobile App Development',
		description:
			'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.'
	},
	{
		id: 4,
		imageSrc: '/courses/home/graphic-design-for-beginners.jpg',
		time: '10 Weeks',
		level: COURSE_LEVEL.beginner,
		author: 'Sarah Thompson',

		title: 'Graphic Design for Beginners',
		description:
			'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.'
	},
	{
		id: 5,
		imageSrc: '/courses/home/front-end-web-dev.jpg',
		time: '10 Weeks',
		level: COURSE_LEVEL.intermediate,
		author: 'Michael Adams',

		title: 'Front-End Web Development',
		description:
			'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.'
	},
	{
		id: 6,
		imageSrc: '/courses/home/advanced-javascript.jpg',
		time: '6 Weeks',
		level: COURSE_LEVEL.advance,
		author: 'Jennifer Wilson',

		title: 'Advanced JavaScript',
		description:
			'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.'
	}
]
