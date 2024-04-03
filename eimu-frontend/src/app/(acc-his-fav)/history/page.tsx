import ListHistory from '@/app/components/ListHistory'
import MenuAccY from '@/app/components/MenuAccY'
import { Button } from '@nextui-org/react'
import React from 'react'

export default async function History() {
    const new_movie_list = await (await fetch("http://51.79.144.118:12594/movie")).json()
    return (
        <div className='flex text-white'>
            <MenuAccY />
            <div className='w-full px-32'>
                <div className='grid justify-center py-10 border-b-2 border-white font-bold text-3xl mb-4'>Lịch sử xem</div>
                <Button className='mb-3'>Chỉnh sửa</Button>
                <ListHistory data={new_movie_list["items"]} />
            </div>
        </div>
    )
}
