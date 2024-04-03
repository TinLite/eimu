
import MenuAccY from '@/app/components/MenuAccY'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import FavoriteTableList from '@/app/components/FavoriteTableList'

export default async function Favorite() {
  const new_movie_list = await (await fetch("http://51.79.144.118:12594/movie")).json()
  return (
    <div className='flex text-white'>
      <MenuAccY />
      <FavoriteTableList />
    </div>
  )
}
