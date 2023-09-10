import axios from "axios";

export async function fetchSongs() {
  try {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://academics.newtonschool.co/api/v1/music/song",
      headers: {
        projectId: "5fwpxj9fh6yy",
      },
    };

    const response = await axios.request(config);

    const songData = response.data.data;


    if (Array.isArray(songData)) {
      return songData.map((item) => ({
        id: item._id,
        title: item.title,
        artist: item.artist.length > 0 ? item.artist[0].name : "Unknown Artist",
        image: item.artist.length > 0 ? item.artist[0].image : null,
        src: item.audio_url,
      }));
    } else {
      console.error("Response data does not contain an array:", songData);
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}


