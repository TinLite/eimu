import React from 'react';
import { MovieListEntry } from '@/app/model/MovieModels';
import { MovieTag } from '@/app/model/MovieTagModels';


export default function Genre({genre,data}: {genre : string ,data: [MovieListEntry]}) {
    return (
        <div className="bg-gray-900 text-white min-h-screen ">
            <div className="container mx-auto p-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold ">Trang chủ / {genre}</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 ">
                    {data.map((entry) => (
                        <div
                            key={entry.id}
                            className="p-4 rounded-lg relative"
                        >
                            <a href="#">
                                <div
                                    className="aspect-[2/3] place-items-center w-50"
                                    style={{ "background": `center / cover no-repeat url('${entry.thumbUrl}')` }}>{ }
                                </div>
                                <h3 className="text-lg font-semibold">{entry.name}</h3>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


