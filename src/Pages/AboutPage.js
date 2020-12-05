import { Card, CardContent, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: "#fff",
  },
  textSection: {
    paddingLeft: "30px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  imgSection: {
    // float: "right",
    textAlign: "center",
  },
  cardTitle: {
    color: "#fff",
    paddingBottom: "20px",
    // fontSize: "20px",
  },
  cardRoot: {
    // width: "100%",
    color: "#fff",
    backgroundColor: "#df6b57",
    borderRadius: "40px",
    height: "300px",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    // border: "0px",
    // paddingRight: "30px",
  },
  gridContainer: {
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function AboutPage() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={5}
        style={{ paddingBottom: "40px" }}
      >
        <Grid item xs={12} sm={6}>
          <div className={classes.textSection}>
            <Typography variant="h2" component="h2" gutterBottom>
              Sample Heading{" "}
            </Typography>
            <Typography variant="body1">
              Sunt voluptatem autem fugiat repudiandae dolore. Assumenda quidem
              nulla aut atque consequatur sed. Totam mollitia eius dignissimos
              autem. Tempora corrupti amet doloremque beatae. Voluptas dolorum
              ut. Dolor rem tempora.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div className={classes.imgSection}>
            <img
              width="200px"
              src="http://lorempixel.com/640/480"
              alt="lorempixel"
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.gridContainer}
          >
            <Grid item xs={12} sm={4}>
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
                    Word of the Day
                  </Typography>
                  <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
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
                    Word of the Day
                  </Typography>
                  <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
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
                    Word of the Day
                  </Typography>
                  <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
