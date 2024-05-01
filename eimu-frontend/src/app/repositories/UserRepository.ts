'use server';

import { FUser, UserDetail, UserLoginDetail } from "@/app/model/UserModels";

export async function getUserLoginDetail(v: string): Promise<UserLoginDetail | undefined> {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/user/getLoginDetail?v=${v}`, {
        next: {
            revalidate: 1
        }
    })
    if (request.ok) {
        return await request.json() as UserLoginDetail;
    } else {
        return undefined;
    }
}

export async function getUserDetail(v: string): Promise<UserDetail | undefined> {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/user/detail/${v}`, {
        next: {
            revalidate: 60
        }
    })
    if (request.ok) {
        return await request.json() as UserDetail;
    } else {
        return undefined;
    }
}

export async function createAccount(userDetail: FUser) {
    var request = await fetch(
        `${process.env.BACKEND_ADDRESS}/user/create`,
        {
            method: 'POST',
            body: JSON.stringify(userDetail),
            headers: {
                "Content-Type": "application/json; charset=utf8"
            },
            cache: "no-cache"
        }
    )
    console.log(request)
}