import React, { useEffect, useState } from 'react';
import { fetchSongs } from './Allsong/SongApi'; 
import { Icon } from '../Icons';
import { useDispatch, useSelector } from 'react-redux'; 
import { setCurrent } from '../stores/player';

const Playlist = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const songsData = await fetchSongs();
        setSongs(songsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Redux setup
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);

  // Function to play or pause a song
  const updateCurrent = (song) => {
    if (current.id === song.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(song));
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold " style={{ marginBottom: "40px", paddingBottom: "10px" }}>
        My Playlist
      </h1>
      <table>
        <thead>
          <tr>
            <th className="text-left" style={{ width: '12vw' }}>#</th>
            <th style={{ width: '20vw' }} className="text-left">Artist</th>
            <th style={{ width: '20vw' }} className="text-left">Song</th>
            <th style={{ width: '20vw' }} className="text-left">Play</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id} className="p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 mb-4">
              <td>
                <img
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100px',
                    height: "100px",
                    marginTop: "16px",
                    marginBottom: "16px",
                    marginLeft: "20px",
                    marginRight: "20px",
                    borderRadius: '50%'
                  }}
                  src={song.image}
                  alt={`Cover for ${song.title}`}
                  className="w-12 h-12 object-cover square-full"
                />
              </td>
              <td>
                <div>
                  <h2
                    style={{
                      display: 'flex',
                      paddingLeft: '90px',
                      width: '16vw',
                      height: "110px",
                      margin: "60px",
                      paddingTop: "30px"
                    }}
                    className="text-xl font-semibold"
                  >
                    {song.artist}
                  </h2>
                </div>
              </td>
              <td>
                <div>
                  <h2
                    style={{
                      display: 'flex',
                      paddingLeft: '90px',
                      width: '16vw',
                      height: "110px",
                      margin: "60px",
                      paddingTop: "30px"
                    }}
                    className="text-xl font-semibold"
                  >
                    {song.title}
                  </h2>
                </div>
              </td>
              <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '110px', height: "70px", margin: "60px", paddingTop: '30px' }}>
                <button className="text-primary rounded-full bg-primary group-hover:flex group-focus:flex " onClick={() => updateCurrent(song)}>
                  <Icon name={current.id === song.id && playing ? "pause" : "play"} size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Playlist;
