export const ROUTES = {
	// Shared
	HOME: '/' as const,
	COURSES: '/courses' as const,
	COURSE: (slug: string) => `/courses/${slug}` as const,
	ABOUT_US: '/about-us' as const,
	PRICING: '/pricing' as const,
	CONTACT: '/contact' as const,

	// Auth
	LOGIN: '/login' as const,
	SIGN_UP: '/sign-up' as const,

	// Errors
	NOT_FOUND: '/not-found' as const,
	SERVER_ERROR: '/server-error' as const
}
