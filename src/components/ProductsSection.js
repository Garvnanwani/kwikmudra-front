import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "@material-ui/core";

import products from "./products";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  mainStyle: {
    backgroundColor: "#DF6B57",
    paddingTop: "70px",
    paddingBottom: "100px",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23fdfdfd' fill-opacity='0.19' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    height: "100%",
  },
  heroContent: {
    padding: theme.spacing(0, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  title: {
    color: "#fff",
    fontSize: "4rem",
    fontWeight: "500",
    // fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  cardGrid: {
    // paddingTop: theme.spacing(6),
    // paddingBottom: theme.spacing(6),
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  card: {
    height: "250px",
    display: "flex",
    marginBottom: "1.3rem",
    flexDirection: "column",
    borderRadius: "15px",
    backgroundColor: "#fafafa",
    boxShadow: "8px 8px 10px 5px rgba(0,0,0,0.25)",
    transition: theme.transitions.create(["background", "transform"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      transform: `scale(1.05)`,
      // borderColor: "#fff",
      // backgroundColor: "#DF6B57",
      // color: "#fff",
      cursor: "pointer",
    },
  },
  cardItem: {
    minWidth: "300px",
    minHeight: "250px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "300px",
      minHeight: "180px",
    },
  },
  cardContent: {
    flexGrow: 1,
  },
  cardHeading: {
    textAlign: "left !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
  cardBody: {
    textAlign: "left !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
}));

export default function ProductsPage() {
  const classes = useStyles();

  return (
    <div id="products">
      {/* <CssBaseline /> */}

      <main className={classes.mainStyle}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Fade>
              <Typography
                component="h2"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
                className={classes.title}
              >
                Our Products
              </Typography>
            </Fade>
          </Container>
        </div>
        {/* End hero unit */}
        <Grid
          container
          spacing={3}
          justify="space-around"
          alignItems="center"
          className={classes.cardGrid}
        >
          {products.map((card) => (
            <Grid
              item
              key={card}
              xs={3}
              sm={3}
              md={3}
              // lg={1}
              className={classes.cardItem}
            >
              <Fade down>
                <Link href={card.link} style={{ textDecoration: "none" }}>
                  <Card className={classes.card} variant="outlined">
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.cardHeading}
                      >
                        {card.title}
                      </Typography>
                      <Typography className={classes.cardBody}>
                        {card.desc}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.icon}>
                      <img
                        src="https://www.vectorlogo.zone/logos/telepresenceio/telepresenceio-icon.svg"
                        alt="product"
                      />
                      {/* Icons Here */}
                    </CardActions>
                  </Card>
                </Link>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
}
