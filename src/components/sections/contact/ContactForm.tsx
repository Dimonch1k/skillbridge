'use client'

import { Button } from '@/components/ui/buttons/Button'
import {
	ContactEmailField,
	MessageField,
	PhoneField,
	SubjectField
} from '@/components/ui/form/fields'
import { Loader } from '@/components/ui/Loader'

import { useContactForm } from '@/hooks/useContactForm'

import { cn } from '@/utils/cn'

export function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		isSubmitting,
		onSubmit
	} = useContactForm({
		success_message:
			'Your message was sent! Our team will get back to you shortly.',
		loading_message: '📩 Sending your message...',
		error_message: 'Failed to send message. Please try again.'
	})

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn(
				'w-full bg-white',
				'p-7.5 lg:p-15 2xl:p-20',
				'space-y-7.5 lg:space-y-10 2xl:space-y-12.5'
			)}
		>
			<div className='space-y-5 lg:space-y-6 2xl:space-y-7.5'>
				<div className='w-full space-y-5 lg:space-y-0 lg:flex lg:gap-6 2xl:gap-7.5'>
					<first_nameField
						register={register}
						errors={errors}
					/>
					<last_nameField
						register={register}
						errors={errors}
					/>
				</div>

				<div className='w-full space-y-5 lg:space-y-0 lg:flex lg:gap-6 2xl:gap-7.5'>
					<ContactEmailField
						register={register}
						errors={errors}
					/>
					<PhoneField
						register={register}
						errors={errors}
					/>
				</div>

				<SubjectField
					register={register}
					errors={errors}
				/>
			</div>

			<MessageField
				register={register}
				errors={errors}
			/>

			<div className='w-full flex justify-center'>
				<Button
					type='submit'
					className={cn(
						'font-medium, 2xl:rounded-[10px]',
						'w-full lg:w-fit',
						'px-5 py-3.5 2xl:px-6 2xl:py-4.5'
					)}
					startIcon={isSubmitting && <Loader className='size-4.5' />}
					disabled={isSubmitting}
					variant='primary'
				>
					{isSubmitting ? 'Sending...' : 'Send Your Message'}
				</Button>
			</div>
		</form>
	)
}
