import React from "react";
import Title from "../components/Title";
import AllTrendingSong from "../components/FeaturedSongs/AllTrendingSong";
import { fetchTrendingSongs } from "../components/FeaturedSongs/featuredApi";
import SongDetail from "../components/Allsong/SongDetail";
import { fetchSongs } from "../components/Allsong/SongApi";
import Hero from "../components/NavbarCompo/Hero";
import Section from "../components/Section";
import songs from "../data/songs";

function Home() {
  return (
    <div>
      <Hero />

      <div>
        <Title
          title="Trending now near you"
          more={{
            to: "/trending",
          }}
        />
        <AllTrendingSong fetchTrendingData={fetchTrendingSongs} limit={5} />

        <Title
          title="All Songs"
          more={{
            to: "/allSong",
          }}
          style={{ margin: "20px 0px 30px 0px", fontSize: "1.5rem" }}
        />
        <SongDetail fetchSongsData={fetchSongs} limit={5} />
        <Title
          title="Throwback"
          more={{
            to: "/allOldSongs",
          }}
          style={{ margin: "20px 0px 30px 0px", fontSize: "1.5rem" }}
        />
        <Section items={songs} />
      </div>
    </div>
  );
}

export default Home;
