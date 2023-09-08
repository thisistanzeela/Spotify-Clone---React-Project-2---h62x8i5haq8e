import axios from 'axios';

// Function to fetch songs based on mood from the API
export async function fetchSongsByMood(mood) {
  try {
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/music/song?filter={"mood": "${mood}"}`,
      {
        headers: {
          projectId: '5fwpxj9fh6yy',
        },
      }
    );

    const songData = response.data.data;
    // console.log(` ${mood} Songs Response ${JSON.stringify(songData)}`);

    if (Array.isArray(songData)) {
      const filteredData = songData.map((item) => ({
        id: item._id,
        title: item.title,
        artist: item.artist.length > 0 ? item.artist[0].name : 'Unknown Artist', // Handle empty artist array
        image: item.artist.length > 0 ? item.artist[0].image : 'default-image-url', // Provide a default image URL
        src: item.audio_url,
      }));

      return filteredData;
    } else {
      console.error(`Response data for ${mood} songs does not contain an array:`, songData);
      return [];
    }
  } catch (error) {
    console.error(`Error fetching ${mood} songs:`, error);
    return [];
  }
}


export async function fetchRomanticSongs() {
  return fetchSongsByMood('romantic');
}

export async function fetchSadSongs() {
  return fetchSongsByMood('sad');
}

export async function fetchHappySongs() {
  return fetchSongsByMood('happy');
}

export async function fetchExcitedSongs() {
  return fetchSongsByMood('excited');
}




// // Function to make a GET request using the fetch API
// async function fetchData(url, headers) {
//   try {
//     const response = await fetch(url, { method: 'GET', headers });

//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// // Function to fetch songs based on mood from the API
// export async function fetchSongsByMood(mood) {
//   try {
//     const url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood": "${mood}"}`;
//     const headers = {
//       'projectId': '5fwpxj9fh6yy',
//     };

//     const songData = await fetchData(url, headers);

//     if (Array.isArray(songData)) {
//       const filteredData = songData.map((item) => ({
//         id: item._id,
//         title: item.title,
//         artist: item.artist.length > 0 ? item.artist[0].name : 'Unknown Artist', // Handle empty artist array
//         image: item.artist.length > 0 ? item.artist[0].image : 'default-image-url', // Provide a default image URL
//         src: item.audio_url,
//       }));

//       return filteredData;
//     } else {
//       console.error(`Response data for ${mood} songs does not contain an array:`, songData);
//       return [];
//     }
//   } catch (error) {
//     console.error(`Error fetching ${mood} songs:`, error);
//     return [];
//   }
// }

// // Mood-specific song fetching functions
// export async function fetchRomanticSongs() {
//   return fetchSongsByMood('romantic');
// }

// export async function fetchSadSongs() {
//   return fetchSongsByMood('sad');
// }

// export async function fetchHappySongs() {
//   return fetchSongsByMood('happy');
// }

// export async function fetchExcitedSongs() {
//   return fetchSongsByMood('excited');
// }
