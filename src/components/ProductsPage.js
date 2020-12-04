import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(0, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    width: "80%",
    // minWidth: "85%",
    // [theme.breakpoints.down("sm")]: {
    // width: "100%",
    // },
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    backgroundColor: "#fafafa",
    boxShadow: "8px 8px 5px 1px rgba(0,0,0,0.25)",
  },
  cardItem: {
    minWidth: "300px",
    minHeight: "250px",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function ProductsPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main style={{ backgroundColor: "#fff" }}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Out Products
            </Typography>
            {/* <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
            </Typography> */}
          </Container>
        </div>
        <Container
          className={classes.cardGrid}
          // maxWidth="md"
        >
          {/* End hero unit */}
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            {cards.map((card) => (
              <Grid
                item
                key={card}
                xs={2}
                sm={2}
                // md={1}
                // lg={1}
                className={classes.cardItem}
              >
                <Card className={classes.card} variant="outlined">
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.icon}>
                    <img src="https://www.vectorlogo.zone/logos/telepresenceio/telepresenceio-icon.svg" />
                    {/* Icons Here */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
