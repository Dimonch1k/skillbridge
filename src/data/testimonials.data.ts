import type { ITestimonial } from '@/types/sections/testimonial.interface'

export const testimonialListData: ITestimonial[] = [
	{
		id: 1,
		text: 'The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!',
		profile: {
			src: '/home/testimonials/sarah-l.jpg',
			fullName: 'Sarah L'
		}
	},
	{
		id: 2,
		text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
		profile: {
			src: '/home/testimonials/jason-m.jpg',
			fullName: 'Jason M'
		}
	},
	{
		id: 3,
		text: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
		profile: {
			src: '/home/testimonials/emily-r.jpg',
			fullName: 'Emily R'
		}
	},
	{
		id: 4,
		text: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
		profile: {
			src: '/home/testimonials/michael-k.jpg',
			fullName: 'Michael K'
		}
	}
]
