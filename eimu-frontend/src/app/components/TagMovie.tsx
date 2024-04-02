import Link from 'next/link'
import React from 'react'

export default function TagMovie() {
    return (
        <div className='flex my-2'>
            <Link href={""} className='bg-gray-800 mr-3 p-2 rounded-md'>Hành động</Link>
            <Link href={""} className='bg-gray-800 mr-3 p-2 rounded-md'>Viễn Tưởng</Link>
        </div>
    )
}
