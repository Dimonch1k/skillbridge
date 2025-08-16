export const ROUTES = {
	// Shared
	HOME: '/' as const,
	A: '/a' as const,
	B: (slug: string) => `/b/${slug}` as const,
	C: '/c' as const,
	D: '/d' as const,
	E: '/e' as const,
	F: '/f' as const,

	// Errors
	NOT_FOUND: '/not-found' as const,
	SERVER_ERROR: '/server-error' as const,
}
