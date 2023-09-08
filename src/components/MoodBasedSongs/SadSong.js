import React from "react";
import { fetchSadSongs } from "./MoodApi";
import SongDetail from "./SongDetail";

function RomanticSongs() {
  return (
    <SongDetail title="Sad Songs" fetchSongs={fetchSadSongs} />
  );
}

export default RomanticSongs;
