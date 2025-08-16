'use client'

import { cn } from '@/utils/cn'

import { Loader as LoaderIcon } from 'lucide-react'

export interface LoaderProps {
	className?: string
}

export function Loader({ className }: LoaderProps) {
	return <LoaderIcon className={cn('animate-spin size-5', className)} />
}
