import { fetchData } from "../fetchData";

export const getPlaylistQuery = async (key, variables) => {
  const PLAYLIST_QUERY = `
query Playlist($id: String) {
spotify {
  playlist(id: $id) {
    name
    tracks {
      name
      id
      oneGraphId
      audioFeatures {
        acousticness
        danceability
        durationMs
        energy
        instrumentalness
        liveness
        loudness
        key
        mode
        speechiness
        tempo
        timeSignature
        uri
        valence
      }
    }
    oneGraphId
  }
}
}
`;

  const results = await fetchData(PLAYLIST_QUERY, { variables: variables });
  return results;
};

export const getSearchPlaylistQuery = async (key, variables) => {
  const SEARCH_PLAYLIST_QUERY = `
  query SearchPlaylist($query: String = "Chill Hits") {
    spotify {
      search(data: {query: $query}) {
        playlists {
          name
          id
          images {
            url
          }
        }
      }
    }
  }
`;

  const results = await fetchData(SEARCH_PLAYLIST_QUERY, {
    variables: variables
  });
  return results;
};
