'use client'

import { PageContainer } from '@/components/shared/PageContainer'
import { PageHeader } from '@/components/shared/PageHeader'

import { ContactForm } from '@/components/sections/contact/ContactForm'
import { ContactInfoList } from '@/components/sections/contact/ContactInfoList'

export function Contact() {
	return (
		<PageContainer>
			<PageHeader
				title='Contact Us'
				description="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
			/>

			<div className='flex flex-col lg:flex-row rounded-xl overflow-hidden'>
				<ContactForm />
				<ContactInfoList />
			</div>
		</PageContainer>
	)
}
