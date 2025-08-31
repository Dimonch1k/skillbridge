import { ROUTES } from '@/constants/routes.constants'
import type { IFaq } from '@/types/sections/faq.interface'

export const faqListData: IFaq[] = [
	{
		id: 1,
		question: 'Can I enroll in multiple courses at once?',
		answer:
			'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.',
		link: {
			href: ROUTES.COURSES,
			label: 'Browse All Courses'
		}
	},
	{
		id: 2,
		question: 'What kind of support can I expect from instructors?',
		answer:
			'Our instructors provide guidance through course discussions, Q&A sessions, and feedback on assignments. You’ll always have the opportunity to reach out if you need clarification or help.',
		link: {
			href: ROUTES.ABOUT_US,
			label: 'Meet Our Instructors'
		}
	},
	{
		id: 3,
		question:
			'Are the courses self-paced or do they have specific start and end dates?',
		answer:
			'Most courses on SkillBridge are self-paced, meaning you can learn whenever it suits you best. However, some programs may include scheduled live sessions or deadlines.',
		link: {
			href: ROUTES.COURSES,
			label: 'Explore Available Courses'
		}
	},
	{
		id: 4,
		question: 'Are there any prerequisites for the courses?',
		answer:
			'Many of our beginner-level courses require no prior knowledge. Advanced courses may recommend some background skills, which are always listed in the course description.',
		link: {
			href: ROUTES.COURSES,
			label: 'Check Course Requirements'
		}
	},
	{
		id: 5,
		question: 'Can I download the course materials for offline access?',
		answer:
			'Yes! Most of our resources, such as lecture slides and reading materials, can be downloaded for offline study. However, interactive elements like quizzes and discussions require an internet connection.',
		link: {
			href: ROUTES.HOME,
			label: 'Learn More About Learning Tools'
		}
	}
]
