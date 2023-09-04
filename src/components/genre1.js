
import React, { useState } from "react";
import Search from "./Search";

function Genre() {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemSelected = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <div className="App">
      <Search onItemSelected={handleItemSelected} />
    </div>
  );
}

export default Genre;
