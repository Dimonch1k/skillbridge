'use client'

export function ErrorMessage({ error }: { error: string }) {
	return <p className='mt-1 ml-2 text-xs text-danger'>{error}</p>
}
