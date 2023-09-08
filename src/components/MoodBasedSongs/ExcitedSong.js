import React from "react";
import { fetchExcitedSongs } from "./MoodApi";
import SongDetail from "./SongDetail";

function RomanticSongs() {
  return (
    <SongDetail title="Excited Songs" fetchSongs={fetchExcitedSongs} />
  );
}

export default RomanticSongs;
