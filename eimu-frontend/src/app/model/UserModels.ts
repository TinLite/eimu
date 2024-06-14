export type UserLoginDetail = {
    id: string,
    hashedPassword: string,
}

export enum UserFlag {
    BANNED_LOGIN = "BANNED_LOGIN",
    BANNED_COMMENT = "BANNED_COMMENT"
}
export enum loginError{
    NOTFOUND ="NOTFOUND"
}

export type UserDetail = {
    id: string,
    name: string,
    email?: string,
    phone?: string,
    flags: UserFlag[],
    role: string
}

export type FUser = {
    name: string,
    hashedPassword: string,
    email?: string,
    phone?: string,
    role: string
}