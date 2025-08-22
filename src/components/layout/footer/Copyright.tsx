'use client'

export function Copyright() {
	return (
		<p className='w-full text-center text-grey-40 text-sm lg:text-base 2xl:text-lg leading-[150%]'>
			&copy; {new Date().getFullYear()} SkillBridge. All rights reserved.
		</p>
	)
}
