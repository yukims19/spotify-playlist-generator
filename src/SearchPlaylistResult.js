import React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

const SearchPlaylistResult = ({ data }) => {
  const playlist = data.spotify?.search?.playlists;
  return (
    <div>
      {playlist &&
        playlist.map((p) => {
          return (
            <Box
              display="flex"
              flexDirection="row"
              p={1}
              bgcolor="background.paper"
            >
              <Box p={1} bgcolor="grey.300">
                <Avatar variant="square" src={p.images[0].url} />
              </Box>
              <Box p={1} bgcolor="grey.300">
                <div>{p.name}</div>
                <div>{p.id}</div>
              </Box>
            </Box>
          );
        })}
    </div>
  );
};
export default SearchPlaylistResult;
