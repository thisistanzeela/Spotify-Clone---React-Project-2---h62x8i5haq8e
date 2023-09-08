// import React from "react";
// import { Routes, Route, useParams } from "react-router-dom";
// import Navbar from "./Navbar";
// import Home from "../views/Home";
// import Search from "../views/Search";
// import Collection from "../views/Collection";
// import AlbumDetail from "./Albums/AlbumDetail";
// import SongDetail from "./Allsong/SongDetail";
// import SoulSootherDetail from "./FeaturedSongs/SoulSootherDetail";
// import AllTrendingSong from "./FeaturedSongs/AllTrendingSong";
// import AlbumSongs from "./Albums/AlbumSongs";
// import Eighties from "./OldSongs/Eighties";
// import Seventies from "./OldSongs/Seventies";
// import OldSongs from "./OldSongs/OldSong";
// import RomanticSongs from "../components/MoodBasedSongs/RomanticSongs";
// import SadSongs from "../components/MoodBasedSongs/SadSong";
// import HappySongs from "../components/MoodBasedSongs/HappySong";
// import ExcitedSongs from "../components/MoodBasedSongs/ExcitedSong";
// import LikedSongs from "./LikedSongs";
// import SubscriptionModal from "./NavbarCompo/SubscriptionModal";
// import LoginPage from "../components/SignupLogin/LoginPage";
// import SignupPage from '../components/SignupLogin/SignupPage'
// function Content() {
//   return (
//     <main className="flex-auto overflow-auto">
//       <Navbar />
//       <div className="px-8 py-5">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/trending" element={<AllTrendingSong />} />
//           <Route path="/allsong" element={<SongDetail />} />
//           <Route path="/search" element={<Search />} />
//           <Route path="/premium" element={<SubscriptionModal />} />

//           <Route path="/category/:id" element={<CategoryDetail />} />
//           <Route path="/collection" element={<Collection />} />
//           <Route path="/album/:albumId" element={<AlbumDetail />} />
//           <Route path="/album-songs/:albumId" element={<AlbumSongs />} />
//           <Route path="/eighties" element={<Eighties />} />
//           <Route path="/seventies" element={<Seventies />} />
//           <Route path="/romanticSong" element={<RomanticSongs />} />
//           <Route path="/LikedSong" element={<LikedSongs />} />
//           <Route path="/allOldSongs" element={<OldSongs />} />
//           <Route path="/browse/:id" element={<BrowsDetail />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/Signup" element={<SignupPage />} />
//         </Routes>
//       </div>
//     </main>
//   );
// }

// function CategoryDetail() {
//   // Get the id parameter from the URL
//   const { id } = useParams();

//   // Render different components based on the id
//   switch (id) {
//     case "1":
//       return <AlbumDetail />;
//     case "2":
//       return <SongDetail />;
//     case "3":
//       return <AllTrendingSong />;
//     case "4":
//       return <SoulSootherDetail />;
//     default:
//       return <div>Invalid Category</div>;
//   }
// }
// function BrowsDetail() {
//   const { id } = useParams();

//   // Render different components based on the id
//   switch (id) {
//     case "1":
//       return <RomanticSongs />;
//     case "2":
//       return <SadSongs />;
//     case "3":
//       return <HappySongs />;
//     case "4":
//       return <ExcitedSongs />;
//     case "5":
//       return <SongDetail />;
//     default:
//       return <SongDetail />;
//   }
// }

// export default Content;









import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../views/Home";
import Search from "../views/Search";
import Collection from "../views/Collection";
import AlbumDetail from "./Albums/AlbumDetail";
import SongDetail from "./Allsong/SongDetail";
import SoulSootherDetail from "./FeaturedSongs/SoulSootherDetail";
import AllTrendingSong from "./FeaturedSongs/AllTrendingSong";
import AlbumSongs from "./Albums/AlbumSongs";
import Eighties from "./OldSongs/Eighties";
import Seventies from "./OldSongs/Seventies";
import OldSongs from "./OldSongs/OldSong";
import RomanticSongs from "../components/MoodBasedSongs/RomanticSongs";
import SadSongs from "../components/MoodBasedSongs/SadSong";
import HappySongs from "../components/MoodBasedSongs/HappySong";
import ExcitedSongs from "../components/MoodBasedSongs/ExcitedSong";
import LikedSongs from "./LikedSongs";
import SubscriptionModal from "./NavbarCompo/SubscriptionModal";
import Login from "../components/SignupLogin/Login";
import Signup from '../components/SignupLogin/Signup';
import LoginFullScreen from "./SignupLogin/LoginFullScreen";
import SignupFullScreen from './SignupLogin/SignupFullScreen'

function Content() {
  return (
    <main className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<AllTrendingSong />} />
          <Route path="/allsong" element={<SongDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/premium" element={<SubscriptionModal />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/album/:albumId" element={<AlbumDetail />} />
          <Route path="/album-songs/:albumId" element={<AlbumSongs />} />
          <Route path="/eighties" element={<Eighties />} />
          <Route path="/seventies" element={<Seventies />} />
          <Route path="/romanticSong" element={<RomanticSongs />} />
          <Route path="/LikedSong" element={<LikedSongs />} />
          <Route path="/allOldSongs" element={<OldSongs />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/browse/:id" element={<BrowsDetail />} />
          <Route path="/login-Page" element={<LoginFullScreen />} />
          <Route path="/Signup-Page" element={<SignupFullScreen />} />
      
      
        </Routes>
      </div>
    </main>
  );
}

function CategoryDetail() {
  const { id } = useParams();

  switch (id) {
    case "1":
      return <AlbumDetail />;
    case "2":
      return <SongDetail />;
    case "3":
      return <AllTrendingSong />;
    case "4":
      return <SoulSootherDetail />;
    default:
      return <div>Invalid Category</div>;
  }
}

function BrowsDetail() {
  const { id } = useParams();

  switch (id) {
    case "1":
      return <RomanticSongs />;
    case "2":
      return <SadSongs />;
    case "3":
      return <HappySongs />;
    case "4":
      return <ExcitedSongs />;
    case "5":
      return <SongDetail />;
    default:
      return <SongDetail />;
  }
}

export default Content;
