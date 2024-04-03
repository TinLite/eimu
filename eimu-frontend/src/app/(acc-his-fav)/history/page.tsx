
import MenuAccY from '@/app/components/MenuAccY'
import { Button } from '@nextui-org/react'
import React from 'react'
import HistoryTableList from '@/app/components/HistoryTableList'

export default async function History() {
    const new_movie_list = await (await fetch("http://51.79.144.118:12594/movie")).json()
    return (
        <div className='flex text-white'>
            <MenuAccY />
            <HistoryTableList />
        </div>
    )
}
