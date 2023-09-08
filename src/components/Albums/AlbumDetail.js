import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAlbum } from './AlbumApi';

function AlbumDetail() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAlbum();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-white font-semibold tracking-tight hover:underline">
        All Albums
      </h1>

      <ul className="grid grid-cols-5 gap-4 gap-x-4">
        {albums.map((album) => (
        <Link key={album.id} to={`/album-songs/${album.id}`} className="group">

            <div className="bg-footer p-4 rounded hover:bg-active">
              <div className="pt-[100%] relative mb-4">
                <img
                  src={album.image}
                  className="absolute inset-0 object-cover w-full h-full rounded"
                  alt={album.title}
                />
              </div>
              <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                {album.title}
              </h6>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default AlbumDetail;


