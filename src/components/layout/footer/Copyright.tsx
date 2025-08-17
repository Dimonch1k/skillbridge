'use client'

export function Copyright() {
	return (
		<p className='w-full text-center text-grey-40 text-sm xs:text-base leading-[150%]'>
			&copy; {new Date().getFullYear()} SkillBridge. All rights reserved.
		</p>
	)
}
