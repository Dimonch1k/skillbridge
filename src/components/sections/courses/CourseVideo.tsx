'use client'

import { VideoButton } from '@/components/shared/VideoButton'

import { cn } from '@/utils/cn'

import Image from 'next/image'

export interface CourseVideoProps {
	videoSrc: string
	className?: string
}

export function CourseVideo({ videoSrc, className }: CourseVideoProps) {
	return (
		<div
			className={cn('relative w-full', 'h-[250px] lg:h-[650px] 2xl:h-[800px]')}
		>
			<Image
				src={videoSrc}
				alt='Course Video Preview'
				width={684}
				height={380}
				className={cn(
					'w-full h-full object-cover',
					'rounded-[10px] 2xl:rounded-xl',
					className
				)}
			/>

			<VideoButton className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
		</div>
	)
}
