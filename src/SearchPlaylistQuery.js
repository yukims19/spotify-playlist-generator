import React from "react";
import { useQuery } from "react-query";
import { getSearchPlaylistQuery } from "./queries/queries";
import { getMusicPlayerMutation } from "./queries/mutations";
import { auth, APP_ID } from "./ongraphAuth";


const SearchPlaylistQuery = (props) => {
    const results = useQuery(
        ["getSearchPlaylistQuery", { query: props.query }],
        getSearchPlaylistQuery
    );
  const { isFetching, refetch } = results;

  if (isFetching) return <pre>Loading</pre>;

  const { data, errors, networkError } = results.data || {};

  const dataEl = data ? <pre>{JSON.stringify(data, null, 2)}</pre> : null;
  const errorEl =
    networkError || errors ? (
      <div className="error-box">
        Error in SearchPlaylist.
        <br />
        {networkError && networkError.toString().match("Failed to fetch") ? (
          <span>
            Make sure <strong>{window.location.origin}</strong> is in your CORS
            origins on the{" "}
            <a
              href={`https://www.onegraph.com/dashboard/app/${APP_ID}?add-cors-origin=${window.location.origin}`}
              target="_blank"
              rel="noreferrer"
            >
              OneGraph dashboard
            </a>
            .
          </span>
        ) : null}
        <pre>{JSON.stringify(errors, null, 2)}</pre>
      </div>
    ) : null;

  const needsLoginService = auth.findMissingAuthServices(errors)[0];

  return (
    <div>
      {dataEl}
      {errorEl}
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
          : "Run query: SearchPlaylist"}
      </button>
    </div>
  );
};

export default SearchPlaylistQuery;
