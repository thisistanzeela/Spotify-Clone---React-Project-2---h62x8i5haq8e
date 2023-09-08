import React from "react";
import { fetchHappySongs } from "./MoodApi";
import SongDetail from "./SongDetail";

function RomanticSongs() {
  return (
    <SongDetail title="Happy Songs" fetchSongs={fetchHappySongs} />
  );
}

export default RomanticSongs;
