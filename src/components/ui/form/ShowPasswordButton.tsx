'use client'

import { EyeClosedIcon, EyeIcon } from 'lucide-react'

interface IShowPasswordButtonProps {
	showPassword: boolean
	setShowPassword: () => void
}

export function ShowPasswordButton({
	showPassword,
	setShowPassword
}: IShowPasswordButtonProps) {
	return (
		<button
			type='button'
			onClick={setShowPassword}
			className='absolute -translate-y-1/2 cursor-pointer right-4 top-1/2'
		>
			{showPassword ? <EyeIcon size={18} /> : <EyeClosedIcon size={18} />}
		</button>
	)
}
