// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchSongsByAlbumId } from './AlbumApi';
// import Icon from '../../Icons';

// function AlbumSongs() {
//   const { albumId } = useParams();
//   const [albumSongs, setAlbumSongs] = useState([]);
//   const [current, setCurrent] = useState({ id: null }); // Initialize current with an object that has an id property
//   const [playing, setPlaying] = useState(false);

//   useEffect(() => {
//     let isMounted = true;

//     async function fetchData() {
//       try {
//         const data = await fetchSongsByAlbumId(albumId);
//         if (isMounted) {
//           setAlbumSongs(data);
//         }
//       } catch (error) {
//         console.error('Error fetching songs:', error);
//       }
//     }

//     fetchData();

//     return () => {
//       isMounted = false;
//     };
//   }, [albumId]);

//   const imageStyle = (item) => {
//     switch (item.type) {
//       case 'artist':
//         return 'rounded-full';

//       case 'podcast':
//         return 'rounded-xl';

//       default:
//         return 'rounded';
//     }
//   };

//   const updateCurrent = (item) => {
//     if (current.id === item.id) {
//       if (playing) {
//         controls.pause();
//       } else {
//         controls.play();
//       }
//     } else {
//       dispatch(setCurrent(item));
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-2xl text-white font-semibold tracking-tight hover:underline">
//         Album Songs
//       </h1>

//       <ul className="grid grid-cols-5 gap-4 gap-x-4">
//         {albumSongs.map((item) => (
//           <div
//             key={item.id}
//             className="bg-footer p-4 rounded hover:bg-active group"
//           >
//             <div className="pt-[100%] relative mb-4">
//               <img
//                 src={item.image}
//                 className={`absolute inset-0 object-cover w-full h-full ${imageStyle(
//                   item
//                 )}`}
//               />
//               <button
//                 onClick={() => updateCurrent(item)}
//                 className={`w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center
//                  ${
//                   current && current.id === item.id && playing
//                     ? 'flex'
//                     : 'hidden'
//                 }`
//               }
//               >
//                 <Icon
//                   name={
//                     current && current.id === item.id && playing
//                       ? 'pause'
//                       : 'play'
//                   }
//                   size={16}
//                 />
//               </button>
//             </div>
//             <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
//               {item.title}
//             </h6>
//             <p className="line-clamp-2 text-link text-sm mt-1">{item.name}</p>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AlbumSongs;





import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSongsByAlbumId } from './AlbumApi';
// import Icon from '../../Icons';

function AlbumSongs() {
  const { albumId } = useParams();
  const [albumSongs, setAlbumSongs] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const data = await fetchSongsByAlbumId(albumId);
        if (isMounted) {
          setAlbumSongs(data);
        }
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [albumId]);

  const imageStyle = (item) => {
    switch (item.type) {
      case 'artist':
        return 'rounded-full';

      case 'podcast':
        return 'rounded-xl';

      default:
        return 'rounded';
    }
  };

 

  return (
    <div>
      <h1 className="text-2xl text-white font-semibold tracking-tight hover:underline">
        Album Songs
      </h1>

      <ul className="grid grid-cols-5 gap-4 gap-x-4">
        {albumSongs.map((item) => (
          <div
            key={item.id}
            className="bg-footer p-4 rounded hover:bg-active group"
          >
            <div className="pt-[100%] relative mb-4">
              <img
                src={item.image}
                className={`absolute inset-0 object-cover w-full h-full ${imageStyle(
                  item
                )}`}
                alt={item.title}
              />
              <button
                onClick={() => updateCurrent(item)}
                className={`w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center
                 ${
                  current && current.id === item.id && playing
                    ? 'flex'
                    : 'hidden'
                }`}
              >
                {/* <Icon
                  name={
                    current && current.id === item.id && playing
                      ? 'pause'
                      : 'play'
                  }
                  size={16}
                /> */}
              </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
              {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-sm mt-1">{item.name}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AlbumSongs;
