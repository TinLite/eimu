// Import các modules cần thiết
import React, { useState } from 'react';
import './styles.css'; // File css với Tailwind CSS
import { Movie , MovieListEntry} from '@/app/model/MovieModels';;

// Định nghĩa một component MovieHistory
const MovieHistory: React.FC = () => {
  // Dữ liệu giả định cho lịch sử phim đã xem
  const [movies, setMovies] = useState<MovieListEntry[]>([
   
  ]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Phim theo dõi</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Tên phim</th>
            <th className="px-4 py-2">Năm sản xuất</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id}>
              <td className="border px-4 py-2">{movie.id}</td>
              <td className="border px-4 py-2">{movie.name}</td>
              <td className="border px-4 py-2">{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieHistory;
