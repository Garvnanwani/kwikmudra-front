import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import React from "react"

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
    // paddingTop: theme.spacing(6),
    // paddingBottom: theme.spacing(6),
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  card: {
    height: "100%",
    display: "flex",
    marginBottom: "1.3rem",
    flexDirection: "column",
    borderRadius: "15px",
    border: "1px solid black",
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
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function ProductsPage() {
  const classes = useStyles()

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}

      <main
        style={{
          backgroundColor: "#fff",
          paddingTop: "40px",
          paddingBottom: "100px",
        }}
      >
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Our Products
            </Typography>
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
          {cards.map((card) => (
            <Grid
              item
              key={card}
              xs={3}
              sm={2}
              md={1}
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
                  <img
                    src="https://www.vectorlogo.zone/logos/telepresenceio/telepresenceio-icon.svg"
                    alt="product"
                  />
                  {/* Icons Here */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </React.Fragment>
  )
}
