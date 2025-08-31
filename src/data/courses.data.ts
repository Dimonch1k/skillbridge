import { COURSE_LEVEL, type ICourse } from '@/types/sections/course.interface'

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
			{
				id: 1,
				title: 'Introduction to HTML',
				lessons: [
					{
						id: 1,
						title: 'HTML Structure and Tags',
						time: '45 Minutes',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Links, Lists, and Media',
						time: '1 Hour',
						isHighlighted: true
					},
					{
						id: 3,
						title: 'Semantic HTML Best Practices',
						time: '45 Minutes',
						isHighlighted: false
					}
				]
			},
			{
				id: 2,
				title: 'Styling with CSS',
				lessons: [
					{
						id: 1,
						title: 'CSS Selectors and Properties',
						time: '1 Hour',
						isHighlighted: true
					},
					{
						id: 2,
						title: 'The Box Model and Positioning',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 3,
						title: 'Flexbox and Grid Basics',
						time: '1 Hour 15 Minutes',
						isHighlighted: false
					}
				]
			},
			{
				id: 3,
				title: 'Introduction to Responsive Design',
				lessons: [
					{
						id: 1,
						title: 'Media Queries and Breakpoints',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Fluid Layouts and Mobile First',
						time: '45 Minutes',
						isHighlighted: false
					}
				]
			},
			{
				id: 4,
				title: 'Design Principles for Web',
				lessons: [
					{
						id: 1,
						title: 'Visual Hierarchy and White Space',
						time: '45 Minutes',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Typography and Color Basics',
						time: '1 Hour',
						isHighlighted: false
					}
				]
			},
			{
				id: 5,
				title: 'Building a Basic Website',
				lessons: [
					{
						id: 1,
						title: 'Project Setup and Planning',
						time: '30 Minutes',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Coding the Website Step by Step',
						time: '2 Hours',
						isHighlighted: true
					},
					{
						id: 3,
						title: 'Final Review and Deployment',
						time: '45 Minutes',
						isHighlighted: false
					}
				]
			}
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
			{
				id: 1,
				title: 'Introduction to UI/UX Design',
				lessons: [
					{
						id: 1,
						title: 'Understanding UI vs UX',
						time: '45 Minutes',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Importance of User-Centered Design',
						time: '1 Hour',
						isHighlighted: true
					},
					{
						id: 3,
						title: 'Design Thinking Process Overview',
						time: '45 Minutes',
						isHighlighted: false
					}
				]
			},
			{
				id: 2,
				title: 'User Research and Personas',
				lessons: [
					{
						id: 1,
						title: 'Conducting Interviews and Surveys',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Analyzing User Needs and Behaviors',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 3,
						title: 'Creating Personas and Scenarios',
						time: '45 Minutes',
						isHighlighted: false
					}
				]
			},
			{
				id: 3,
				title: 'Wireframing and Prototyping',
				lessons: [
					{
						id: 1,
						title: 'Low-Fidelity Wireframes',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Interactive Prototypes',
						time: '1 Hour 15 Minutes',
						isHighlighted: true
					}
				]
			},
			{
				id: 4,
				title: 'Visual Design and Branding',
				lessons: [
					{
						id: 1,
						title: 'Typography and Color Theory',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Design Systems and Consistency',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 3,
						title: 'Brand Identity in UI',
						time: '45 Minutes',
						isHighlighted: false
					}
				]
			},
			{
				id: 5,
				title: 'Usability Testing and Iteration',
				lessons: [
					{
						id: 1,
						title: 'Conducting Usability Tests',
						time: '1 Hour',
						isHighlighted: true
					},
					{
						id: 2,
						title: 'Analyzing Feedback',
						time: '45 Minutes',
						isHighlighted: false
					},
					{
						id: 3,
						title: 'Improving and Iterating Designs',
						time: '1 Hour',
						isHighlighted: false
					}
				]
			}
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
			{
				id: 1,
				title: 'Introduction to Mobile App Development',
				lessons: [
					{
						id: 1,
						title: 'Mobile Platforms Overview (iOS & Android)',
						time: '45 Minutes',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'App Lifecycle and Architecture',
						time: '1 Hour',
						isHighlighted: false
					}
				]
			},
			{
				id: 2,
				title: 'Fundamentals of Swift Programming (iOS)',
				lessons: [
					{
						id: 1,
						title: 'Swift Syntax and Variables',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Control Flow and Functions',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 3,
						title: 'SwiftUI Basics',
						time: '1 Hour 15 Minutes',
						isHighlighted: true
					}
				]
			},
			{
				id: 3,
				title: 'Fundamentals of Kotlin Programming (Android)',
				lessons: [
					{
						id: 1,
						title: 'Kotlin Syntax and Data Types',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Android Studio Setup',
						time: '45 Minutes',
						isHighlighted: false
					},
					{
						id: 3,
						title: 'Layouts and Views',
						time: '1 Hour',
						isHighlighted: true
					}
				]
			},
			{
				id: 4,
				title: 'Building User Interfaces',
				lessons: [
					{
						id: 1,
						title: 'Navigation and Components',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Forms and Input Handling',
						time: '1 Hour',
						isHighlighted: false
					}
				]
			},
			{
				id: 5,
				title: 'App Deployment and Testing',
				lessons: [
					{
						id: 1,
						title: 'Testing Basics for iOS and Android',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Publishing to App Store & Play Store',
						time: '1 Hour 15 Minutes',
						isHighlighted: true
					}
				]
			}
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
			{
				id: 1,
				title: 'Introduction to Graphic Design',
				lessons: [
					{
						id: 1,
						title: 'History and Basics of Graphic Design',
						time: '45 Minutes',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Tools and Software Overview',
						time: '1 Hour',
						isHighlighted: true
					}
				]
			},
			{
				id: 2,
				title: 'Typography and Color Theory',
				lessons: [
					{
						id: 1,
						title: 'Understanding Typography',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Color Psychology and Palettes',
						time: '1 Hour',
						isHighlighted: false
					}
				]
			},
			{
				id: 3,
				title: 'Layout Design and Composition',
				lessons: [
					{
						id: 1,
						title: 'Balance, Contrast, and Alignment',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Grid Systems and Guides',
						time: '45 Minutes',
						isHighlighted: true
					}
				]
			},
			{
				id: 4,
				title: 'Image Editing and Manipulation',
				lessons: [
					{
						id: 1,
						title: 'Photo Editing with Photoshop',
						time: '1 Hour 15 Minutes',
						isHighlighted: true
					},
					{
						id: 2,
						title: 'Retouching and Filters',
						time: '1 Hour',
						isHighlighted: false
					}
				]
			},
			{
				id: 5,
				title: 'Designing for Print and Digital Media',
				lessons: [
					{
						id: 1,
						title: 'Print Basics and CMYK',
						time: '45 Minutes',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Digital Media Formats',
						time: '45 Minutes',
						isHighlighted: false
					},
					{
						id: 3,
						title: 'Final Project: Poster or Flyer',
						time: '2 Hours',
						isHighlighted: true
					}
				]
			}
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
			{
				id: 1,
				title: 'HTML Fundamentals',
				lessons: [
					{
						id: 1,
						title: 'HTML5 Elements and Structure',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Forms and Inputs',
						time: '45 Minutes',
						isHighlighted: false
					}
				]
			},
			{
				id: 2,
				title: 'CSS Styling and Layouts',
				lessons: [
					{
						id: 1,
						title: 'Selectors and Specificity',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Flexbox and Grid',
						time: '1 Hour 15 Minutes',
						isHighlighted: true
					}
				]
			},
			{
				id: 3,
				title: 'JavaScript Basics',
				lessons: [
					{
						id: 1,
						title: 'Variables and Data Types',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'DOM Manipulation',
						time: '1 Hour 15 Minutes',
						isHighlighted: true
					}
				]
			},
			{
				id: 4,
				title: 'Building Responsive Websites',
				lessons: [
					{
						id: 1,
						title: 'Responsive Patterns and Media Queries',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Testing Across Devices',
						time: '45 Minutes',
						isHighlighted: false
					}
				]
			},
			{
				id: 5,
				title: 'Introduction to Bootstrap and React',
				lessons: [
					{
						id: 1,
						title: 'Using Bootstrap Components',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'React Basics: Components & Props',
						time: '1 Hour 30 Minutes',
						isHighlighted: true
					}
				]
			}
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
			{
				id: 1,
				title: 'Closures and Scope',
				lessons: [
					{
						id: 1,
						title: 'Function Scope and Hoisting',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Closures in Practice',
						time: '1 Hour 15 Minutes',
						isHighlighted: true
					}
				]
			},
			{
				id: 2,
				title: 'Prototypes and Inheritance',
				lessons: [
					{
						id: 1,
						title: 'Prototype Chain Deep Dive',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Class Syntax vs Prototypal Inheritance',
						time: '1 Hour 15 Minutes',
						isHighlighted: true
					}
				]
			},
			{
				id: 3,
				title: 'Asynchronous JavaScript',
				lessons: [
					{
						id: 1,
						title: 'Event Loop and Callbacks',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Promises and async/await',
						time: '1 Hour 15 Minutes',
						isHighlighted: true
					}
				]
			},
			{
				id: 4,
				title: 'ES6+ Features',
				lessons: [
					{
						id: 1,
						title: 'Destructuring, Spread, and Rest',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Modules and Import/Export',
						time: '45 Minutes',
						isHighlighted: false
					}
				]
			},
			{
				id: 5,
				title: 'Advanced Application Patterns',
				lessons: [
					{
						id: 1,
						title: 'Functional Programming Concepts',
						time: '1 Hour',
						isHighlighted: false
					},
					{
						id: 2,
						title: 'Design Patterns in JavaScript',
						time: '1 Hour 30 Minutes',
						isHighlighted: true
					},
					{
						id: 3,
						title: 'Capstone Project: Build a Complex App',
						time: '3 Hours',
						isHighlighted: true
					}
				]
			}
		]
	}
]
