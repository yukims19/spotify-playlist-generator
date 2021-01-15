import { auth } from "./ongraphAuth";

export function fetchData(query, { variables, operationName } = {}) {
  return fetch(
    "https://serve.onegraph.com/graphql?app_id=672647b4-7384-4416-8450-00621cdc7eac",
    {
      method: "POST",
      headers: { ...auth.authHeaders() },
      body: JSON.stringify({
        query: query,
        variables: variables,
        operationName: operationName
      })
    }
  )
    .then((res) => res.json())
    .catch((networkError) => {
      console.log("Network error in fetchData", networkError.toString());
      return { networkError: networkError };
    });
}
