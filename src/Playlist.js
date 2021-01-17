import React, { useState, useEffect } from "react";
import PlaylistQuery from "./PlaylistQuery";

function Playlist() {
  const [id, setId] = useState("");

  return (
    <>
      <input value={id} onChange={(e) => setId(e.target.value)} />
      <PlaylistQuery id={id} />
    </>
  );
}

export default Playlist;
