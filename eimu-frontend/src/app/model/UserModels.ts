export type UserLoginDetail = {
    id: string,
    hashedPassword: string,
}

export type UserDetail = {
    name: string,
    email?: string,
    phone?: string,
    role: string
}

export type FUser = {
    name: string,
    hashedPassword: string,
    email?: string,
    phone?: string,
    role: string
}