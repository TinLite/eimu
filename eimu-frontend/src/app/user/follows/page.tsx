
import MenuAccY from '@/app/components/Sidebar'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import FavoriteTableList from '@/app/components/FollowTableList'
import FollowTableList from '@/app/components/FollowTableList'

export default async function Follow() {
  const new_movie_list = await (await fetch("http://51.79.144.118:12594/movie")).json()
  return (
    <div className='flex text-white'>
      <MenuAccY />
      <FollowTableList />
    </div>
  )
}
