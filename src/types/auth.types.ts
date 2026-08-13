export type TypeLoginFormState = {
	email: string
	password: string
	is_remember_me?: boolean
}

export type TypeSignUpFormState = {
	full_name: string
	email: string
	password: string
	is_agree_terms?: boolean
}

export type TypeAuth = 'login' | 'register'
