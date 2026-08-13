import { FieldErrors, UseFormRegister } from 'react-hook-form'

import type { TypeSendMessage } from '@/types/send-message.types'

export interface FormFieldProps {
	register: UseFormRegister<TypeSendMessage>
	errors: FieldErrors<TypeSendMessage>
}
