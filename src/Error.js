import React from "react";
import { APP_ID } from "./ongraphAuth";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  background: {
    background: "#f37575c2",
  },
}));

const Error = ({ errors, networkError }) => {
  const classes = useStyles();

  return networkError || errors ? (
    <Accordion className={classes.background}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          Error in SearchPlaylist.
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {networkError && networkError.toString().match("Failed to fetch") ? (
            <span>
              Make sure <strong>{window.location.origin}</strong> is in your
              CORS origins on the{" "}
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
        </Typography>
      </AccordionDetails>
    </Accordion>
  ) : null;
};

export default Error;
