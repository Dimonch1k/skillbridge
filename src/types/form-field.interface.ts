import type { TypeSendMessage } from '@/types/send-message.types'

import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface FormFieldProps {
	register: UseFormRegister<TypeSendMessage>
	errors: FieldErrors<TypeSendMessage>
}
