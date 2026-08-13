'use client'

import { RefObject, useRef, useState } from 'react'

import { useClickOutside } from '@/hooks/useClickOutside'

import { navItemsData } from '@/data/nav-items.data'

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
		<>
			{/* Non-sticky header content */}
			<div className='w-full pt-10 px-4 sm:pt-5 lg:px-5 2xl:px-[163px]'>
				<div className='max-w-[112rem] mx-auto'>
					<HeaderBanner />
				</div>
			</div>

			{/* Sticky navigation */}
			<header className='sticky top-0 z-50 backdrop-blur-md bg-white/80 w-full px-4 lg:px-5 2xl:px-[163px] shadow-md'>
				<div className='max-w-[112rem] mx-auto'>
					{/* Desktop Navigation */}
					<div className='hidden md:flex justify-between items-center py-3.5 lg:px-12.5 lg:pt-4 lg:pb-5 2xl:py-6'>
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
						</div>
					</div>

					{/* Mobile Navigation */}
					<div className='flex md:hidden justify-between items-center py-3.5'>
						<Logo closeMenu={closeMenu} />
						<MobileMenuButton
							ref={mobileMenuButtonRef}
							isMenuOpen={isMobileMenuOpen}
							toggleMenu={toggleMenu}
						/>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className='md:hidden w-full bg-white shadow-md border-t border-grey-70 py-2'>
						<div className='max-w-[112rem] mx-auto px-4'>
							<NavList
								list={navItemsData}
								closeMenu={closeMenu}
								className='flex-col xs:flex-row'
							/>
						</div>
					</div>
				)}
			</header>
		</>
	)
}
