import React, { useState, useEffect } from "react";
import SearchPlaylistQuery from "./SearchPlaylistQuery";

function SearchPlaylist() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <SearchPlaylistQuery query={searchInput} />
    </>
  );
}

export default SearchPlaylist;
