import React from 'react'

export default function movie() {
    return (
        <div className='bg-[#1A1C22] mx-14 my-14 max-h'>
            <div className='flex'>
                <div className='mx-5'>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><span className='font-bold text-lg'>Phim nè</span></li>
                            <li><span className='font-bold text-lg'>Tập fullHD</span></li>
                        </ul>
                    </div>
                    <div className='bg-black h-[530px] w-[1000px]'>Video</div>
                </div>
                <div className='mx-5 my-5'>Tập phim</div>
            </div>
        </div>
    )
}
