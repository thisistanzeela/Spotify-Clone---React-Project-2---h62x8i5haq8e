import React, { useEffect, useState } from "react";
import {
  songsReleasedIn1980,
  songsReleasedIn1981,
  songsReleasedIn1971,
  songsReleasedIn1975,
  songsReleasedIn1976,
} from "./OldSongApi";
import SongsList from "./SongsList"; // Import the SongsList component

function OldSongs() {
  const [songs1980, setSongs1980] = useState([]);
  const [songs1981, setSongs1981] = useState([]);
  const [songs1971, setSongs1971] = useState([]);
  const [songs1975, setSongs1975] = useState([]);
  const [songs1976, setSongs1976] = useState([]);

  useEffect(() => {
    // Fetch songs for different release years
    songsReleasedIn1980('1980-01-01T00:00:00.000Z').then((data) => {
      setSongs1980(data);
    });
    songsReleasedIn1981('1981-01-01T00:00:00.000Z').then((data) => {
      setSongs1981(data);
    });
    songsReleasedIn1971('1971-01-01T00:00:00.000Z').then((data) => {
      setSongs1971(data);
    });
    songsReleasedIn1975('1975-01-01T00:00:00.000Z').then((data) => {
      setSongs1975(data);
    });
    songsReleasedIn1976('1976-01-01T00:00:00.000Z').then((data) => {
      setSongs1976(data);
    });
  }, []);

  return (
    <div>
      <SongsList songs={songs1980} title="Songs Released in 1980" />
      <SongsList songs={songs1981} title="Songs Released in 1981" />
      <SongsList songs={songs1971} title="Songs Released in 1971" />
      <SongsList songs={songs1975} title="Songs Released in 1975" />
      <SongsList songs={songs1976} title="Songs Released in 1976" />
    </div>
  );
}

export default OldSongs;
