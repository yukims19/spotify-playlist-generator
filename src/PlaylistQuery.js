import React from "react";
import { useQuery } from "react-query";
import { getPlaylistQuery } from "./queries/queries";
import { auth, APP_ID } from "./ongraphAuth";
import Error from "./Error";
import PlaylistTracks from "./PlaylistTracks";

const PlaylistQuery = (props) => {
  const results = useQuery(
    ["getPlaylistQuery", { id: props.id }],
    getPlaylistQuery
  );

  if (!props.id) {
    return null;
  }

  const { isFetching, refetch } = results;

  if (isFetching) return <pre>Loading</pre>;

  const { data, errors, networkError } = results.data || {};

  const needsLoginService = auth.findMissingAuthServices(errors)[0];

  return (
    <div>
      {data && <PlaylistTracks data={data} />}
      {!data && <Error errors={errors} networkError={networkError} />}
      <br />
      <button
        onClick={async () => {
          if (!needsLoginService) {
            refetch();
          } else {
            await auth.login(needsLoginService);
            const loginSuccess = await auth.isLoggedIn(needsLoginService);
            if (loginSuccess) {
              console.log("Successfully logged into " + needsLoginService);
              refetch();
            } else {
              console.log(
                "The user did not grant auth to " + needsLoginService
              );
            }
          }
        }}
      >
        {needsLoginService
          ? `Log in to ${needsLoginService}`
          : "Run query: Playlist"}
      </button>
    </div>
  );
};

export default PlaylistQuery;
