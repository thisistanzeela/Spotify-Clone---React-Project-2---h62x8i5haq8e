// import React, { useEffect, useState } from "react";
// import Title from "../components/Title";
// import { fetchTrendingSongs } from "../components/TrendingApi";
// import Section from "../components/Section";
// import songs from "../data/songs";

// function Home() {
//   const [trendingSongs, setTrendingSongs] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     // Fetch trending songs when the component mounts
//     fetchTrendingSongs().then((data) => {
//       setTrendingSongs(data);
//     });
//   }, []);

//   return (
//     <div>
//       <Title
//         title="Spotify original & exclusive podcasts"
//         more={{
//           to: "/trending",
//         }}
//       />
//      <div className="grid grid-cols-5 mb-4 gap-5 gap-x-4">
//   {trendingSongs
//     .slice(0, showAll ? trendingSongs.length : 5)
//     .map((item) => (
//       <div
//         key={item.id}
//         className="bg-footer p-4 rounded hover:bg-active group"
//       >
//         <div className="pt-[100%] relative mb-4">
//           <img
//             src={item.image}
//             className={`absolute inset-0 object-cover w-full h-full`}
//           />
//           <button
//             onClick={() => {}}
//             className={`w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center hidden`}
//           ></button>
//         </div>
//         <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
//           {item.title}
//         </h6>
//         <p className="line-clamp-2 text-link text-sm ">{item.name}</p>
//         <p className="line-clamp-2 text-link text-sm">
//           {item.artist} 
//         </p>
//       </div>
//     ))}
// </div>
//       <Section title="Shows to try" more="/blabla" items={songs} />
//       <Section title="Made For Tayfun Erbilen" more="/blabla" items={songs} />
//     </div>
//   );
// }

// export default Home;






import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { fetchTrendingSongs } from "../components/TrendingApi";
import Section from "../components/Section";
import songs from "../data/songs";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../stores/player";
import { Icon } from "../Icons";

function Home() {
  const [trendingSongs, setTrendingSongs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);

  useEffect(() => {
    // Fetch trending songs when the component mounts
    fetchTrendingSongs().then((data) => {
      setTrendingSongs(data);
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
      <Title
        title="Trending now near you"
        more={{
          to: "/trending",
        }}
      />
      <div className="grid grid-cols-5 mb-4 gap-5 gap-x-4">
        {trendingSongs
          .slice(0, showAll ? trendingSongs.length : 5)
          .map((item) => (
            <div
              key={item.id}
              className="bg-footer p-4 rounded hover:bg-active group"
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
              <p className="line-clamp-2 text-link text-sm ">{item.name}</p>
              <p className="line-clamp-2 text-link text-sm">{item.artist}</p>
            </div>
          ))}
      </div>
      <Section title="Shows to try" more="/blabla" items={songs} />
      <Section title="Made For Tayfun Erbilen" more="/blabla" items={songs} />
    </div>
  );
}

export default Home;
