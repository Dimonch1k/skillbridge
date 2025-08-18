'use client'

import { Button } from '@/components/ui/buttons/Button'

import { AlignRight, X } from 'lucide-react'

export interface MobileMenuButtonProps {
	isMenuOpen: boolean
	toggleMenu: () => void
}

export function MobileMenuButton({
	isMenuOpen,
	toggleMenu
}: MobileMenuButtonProps) {
	return (
		<Button
			onClick={toggleMenu}
			className='md:hidden bg-background'
		>
			{isMenuOpen ? <X size={24} /> : <AlignRight size={24} />}
		</Button>
	)
}
