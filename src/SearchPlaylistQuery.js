import React from "react";
import { useQuery } from "react-query";
import { getSearchPlaylistQuery } from "./queries/queries";
import { auth, APP_ID } from "./ongraphAuth";
import Error from "./Error";
import SearchPlaylistResult from "./SearchPlaylistResult";

const SearchPlaylistQuery = (props) => {
  const results = useQuery(
    ["getSearchPlaylistQuery", { query: props.query }],
    getSearchPlaylistQuery
  );

  const { isFetching, refetch } = results;

  if (isFetching) return <pre>Loading</pre>;

  const { data, errors, networkError } = results.data || {};

  const needsLoginService = auth.findMissingAuthServices(errors)[0];

  return (
    <div>
      {data && <SearchPlaylistResult data={data} {...props} />}
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
          : "Run query: SearchPlaylist"}
      </button>
    </div>
  );
};

export default SearchPlaylistQuery;
