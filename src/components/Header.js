import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HeaderImage from "../assets/headerImage.svg";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "10px",
    paddingBottom: "20px",
    // background: "#333",
    height: "95vh",
    backgroundColor: "#fff",
  },
  image: {
    height: "350px",
    [theme.breakpoints.down("sm")]: {
      height: "250px",
      marginRight: "0px",
    },
    marginRight: "50px",
  },
  buttonStyle: {
    borderRadius: "10px",
    marginTop: "25px",
    // padding: "10px 0px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    // <div>
    <Grid
      container
      spacing={5}
      className={classes.root}
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <img
          src={HeaderImage}
          alt="header-img"
          className={classes.image}
          style={{ textAlign: "center" }}
        />
      </Grid>
      <Grid item style={{ textAlign: "center" }}>
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
      </Grid>
    </Grid>
    // </div>
  );
}
