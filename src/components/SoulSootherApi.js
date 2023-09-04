import axios from 'axios';

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
