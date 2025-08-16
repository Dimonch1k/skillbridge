'use client'

import { Menu, X } from 'lucide-react'

export interface MobileMenuButtonProps {
	isMenuOpen: boolean
	toggleMenu: () => void
}

export function MobileMenuButton({
	isMenuOpen,
	toggleMenu,
}: MobileMenuButtonProps) {
	return (
		<button
			onClick={toggleMenu}
			className='lg-xl:hidden bg-background hover:bg-surface rounded-full p-2 transition-colors duration-300 ease-linear text-text hover:text-primary cursor-pointer'
		>
			{isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
		</button>
	)
}
