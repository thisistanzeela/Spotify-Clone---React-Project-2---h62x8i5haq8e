import React, { useEffect, useState } from "react";
import { fetchSongs } from "./SongApi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../../stores/player";
import { Icon } from "../../Icons";

function SongDetail({ title, limit }) {
  const [allSongs, setAllSongs] = useState([]);

  // console.log("allSongs=" + allSongs);
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);

  useEffect(() => {
    // Fetch all trending songs when the component mounts
    fetchSongs().then((data) => {
      setAllSongs(data);
    //   console.log("setAllSongs=" + data);
    });
  }, []);

  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";

      case "podcast":
        return "rounded-xl";

      default:
        return "rounded";
    }
  };

  const updateCurrent = (item) => {
    if (current.id === item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-white font-semibold tracking-tight">
        {title}
      </h1>

      <ul className="grid grid-cols-5 gap-4 gap-x-4">
      {allSongs.slice(0, limit).map((item)  => (
  <div
    key={item.id} // Add this key prop
                className="bg-footer p-4 rounded hover:bg-active group"
                style={{ margin: "10px" }}
          >
            <div className="pt-[100%] relative mb-4">
              <img
                src={item.image}
                className={`absolute inset-0 object-cover w-full h-full ${imageStyle(
                  item
                )}`}
              />
              <button
                onClick={() => updateCurrent(item)}
                className={`w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center ${
                  current.id === item.id && playing ? "flex" : "hidden"
                }`}
              >
                <Icon
                  name={current.id === item.id && playing ? "pause" : "play"}
                  size={16}
                />
              </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
              {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-sm mt-1">{item.artist}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SongDetail;
