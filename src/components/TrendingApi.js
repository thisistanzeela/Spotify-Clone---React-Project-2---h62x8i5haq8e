import axios from "axios";

// Function to fetch trending songs from the API
export async function fetchTrendingSongs() {
  try {
    const response = await axios.get(
      'https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Trending songs"}',
      {
        headers: {
          projectId: "5fwpxj9fh6yy",
          Authorization: "Basic Og==",
        },
      }
    );

    // Assuming the response.data contains an array of songs in the "data" property
    const songData = response.data.data;
    console.log(`Trending Song Response ${JSON.stringify(songData)}`);

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
