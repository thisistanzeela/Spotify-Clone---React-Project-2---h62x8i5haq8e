// import React from "react";
// // import {NavLink} from "react-router-dom";
// import SongItem from "./SongItem";
// import Title from "./Title";

// function Section({ title, more = false, items }) {

//     return (
//         <section>
//             <Title title={title} more={more} />
//             <div className="grid grid-cols-5 gap-x-6">
//                 {items.map(item => <SongItem item={item} key={item.id} />)}
//             </div>
//         </section>
//     )
// }

// export default Section





import React from 'react';
import SongItem from './SongItem';
import Title from './Title';

function Section({ title, more = false, items, showAll }) {
  const displayedItems = showAll ? items : items.slice(0, 5);

  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid grid-cols-5 gap-x-6">
        {displayedItems.map((item) => (
          <SongItem item={item} key={item.id} />
        ))}
      </div>
      {!showAll && more && (
        <button
          className="text-xs hover:underline font-semibold uppercase text-link tracking-wider"
          onClick={more.onClick}
        >
          {/* See All */}
        </button>
      )}
    </section>
  );
}

export default Section;
