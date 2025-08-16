'use client'

import { navItemsData } from '@/data/nav-items.data'
import { useClickOutside } from '@/hooks/useClickOutside'

import { RefObject, useRef, useState } from 'react'

import { cn } from '@/utils/cn'
import { Logo } from './Logo'
import { MobileMenuButton } from './MobileMenuButton'
import { NavList } from './nav/NavList'

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const mobileMenuRef = useRef<HTMLDivElement>(null)

	useClickOutside([mobileMenuRef as RefObject<HTMLElement>], () =>
		setIsMobileMenuOpen(false)
	)

	const closeMenu = () => setIsMobileMenuOpen(false)
	const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

	return (
		<header className='w-full'>
			<div className='flex justify-between items-center px-4 sm:px-6 lg-xl:px-8 py-4'>
				<Logo closeMenu={closeMenu} />
				<NavList list={navItemsData} closeMenu={closeMenu} />
				<MobileMenuButton
					isMenuOpen={isMobileMenuOpen}
					toggleMenu={toggleMenu}
				/>
			</div>

			{/* Mobile Navigation */}
			{isMobileMenuOpen && (
				<div className='relative lg-xl:hidden'>
					<div
						ref={mobileMenuRef}
						className={cn(
							'lg-xl:hidden absolute top-0 left-0 z-50 w-full',
							'bg-background flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.08)] border-t border-gray-300'
						)}
					>
						<NavList list={navItemsData} closeMenu={closeMenu} />
					</div>
				</div>
			)}
		</header>
	)
}
