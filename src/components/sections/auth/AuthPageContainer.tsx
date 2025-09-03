'use client'

import { TestimonialsSection } from '@/components/shared/testimonials/TestimonialsSection'

import { cn } from '@/utils/cn'

export interface AuthPageContainerProps {
	children: React.ReactNode
	className?: string
}

export function AuthPageContainer({
	children,
	className
}: AuthPageContainerProps) {
	return (
		<div
			className={cn(
				'flex flex-col-reverse items-center',
				'lg:grid lg:place-content-center lg:grid-cols-[3fr_2fr]',
				'gap-12.5 lg:gap-20 2xl:gap-25'
			)}
		>
			<TestimonialsSection hasHeaderChildren={false} />
			{children}
		</div>
	)
}
