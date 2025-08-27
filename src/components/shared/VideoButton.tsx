'use client'

import { Button } from '@/components/ui/buttons/Button'

import { cn } from '@/utils/cn'
import { Pause, Play } from 'lucide-react'
import { useState } from 'react'

export interface VideoButtonProps {
	className?: string
}

export function VideoButton({ className }: VideoButtonProps) {
	const [isStarted, setIsStarted] = useState(false)

	const toggleVideo = () => setIsStarted(!isStarted)

	return (
		<Button
			className={cn(
				'bg-white/20 text-white',
				'p-2.5 2xl:p-3.5',
				'border-6 border-white/30 rounded-full',
				className
			)}
			onClick={toggleVideo}
		>
			{isStarted ? (
				<Pause className='size-8.5 2xl:size-11' />
			) : (
				<Play className='size-8.5 2xl:size-11' />
			)}
		</Button>
	)
}
