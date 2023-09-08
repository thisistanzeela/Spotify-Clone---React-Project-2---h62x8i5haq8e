import React from "react";
import { fetchRomanticSongs } from "./MoodApi";
import SongDetail from "./SongDetail";

function RomanticSongs() {
  return (
    <SongDetail title="Romantic Songs" fetchSongs={fetchRomanticSongs} />
  );
}

export default RomanticSongs;
