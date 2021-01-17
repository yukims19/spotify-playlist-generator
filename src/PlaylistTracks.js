import React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hover: {
    cursor: "pointer",
  },
}));
const PlaylistTracks = ({ data, playlistIdOnFocus, setPlaylistIdOnFocus }) => {
  const classes = useStyles();
  const playlist = data.spotify?.search?.playlists;
  return (
    <div
      style={{
        width: "100%",
        height: playlistIdOnFocus ? "100px" : "auto",
        overflow: "scroll",
      }}
    >
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        p={1}
        bgcolor="background.paper"
      >
        {playlist &&
          playlist.map((p) => {
            return (
              <Box
                display="flex"
                flexDirection="row"
                p={1}
                bgcolor={p.id === playlistIdOnFocus ? "red" : "white"}
                onClick={() => setPlaylistIdOnFocus(p.id)}
                className={classes.hover}
              >
                <Box p={1} bgcolor="grey.300">
                  <Avatar variant="square" src={p.images[0].url} />
                </Box>
                <Box p={1} bgcolor="grey.300">
                  <div>{p.name}</div>
                  <div>id: {p.id}</div>
                </Box>
              </Box>
            );
          })}
      </Box>
    </div>
  );
};
export default PlaylistTracks;
