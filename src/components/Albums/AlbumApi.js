import axios from 'axios';

export async function fetchAlbum() {
  try {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://academics.newtonschool.co/api/v1/music/album',
      headers: {
        projectId: '5fwpxj9fh6yy',
      },
    };

    const response = await axios.request(config);

    const albumData = response.data.data;

    if (Array.isArray(albumData)) {
      const albums = albumData.map((album) => ({
        id: album._id,
        title: album.title,
        image: album.image,
      }));
      return albums;
    } else {
      console.error('Response data does not contain an array:', albumData);
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}


export async function fetchSongsByAlbumId(albumId) {
  try {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://academics.newtonschool.co/api/v1/music/album/${albumId}`,
      headers: {
        projectId: '5fwpxj9fh6yy',
      },
    };

    const response = await axios.request(config);

    const album = response.data.data;
    console.log(` All Album songs, ${JSON.stringify(album)}`);
    if (album && Array.isArray(album.songs)) {
      const songs = album.songs.map((song) => ({
        id: song._id,
        title: song.title,
        image: song.thumbnail,
        audioUrl: song.audio_url,
      }));
      return songs;
    } else {
      console.error('No songs found for the album:', albumId);
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}



// export async function fetchAlbum() {
//   try {
//     const url = 'https://academics.newtonschool.co/api/v1/music/album';
//     const headers = {
//       'projectId': '5fwpxj9fh6yy',
//     };

//     const response = await fetch(url, { method: 'GET', headers });

//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }

//     const albumData = await response.json();

//     if (Array.isArray(albumData)) {
//       const albums = albumData.map((album) => ({
//         id: album._id,
//         title: album.title,
//         image: album.image,
//       }));
//       return albums;
//     } else {
//       console.error('Response data does not contain an array:', albumData);
//       return [];
//     }
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// export async function fetchSongsByAlbumId(albumId) {
//   try {
//     const url = `https://academics.newtonschool.co/api/v1/music/album/${albumId}`;
//     const headers = {
//       'projectId': '5fwpxj9fh6yy',
//     };

//     const response = await fetch(url, { method: 'GET', headers });

//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }

//     const album = await response.json();

//     if (album && Array.isArray(album.songs)) {
//       const songs = album.songs.map((song) => ({
//         id: song._id,
//         title: song.title,
//         image: song.thumbnail,
//         audioUrl: song.audio_url,
//       }));
//       return songs;
//     } else {
//       console.error('No songs found for the album:', albumId);
//       return [];
//     }
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }
