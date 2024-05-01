'use client'
import React from 'react'
import { UserDetail } from "@/app/model/UserModels";

export function InformationUser({
    user
}: {
    user: UserDetail
}) {
    return (
        <div>
            <div className='flex border-b-2 py-5'>
                <div className='mr-5 '>Họ tên:</div>
                <div className=''>{user.name}</div>
            </div>
            <div className='flex border-b-2 py-5'>
                <div className='mr-5 '>Ngày sinh:</div>
                <div className=''>Chưa cập nhật</div>
            </div>
            <div className='flex border-b-2 py-5'>
                <div className='mr-5 '>Giới tính:</div>
                <div className=''>Chưa cập nhật</div>
            </div>
            <div className='flex border-b-2 py-5'>
                <div className='mr-5 '>Email:</div>
                <div className=''>{user.email}</div>
            </div>
            <div className='flex py-5'>
                <div className='mr-5 '>Số điện thoại:</div>
                <div className=''>{user.phone}</div>
            </div>
        </div>
    )
}
