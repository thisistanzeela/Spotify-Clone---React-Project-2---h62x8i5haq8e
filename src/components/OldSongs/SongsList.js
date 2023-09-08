import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../../stores/player";
import { Icon } from "../../Icons";

function SongsList({ songs, title }) {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);

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
      <h1 className="text-2xl text-white font-semibold tracking-tight"  style={{margin:"20px 0px 30px 0px" ,fontSize:'2rem'}}>
        {title}
      </h1>
      <ul className="grid grid-cols-5 gap-4 gap-x-4">
        {songs.map((item) => (
          <div
            key={item.id}
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

export default SongsList;
