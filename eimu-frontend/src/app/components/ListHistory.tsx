import React from 'react';
import { MovieListEntry } from '@/app/model/MovieModels';
import '@/app/globals.css'

export default function Genre({
    data,
}: {
    data: [MovieListEntry]
}) {
    return (
        <div className=' max-w-screen-xl mx-auto'>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                {data.map((entry) => (
                    <div className='max-w-44' key={entry.id}>
                        <a href="#" key={entry.id} className='max-w-44'>
                            <div
                                className="aspect-[2/3] place-items-center w-full grid"
                                style={{ "background": `center / cover no-repeat url('${entry.thumbUrl}')` }}>{ }
                            </div>
                            <h3>{entry.name}</h3>
                        </a>
                    </div>
                ))}
                <div className='max-w-44 col-end-auto'>
                    <a href="#" className='max-w-44'>
                        <div
                            className="aspect-[2/3] place-items-center grid border border-blue-800 bg-blue-950 bg-opacity-50 text-blue-50 rounded-lg">
                            <div className='text-right'>
                                <div>
                                    Xem trang sau
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};


