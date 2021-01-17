import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import SearchPlaylist from "./SearchPlaylist";
import PlaylistQuery from "./PlaylistQuery";

/* import { SubscriptionClient } from "onegraph-subscription-client"; */
/* const subscriptionClient = new SubscriptionClient(APP_ID, {
 *   oneGraphAuth: auth,
 *   reconnect: true,
 *   lazy: true
 * }); */

function App() {
  const [playlistIdOnFocus, setPlaylistIdOnFocus] = useState();
  return (
    <>
      <SearchPlaylist
        playlistIdOnFocus={playlistIdOnFocus}
        setPlaylistIdOnFocus={setPlaylistIdOnFocus}
      />
      <PlaylistQuery id={playlistIdOnFocus} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
