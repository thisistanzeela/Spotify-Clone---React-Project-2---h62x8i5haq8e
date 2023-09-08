import axios from 'axios';

async function fetchSongsByReleaseDate(dateOfRelease) {
  try {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://academics.newtonschool.co/api/v1/music/song?filter={"dateOfRelease": "${dateOfRelease}"}`,
      headers: {
        projectId: '5fwpxj9fh6yy',
      },
    };

    const response = await axios.request(config);

    const songData = response.data.data;

    if (Array.isArray(songData)) {
      return songData.map((item) => ({
        id: item._id,
        title: item.title,
        artist: item.artist[0].name,
        image: item.artist[0].image,
        src: item.audio_url,
      }));
    } else {
      console.error('Response data does not contain an array:', songData);
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchData() {
  const songsReleasedIn1980=  await fetchSongsByReleaseDate('1980-01-01T00:00:00.000Z')
  const songsReleasedIn1981 = await fetchSongsByReleaseDate('1981-01-01T00:00:00.000Z');
  const songsReleasedIn1971 = await fetchSongsByReleaseDate('1971-01-01T00:00:00.000Z');
  const songsReleasedIn1975 = await fetchSongsByReleaseDate('1975-01-01T00:00:00.000Z');
  const songsReleasedIn1976 = await fetchSongsByReleaseDate('1976-01-01T00:00:00.000Z');
 

  console.log('Songs Released in 1980:', songsReleasedIn1980);
  console.log('Songs Released in 1981:', songsReleasedIn1981);
  console.log('Songs Released in 1971:', songsReleasedIn1971);
  console.log('Songs Released in 1975:', songsReleasedIn1975);
  console.log('Songs Released in 1976:', songsReleasedIn1976);
 
}

// Call fetchData to start fetching the data
fetchData();

export { fetchSongsByReleaseDate as songsReleasedIn1980 };
export { fetchSongsByReleaseDate as songsReleasedIn1981 };
export { fetchSongsByReleaseDate as songsReleasedIn1971 };
export { fetchSongsByReleaseDate as songsReleasedIn1975 };
export { fetchSongsByReleaseDate as songsReleasedIn1976 };




// // Function to make a GET request using the fetch API
// async function fetchDataByReleaseDate(dateOfRelease) {
//   try {
//     const url = `https://academics.newtonschool.co/api/v1/music/song?filter={"dateOfRelease": "${dateOfRelease}"}`;
//     const headers = {
//       'projectId': '5fwpxj9fh6yy',
//     };

//     const response = await fetch(url, { method: 'GET', headers });

//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }

//     const songData = await response.json();

//     if (Array.isArray(songData)) {
//       return songData.map((item) => ({
//         id: item._id,
//         title: item.title,
//         artist: item.artist[0].name,
//         image: item.artist[0].image,
//         src: item.audio_url,
//       }));
//     } else {
//       console.error('Response data does not contain an array:', songData);
//       return [];
//     }
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// async function fetchData() {
//   const songsReleasedIn1980 = await fetchDataByReleaseDate('1980-01-01T00:00:00.000Z');
//   const songsReleasedIn1981 = await fetchDataByReleaseDate('1981-01-01T00:00:00.000Z');
//   const songsReleasedIn1971 = await fetchDataByReleaseDate('1971-01-01T00:00:00.000Z');
//   const songsReleasedIn1975 = await fetchDataByReleaseDate('1975-01-01T00:00:00.000Z');
//   const songsReleasedIn1976 = await fetchDataByReleaseDate('1976-01-01T00:00:00.000Z');

//   console.log('Songs Released in 1980:', songsReleasedIn1980);
//   console.log('Songs Released in 1981:', songsReleasedIn1981);
//   console.log('Songs Released in 1971:', songsReleasedIn1971);
//   console.log('Songs Released in 1975:', songsReleasedIn1975);
//   console.log('Songs Released in 1976:', songsReleasedIn1976);
// }

// // Call fetchData to start fetching the data
// fetchData();

// // Export the fetchDataByReleaseDate function
// export { fetchDataByReleaseDate as fetchSongsByReleaseDate };
