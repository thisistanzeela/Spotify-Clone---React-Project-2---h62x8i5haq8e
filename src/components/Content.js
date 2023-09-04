// import React from 'react';
// import {Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import Home from '../views/Home';
// import Search from '../views/Search';
// import Collection from '../views/Collection';
// import AllTrendingSong from './AllTrendingSong'; 
// import AlbumDetail from './AlbumDetail';

// function Content() {
//   return (
//     <main className="flex-auto overflow-auto">
//       <Navbar />
//       <div className="px-8 py-5">
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/trending" element={<AllTrendingSong />} />
//            <Route path="/search" element={<Search />} />
//            <Route path="/category/:id" element={<AlbumDetail />} />
//           <Route path="/collection" element={<Collection />} />
//         </Routes>
//       </div>
//     </main>
//   );
// }

// export default Content;





// import React from 'react';
// import { Routes, Route, useParams } from 'react-router-dom';
// import Navbar from './Navbar';
// import Home from '../views/Home';
// import Search from '../views/Search';
// import Collection from '../views/Collection';
// import AlbumDetail from './AlbumDetail';
// import SongDetail from './SongDetail';
// import SoulSootherDetail from './SoulSootherDetail';
// import AllTrendingSong from './AllTrendingSong';

// function Content() {
//   return (
//     <main className="flex-auto overflow-auto">
//       <Navbar />
//       <div className="px-8 py-5">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/trending" element={<AllTrendingSong />} />
//           <Route path="/search" element={<Search />} />
//           <Route path="/category/:id" element={<CategoryDetail />} />
//           <Route path="/collection" element={<Collection />} />
//           {/* <Route path="/album/:id" component={AlbumDetail} />  */}
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
//     case '1':
//       return <AlbumDetail />;
//     case '2':
//       return <SongDetail />;
//     case '3':
//       return <AllTrendingSong />;
//     case '4':
//       return <SoulSootherDetail />;
//     default:
//       return <div>Invalid Category</div>;
//   }
// }

// export default Content;

























import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../views/Home';
import Search from '../views/Search';
import Collection from '../views/Collection';
import AlbumDetail from './AlbumDetail';
import SongDetail from './SongDetail';
import SoulSootherDetail from './SoulSootherDetail';
import AllTrendingSong from './AllTrendingSong';
import AlbumSongs from './AlbumSongs'; 




function Content() {
  return (
    <main className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<AllTrendingSong />} />
          <Route path="/search" element={<Search />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/album/:albumId" element={<AlbumDetail />} />
          <Route path="/album-songs/:albumId" element={<AlbumSongs />} />

          
          {/* <Route path="/album-songs/:albumId" element ={< AlbumSongs />}  /> */}

        </Routes>
      </div>
    </main>
  );
}

function CategoryDetail() {
  // Get the id parameter from the URL
  const { id } = useParams();

  // Render different components based on the id
  switch (id) {
    case '1':
      return <AlbumDetail />;
    case '2':
      return <SongDetail />;
    case '3':
      return <AllTrendingSong />;
    case '4':
      return <SoulSootherDetail />;
    default:
      return <div>Invalid Category</div>;
  }
}

export default Content;