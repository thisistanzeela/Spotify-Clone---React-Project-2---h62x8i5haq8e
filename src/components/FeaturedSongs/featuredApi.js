import axios from "axios";

// Function to fetch trending songs from the API
export async function fetchTrendingSongs() {
  try {
    const response = await axios.get(
      'https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Trending songs"}',
      {
        headers: {
          projectId: "5fwpxj9fh6yy",
        },
      }
    );

    // Assuming the response.data contains an array of songs in the "data" property
    const songData = response.data.data;
    
    if (Array.isArray(songData)) {
      // Map the songs data to the desired format
      const filteredData = songData.map((item) => ({
        id: item._id,
        title: item.title,
        artist: item.artist[0].name,
        image: item.artist[0].image,
        src: item.audio_url,
      }));

      return filteredData;
    } else {
      // Handle the case where the data is not an array
      console.error("Response data does not contain an array:", songData);
      return [];
    }
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an error
  }
}



export async function fetchSoulSootherSong() {
  try {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://academics.newtonschool.co/api/v1/music/song?filter={"featured": "Soul soother"}',
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

// // Function to fetch trending songs from the API
// export async function fetchTrendingSongs() {
//   try {
//     const url = 'https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Trending songs"}';
//     const headers = {
//       'projectId': '5fwpxj9fh6yy',
//     };

//     const songData = await fetchData(url, headers);

//     if (Array.isArray(songData)) {
//       // Map the songs data to the desired format
//       const filteredData = songData.map((item) => ({
//         id: item._id,
//         title: item.title,
//         artist: item.artist[0].name,
//         image: item.artist[0].image,
//         src: item.audio_url,
//       }));

//       return filteredData;
//     } else {
//       // Handle the case where the data is not an array
//       console.error("Response data does not contain an array:", songData);
//       return [];
//     }
//   } catch (error) {
//     console.error(error);
//     return []; // Return an empty array in case of an error
//   }
// }

// // Function to fetch Soul Soother songs from the API
// export async function fetchSoulSootherSong() {
//   try {
//     const url = 'https://academics.newtonschool.co/api/v1/music/song?filter={"featured": "Soul soother"}';
//     const headers = {
//       'projectId': '5fwpxj9fh6yy',
//     };

//     const songData = await fetchData(url, headers);

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
