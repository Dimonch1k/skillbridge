import { COURSE_LEVEL, type ICourse } from '@/types/course.interface'

export const courseListData: ICourse[] = [
	{
		id: 1,
		imageSrc: '/home/courses/web-design-fundamentals.jpg',
		time: '4 Weeks',
		level: COURSE_LEVEL.beginner,
		author: 'John Smith',

		title: 'Web Design Fundamentals',
		description:
			'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
		curriculum: [
			'Introduction to HTML',
			'Styling with CSS',
			'Introduction to Responsive Design',
			'Design Principles for Web',
			'Building a Basic Website'
		]
	},
	{
		id: 2,
		imageSrc: '/home/courses/ui-ux-design.jpg',
		time: '6 Weeks',
		level: COURSE_LEVEL.intermediate,
		author: 'Emily Johnson',

		title: 'UI/UX Design',
		description:
			'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
		curriculum: [
			'Introduction to UI/UX Design',
			'User Research and Personas',
			'Wireframing and Prototyping',
			'Visual Design and Branding',
			'Usability Testing and Iteration'
		]
	},
	{
		id: 3,
		imageSrc: '/home/courses/mobile-app-dev.jpg',
		time: '8 Weeks',
		level: COURSE_LEVEL.intermediate,
		author: 'David Brown',

		title: 'Mobile App Development',
		description:
			'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',
		curriculum: [
			'Introduction to Mobile App Development',
			'Fundamentals of Swift Programming (iOS)',
			'Fundamentals of Kotlin Programming (Android)',
			'Building User Interfaces',
			'App Deployment and Testing'
		]
	},
	{
		id: 4,
		imageSrc: '/home/courses/graphic-design-for-beginners.jpg',
		time: '10 Weeks',
		level: COURSE_LEVEL.beginner,
		author: 'Sarah Thompson',

		title: 'Graphic Design for Beginners',
		description:
			'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
		curriculum: [
			'Introduction to Graphic Design',
			'Typography and Color Theory',
			'Layout Design and Composition',
			'Image Editing and Manipulation',
			'Designing for Print and Digital Media'
		]
	},
	{
		id: 5,
		imageSrc: '/home/courses/front-end-web-dev.jpg',
		time: '10 Weeks',
		level: COURSE_LEVEL.intermediate,
		author: 'Michael Adams',

		title: 'Front-End Web Development',
		description:
			'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
		curriculum: [
			'HTML Fundamentals',
			'CSS Styling and Layouts',
			'JavaScript Basics',
			'Building Responsive Websites',
			'Introduction to Bootstrap and React'
		]
	},
	{
		id: 6,
		imageSrc: '/home/courses/advanced-javascript.jpg',
		time: '6 Weeks',
		level: COURSE_LEVEL.advance,
		author: 'Jennifer Wilson',

		title: 'Advanced JavaScript',
		description:
			'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.',
		curriculum: [
			'Closures and Scope',
			'Prototypes and Inheritance',
			'Asynchronous JavaScript',
			'ES6+ Features',
			'Advanced Application Patterns'
		]
	}
]
