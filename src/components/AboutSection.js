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
              <CardContent style={{ textAlign: "center" }}>
                <Typography
                  className={classes.cardTitle}
                  color="textSecondary"
                  variant="h4"
                  component="h4"
                  gutterBottom
                >
                  <img
                    alt="start-img"
                    width="30px"
                    src="https://www.vectorlogo.zone/logos/telepresenceio/telepresenceio-icon.svg"
                  />
                  Heading Here
                </Typography>
                <Typography variant="body2" component="p">
                  some other text here
                  <br />
                  {'"a benevolent smile"'}
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
                  variant="h4"
                  component="h4"
                  gutterBottom
                >
                  <img
                    alt="start-img"
                    width="30px"
                    src="https://www.vectorlogo.zone/logos/telepresenceio/telepresenceio-icon.svg"
                  />
                  Heading Here
                </Typography>
                <Typography variant="body2" component="p">
                  some other text here
                  <br />
                  {'"a benevolent smile"'}
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
                  variant="h4"
                  component="h4"
                  gutterBottom
                >
                  <img
                    alt="start-img"
                    width="30px"
                    src="https://www.vectorlogo.zone/logos/telepresenceio/telepresenceio-icon.svg"
                  />
                  Heading Here
                </Typography>
                <Typography variant="body2" component="p">
                  some other text here
                  <br />
                  {'"a benevolent smile"'}
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
                  variant="h4"
                  component="h4"
                  gutterBottom
                >
                  <img
                    alt="start-img"
                    width="30px"
                    src="https://www.vectorlogo.zone/logos/telepresenceio/telepresenceio-icon.svg"
                  />
                  Heading Here
                </Typography>
                <Typography variant="body2" component="p">
                  some other text here
                  <br />
                  {'"a benevolent smile"'}
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
