'use client'

import { Section } from '@/components/ui/Section'
import Image from 'next/image'

export function VideoSection() {
	return (
		<Section
			id='video'
			className=''
		>
			<Image
				src='/video.jpg'
				alt='Video'
				width={1596}
				height={790}
				className='w-full h-full object-contain rounded-[10px]'
			/>
		</Section>
	)
}
