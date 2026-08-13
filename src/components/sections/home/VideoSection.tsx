'use client'

import Image from 'next/image'

import { Section } from '@/components/ui/Section'

export function VideoSection() {
	return (
		<Section id='video'>
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
