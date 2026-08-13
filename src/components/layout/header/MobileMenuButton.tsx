'use client'

import { forwardRef } from 'react'
import { AlignRight, X } from 'lucide-react'

import { Button } from '@/components/ui/buttons/Button'

export interface MobileMenuButtonProps {
	isMenuOpen: boolean
	toggleMenu: () => void
}

export const MobileMenuButton = forwardRef<
	HTMLButtonElement,
	MobileMenuButtonProps
>(({ isMenuOpen, toggleMenu }, ref) => {
	return (
		<Button
			ref={ref}
			onClick={toggleMenu}
			className='md:hidden bg-background'
		>
			{isMenuOpen ? <X size={24} /> : <AlignRight size={24} />}
		</Button>
	)
})

MobileMenuButton.displayName = 'MobileMenuButton'
