import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HeaderImage from "../assets/headerImage.svg";
import { Button, Typography } from "@material-ui/core";

import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: "10px",
    paddingBottom: "40px",
    background: "#333",
    height: "75vh",
    // maxWidth: "80%",
    // textAlign: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "500px",
    // marginRight: "100px",
    [theme.breakpoints.down("sm")]: {
      width: "350px",
      // marginRight: "0px",
    },
  },
  buttonStyle: {
    borderRadius: "10px",
    marginTop: "25px",
    // padding: "10px 0px",
    paddingLeft: "20px",
    paddingRight: "20px",
    transition: theme.transitions.create(
      ["background", "transform", "color", "background-color"],
      {
        duration: theme.transitions.duration.standard,
      }
    ),
    "&:hover": {
      transform: `scale(1.05)`,
      border: "1px solid",
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      backgroundColor: "#fff",
      cursor: "pointer",
    },
  },
  rightSection: {
    textAlign: "center",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div style={{ textAlign: "center" }}>
      <Grid
        mx="auto"
        container
        // spacing={8}
        className={classes.root}
        alignItems="center"
        justify="space-around"
      >
        <Grid item>
          <Fade left>
            <img
              src={HeaderImage}
              alt="header-img"
              className={classes.image}
              style={{ textAlign: "center" }}
            />
          </Fade>
        </Grid>
        <Grid item className={classes.rightSection}>
          <Fade right>
            <Typography variant="h2">Kwik Mudra</Typography>
            <Typography variant="h5" gutterBottom>
              Tagline Here
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.buttonStyle}
            >
              Get Free Credit Score
            </Button>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
}
