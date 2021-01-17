import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import SearchPlaylist from "./SearchPlaylist";
import Playlist from "./Playlist";

/* import { SubscriptionClient } from "onegraph-subscription-client"; */
/* const subscriptionClient = new SubscriptionClient(APP_ID, {
 *   oneGraphAuth: auth,
 *   reconnect: true,
 *   lazy: true
 * }); */

const container = (
  <>
    <SearchPlaylist />
    <Playlist />
  </>
);

ReactDOM.render(container, document.getElementById("root"));
