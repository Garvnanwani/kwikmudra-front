import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Grid, Link } from "@material-ui/core";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  section: {
    // padding: "20px 20px",
    // paddingTop: theme.spacing(8),
    // paddingBottom: theme.spacing(8),
    paddingTop: "100px",
    paddingBottom: "50px",
    backgroundColor: "#fff",
  },
  title: {
    color: "#DF6B57",
    fontSize: "2.7rem",
    textAlign: "center",
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  cardTitle: {
    color: "#df6b57",
    fontSize: "2.5rem",
    paddingBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    // fontSize: "20px",
  },
  cardRoot: {
    width: "100%",
    border: "0px",
    // paddingRight: "30px",
  },
  item: {
    // width: "50%",
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    // },
  },
  gridContainer: {
    paddingTop: "40px",
    paddingBottom: "40px",
  },
  buttonStyle: {
    padding: "7px 20px",
    fontSize: "25px",
    borderRadius: 15,
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
  textContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Fade top>
        <Typography
          variant="h3"
          component="h3"
          className={classes.title}
          gutterBottom
        >
          Kwik Mudra is India’s largest digital marketplace for loans & credit
          cards
        </Typography>
      </Fade>

      <Fade>
        <Grid
          container
          // spacing={4}
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={6} className={classes.item}>
            <Card variant="outlined" className={classes.cardRoot}>
              <CardContent>
                <Typography
                  className={classes.cardTitle}
                  color="textSecondary"
                  variant="h5"
                  component="h5"
                  gutterBottom
                >
                  {/* <img
                    alt="start-img"
                    width="30px"
                    src="https://www.vectorlogo.zone/logos/telepresenceio/telepresenceio-icon.svg"
                  /> */}
                  Who are we?
                </Typography>
                <Typography variant="body2" component="p">
                  <div className={classes.textContainer}>
                    India's first and own money related marketplace with more
                    than 40Lakh satisfied clients
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className={classes.item}>
            <Card variant="outlined" className={classes.cardRoot}>
              <CardContent style={{ textAlign: "center" }}>
                <Typography
                  className={classes.cardTitle}
                  color="textSecondary"
                  variant="h5"
                  component="h5"
                  gutterBottom
                >
                  {/* <img
                    alt="start-img"
                    width="30px"
                    src="https://www.vectorlogo.zone/logos/telepresenceio/telepresenceio-icon.svg"
                  /> */}
                  What we do?
                </Typography>
                <Typography variant="body2" component="p">
                  <div className={classes.textContainer}>
                    We empower you to look out for the best accessible options
                    on Loans and Credit Cards for your profile with only a
                    couple of clicks.
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className={classes.item}>
            <Card variant="outlined" className={classes.cardRoot}>
              <CardContent style={{ textAlign: "center" }}>
                <Typography
                  className={classes.cardTitle}
                  color="textSecondary"
                  variant="h5"
                  component="h5"
                  gutterBottom
                >
                  {/* <img
                    alt="start-img"
                    width="30px"
                    src="https://www.vectorlogo.zone/logos/telepresenceio/telepresenceio-icon.svg"
                  /> */}
                  Our Vision
                </Typography>
                <Typography variant="body1" component="p">
                  <div className={classes.textContainer}>
                    To instruct, encourage and enable customers with the
                    greatest decision of the best financial items in India.
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className={classes.item}>
            <Card variant="outlined" className={classes.cardRoot}>
              <CardContent style={{ textAlign: "center" }}>
                <Typography
                  className={classes.cardTitle}
                  color="textSecondary"
                  variant="h5"
                  component="h5"
                  gutterBottom
                >
                  {/* <img
                    alt="start-img"
                    width="30px"
                    src="https://www.vectorlogo.zone/logos/telepresenceio/telepresenceio-icon.svg"
                  /> */}
                  Our Popular Products
                </Typography>
                <Typography variant="body2" component="p">
                  <div className={classes.textContainer}>
                    Personal loans, Credit Cards, Home Loans etc. <br />
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Fade>

      <div style={{ textAlign: "center" }}>
        <Fade bottom>
          <Link style={{ textDecoration: "none" }} href="/about">
            <Button
              color="primary"
              variant="contained"
              className={classes.buttonStyle}
            >
              About US
            </Button>
          </Link>
        </Fade>
      </div>
    </div>
  );
}
