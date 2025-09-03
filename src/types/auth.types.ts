export type TypeLoginFormState = {
	email: string
	password: string
	isRememberMe?: boolean
}

export type TypeSignUpFormState = {
	fullName: string
	email: string
	password: string
	isAgreeTerms?: boolean
}

export type TypeAuth = 'login' | 'register'
