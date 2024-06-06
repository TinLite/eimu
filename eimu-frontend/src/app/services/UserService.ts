'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
// import { signIn } from '@/../auth';
import bcrypt from 'bcrypt';
import { signIn } from 'next-auth/react';
import { createAccount } from '../repositories/UserRepository';

const UserData = z.object({
    username: z.string().min(4),
    password: z.string().min(8),
})

const UserRegisterData = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    phone: z.string().regex(new RegExp(/^((\+?84|0)[3|5|7|8|9])([0-9]{8})$/))
})

export async function handleLogin(_state: String | undefined, formData: FormData) {
    "use server";
    try {
        await signIn('credentials', {
            username: formData.get("username"),
            password: formData.get("password"),
        });
    } catch (error) {
        console.error(error)
        return 'Sai tài khoản hoặc mật khẩu';
    }
    redirect("/");
}

type RegisterFormData = {
    name: string,
    email: string,
    password: string,
    phone: string
}

// TODO: Change this to something less smell
export async function handleRegister(_state: any | undefined, formData: FormData) {
    // FormData isn't a standard type, so we have to map it to something else.
    const parsedData = UserRegisterData.safeParse(Object.fromEntries(formData))
    if (!parsedData.success) {
        console.log(parsedData.error.flatten().fieldErrors)
        return "Nội dung nhập vào không hợp lệ.";
    }
    var data = parsedData.data
    await createAccount({
        name: data.name,
        hashedPassword: await bcrypt.hash(data.password, 10),
        email: data.email,
        phone: data.phone,
        role: "default"
    })
    redirect("/login")
}