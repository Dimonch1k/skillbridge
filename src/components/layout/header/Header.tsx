'use client'

import { navItemsData } from '@/data/nav-items.data'
import { useClickOutside } from '@/hooks/useClickOutside'
import { cn } from '@/utils/cn'

import { RefObject, useRef, useState } from 'react'

import { AuthLinks } from './AuthLinks'
import { HeaderBanner } from './HeaderBanner'
import { Logo } from './Logo'
import { MobileMenuButton } from './MobileMenuButton'
import { NavList } from './nav/NavList'

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const mobileMenuRef = useRef<HTMLDivElement>(null)
	const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)

	useClickOutside(
		[
			mobileMenuRef as RefObject<HTMLElement>,
			mobileMenuButtonRef as RefObject<HTMLElement>
		],
		() => setIsMobileMenuOpen(false)
	)

	const closeMenu = () => setIsMobileMenuOpen(false)
	const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

	return (
		<header className='w-full pt-10 px-4 sm:pt-5 lg:px-5 2xl:px-7.5'>
			<HeaderBanner />

			{/* Desktop Navigation */}
			<div className='flex justify-between items-center py-3.5 lg:px-12.5 lg:pt-4 lg:pb-5 2xl:px-33 2xl:py-6'>
				<div className='flex items-center gap-5 lg:gap-12.5'>
					<Logo closeMenu={closeMenu} />
					<NavList
						list={navItemsData}
						closeMenu={closeMenu}
						className='hidden md:flex'
					/>
				</div>
				<div className='flex items-center gap-5'>
					<AuthLinks />
					<MobileMenuButton
						ref={mobileMenuButtonRef}
						isMenuOpen={isMobileMenuOpen}
						toggleMenu={toggleMenu}
					/>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMobileMenuOpen && (
				<div className='relative md:hidden'>
					<div
						ref={mobileMenuRef}
						className={cn(
							'md:hidden absolute top-0 left-0 z-50 w-full',
							'bg-white flex flex-col shadow-md border-t border-grey-70 py-2'
						)}
					>
						<NavList
							list={navItemsData}
							closeMenu={closeMenu}
							className='flex-col xs:flex-row'
						/>
					</div>
				</div>
			)}
		</header>
	)
}
