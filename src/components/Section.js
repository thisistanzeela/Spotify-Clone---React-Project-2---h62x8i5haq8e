import React from 'react';
import SongItem from './SongItem';
// import Title from './Title';

function Section({  items, showAll }) {
  const displayedItems = showAll ? items : items.slice(0, 5);

  return (
    <section>
      <div className="grid grid-cols-5 gap-x-6">
        {displayedItems.map((item) => (
          <SongItem item={item} key={item.id} />
        ))}
      </div>
      
    </section>
  );
}

export default Section;
