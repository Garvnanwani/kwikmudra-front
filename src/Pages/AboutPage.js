import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import clsx from "clsx";
import Fade from "react-reveal/Fade";

// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    backgroundColor: "#fff",
    maxWidth: "85%",
    textAlign: "center",
    marginRight: "0 auto",
  },
  textSection: {
    // paddingLeft: "30px",
    // textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  productsGrid: {
    padding: theme.spacing(5),
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    borderRadius: "15px",
    boxShadow: "3px 3px 5px 5px rgba(0,0,0,0.25)",
    // margin: "5px",
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
    height: "250px",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
    // display: "flex",
    marginBottom: "1.3rem",
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
    width: "200px",
    // minHeight: "250px",
    // [theme.breakpoints.down("sm")]: {
    //   minWidth: "300px",
    //   minHeight: "180px",
    // },
  },
  cardContent: {
    flexGrow: 1,
  },
  gridContainer: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    // textAlign: "-webkit-center",
    // alignSelf: "stretch",
  },
  heading: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  left: {
    textAlign: "left",
    padding: "30px 0px",
    margin: "10px 0px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  right: {
    textAlign: "right",
    // float: "right",
    padding: "30px 0px",
    margin: "10px 0px",
    // paddingTop: "20px",
    // paddingBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  myImage: {
    borderRadius: "15px",
    backgroundColor: "#fafafa",
    boxShadow: "4px 4px 10px 4px rgba(0,0,0,0.25)",
    height: "300px",
    [theme.breakpoints.down("sm")]: {
      height: "200px",
    },
  },
  myContainer: {
    margin: "20px 0px 0px 0px",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "space-around",
      justifyContent: "center",
    },
    alignItems: "center",
    justifyContent: "space-around",
    margin: "20px 0px",
  },
  colouredContainer: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: "10px",
    height: "120px",
    width: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function AboutPage() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.section}>
        <Grid
          container
          justify="center"
          alignItems="center"
          // spacing={5}
          style={{ paddingBottom: "40px" }}
        >
          <Fade top>
            <Grid item xs={12} className={classes.myContainer}>
              <div>
                <Typography
                  variant="h3"
                  component="h3"
                  gutterBottom
                  className={classes.heading}
                >
                  Our Vision
                </Typography>
                <Typography variant="body1">
                  To instruct, encourage and enable customers with the greatest
                  decision of the best and the most moderate financial items in
                  India.
                </Typography>
              </div>
            </Grid>
          </Fade>

          <Grid item xs={12} className={classes.imageContainer}>
            <img
              src="http://lorempixel.com/640/480/business"
              alt="imagee"
              className={classes.myImage}
            />
            <img
              src="http://lorempixel.com/640/480/business"
              alt="imagee"
              className={classes.myImage}
            />
          </Grid>

          <Grid item xs={12} className={clsx(classes.myContainer)}>
            <div className={clsx(classes.textSection, classes.left)}>
              <Fade left>
                <Typography
                  variant="h3"
                  component="h3"
                  gutterBottom
                  className={classes.heading}
                >
                  Who are we?
                </Typography>
              </Fade>
              <Fade right>
                <Typography variant="body1" className={classes.left}>
                  Kwikmudra is India's first and own money related marketplace
                  encouraging quick and simple Loans, Credit Cards and Insurance
                  Covers to customers. <br />
                  We are a group of more than 40 Lakh satisfied clients, 100+
                  RBI perceived banks, NBFCs and budgetary establishments, and
                  2500+ relationship chiefs. <br />
                  With MakeMyBachat, finding moderate Loans, Credit Cards, and
                  Insurance spread is simple!
                </Typography>
              </Fade>
            </div>
          </Grid>

          <Grid item xs={12} className={classes.myContainer}>
            <div className={clsx(classes.textSection, classes.left)}>
              <Fade left>
                <Typography
                  variant="h3"
                  component="h3"
                  gutterBottom
                  className={classes.heading}
                >
                  What we do?
                </Typography>
              </Fade>
              <Fade right>
                <Typography variant="body1" className={classes.left}>
                  We overcome any issues between the loan specialists and the
                  borrowers as a real-time Online Marketplace. We empower you to
                  look out for the best accessible options on Loans and Credit
                  Cards for your profile with only a couple of clicks.
                </Typography>
                <Typography variant="body2">
                  <ul>
                    <li>
                      We offer free customized help for Loans, Credit Cards and
                      Insurance items on the web.{" "}
                    </li>
                    <li>
                      We generally endeavor to resound with our customer needs.
                      In this way, every time we gather the best-coordinated
                      products under each query.
                    </li>
                    <li>
                      We team up with renowned and dependable banks and
                      financial establishments to reliably guarantee a
                      hassle-free customer experience.
                    </li>
                    <li>
                      With our online presence, social media platforms and
                      Financial Tools, we enable our clients by disentangling
                      and de-jargonizing budgetary terms and calculations. You
                      can likewise do a simple comparison of financial
                      institutions foundations and items on our site.
                    </li>
                    <li>
                      Our Relationship Managers are very much prepared to
                      guarantee the best client experience by guiding clients
                      about the product includes, documentation, endorsement,
                      and payment measure.
                    </li>
                    <li>
                      Our frameworks work 24X7 to guarantee quickest endorsement
                      and disbursal of the applications.
                    </li>
                    <li>
                      We guarantee doorstep services, including document pickup
                      and card delivery.
                    </li>
                  </ul>
                </Typography>
                <Typography variant="body1" style={{ fontWeight: "500" }}>
                  We assist you with sealing the deal rapidly and mindfully,
                  precisely based on your necessities!
                </Typography>
                <Typography variant="body1">
                  The brand " MakeMyBachat " has online just as offline
                  presence. We connect with planned clients through tele-calling
                  (as a reaction to online/offline queries), field deals, field
                  sales, official online stages including our site and social
                  media web properties. We don't charge clients for our services
                  and broaden product assistance and provide it 100% free of
                  cost.
                </Typography>
              </Fade>
            </div>
          </Grid>

          <Grid item xs={12} className={classes.myContainer}>
            <Fade left>
              <Typography
                variant="h3"
                className={classes.heading}
                style={{ marginBottom: "10px" }}
              >
                Our Most Popular Products
              </Typography>
            </Fade>
            <Fade bottom>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.productsGrid}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={clsx(
                    classes.colouredContainer,
                    classes.myContainer
                  )}
                >
                  {/* <Card className={classes.cardRoot} variant="outlined">
                  <CardContent className={classes.cardContent}> */}
                  <Typography variant="h5" gutterBottom>
                    Personal Loans
                  </Typography>
                  <Typography variant="body1">
                    For a wedding, home improvement, travel, crisis, salaried as
                    well as independently employed people.
                  </Typography>
                  {/* </CardContent>
                </Card> */}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={clsx(
                    classes.colouredContainer,
                    classes.myContainer
                  )}
                >
                  {/* <Card className={classes.cardRoot} variant="outlined">
                  <CardContent className={classes.cardContent}> */}
                  <Typography variant="h5" gutterBottom>
                    Home Loans
                  </Typography>
                  <Typography variant="body1">
                    For purchase and/or constructing additional private plot or
                    property including the flat/apartment.
                  </Typography>
                  {/* </CardContent>
                </Card> */}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={clsx(
                    classes.colouredContainer,
                    classes.myContainer
                  )}
                >
                  {/* <Card className={classes.cardRoot} variant="outlined">
                  <CardContent className={classes.cardContent}> */}
                  <Typography variant="h5" gutterBottom>
                    Loan Against Property
                  </Typography>
                  <Typography variant="body1">
                    For subsidizing business, kid's education or other
                    individual reasons.
                  </Typography>
                  {/* </CardContent>
                </Card> */}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={clsx(
                    classes.colouredContainer,
                    classes.myContainer
                  )}
                >
                  {/* <Card className={classes.cardRoot} variant="outlined">
                  <CardContent className={classes.cardContent}> */}
                  <Typography variant="h5" gutterBottom>
                    Business Loans
                  </Typography>
                  <Typography variant="body1">
                    For startup, business expansion, injecting working capital
                    or stock, gear financing.
                  </Typography>
                  {/* </CardContent>
                </Card> */}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={clsx(
                    classes.colouredContainer,
                    classes.myContainer
                  )}
                >
                  {/* <Card className={classes.cardRoot} variant="outlined">
                  <CardContent className={classes.cardContent}> */}
                  <Typography variant="h5" gutterBottom>
                    Credit Cards
                  </Typography>
                  <Typography variant="body1">
                    For rewards, Shopping, Travel, Corporate and so forth
                  </Typography>
                  {/* </CardContent>
                </Card> */}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={clsx(
                    classes.colouredContainer,
                    classes.myContainer
                  )}
                >
                  {/* <Card className={classes.cardRoot} variant="outlined">
                  <CardContent className={classes.cardContent}> */}
                  <Typography variant="h5" gutterBottom>
                    Insurance
                  </Typography>
                  <Typography variant="body1">
                    For Health Cover and Life Cover
                  </Typography>
                  {/* </CardContent>
                </Card> */}
                </Grid>
              </Grid>
            </Fade>
          </Grid>

          <Grid item xs={12} className={classes.myContainer}>
            <Fade>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.myContainer}
              >
                <Grid item xs={12} sm={6} className={classes.left}>
                  <Typography variant="body1">
                    Pick MakeMyBachat to settle on an informed credit choice. We
                    are passionate about improving the borrowing excursion of
                    customers in India. Consolidating important input of our 40
                    Lakhs clients with consistent involvement with proffering
                    advances, protection, and credit cards for thirty years, we
                    have created dependable and cutting edge product conveyance
                    frameworks to guarantee incredible buyer experience.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <img
                    src="http://lorempixel.com/640/480/business"
                    alt="bsuiness-img"
                    className={classes.myImage}
                  />
                </Grid>
              </Grid>
            </Fade>
          </Grid>

          <Grid
            item
            xs={12}
            className={clsx(classes.left, classes.myContainer)}
          >
            <Typography variant="body1">
              Contact MakeMyBachat if you look for any or all of the
              accompanying advantages:
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Extensive options of Loans and Credit Cards accessible in the
                  nation.
                </li>
                <li>
                  Consistent customer support regardless of the ticket-size.{" "}
                </li>
                <li>Exact match bargains as per your profile. </li>
                <li>Real-time loan quote comparison conceivable. </li>
                <li>
                  Delicate credit checks to guarantee no effect on your score.{" "}
                </li>
                <li>
                  Free monetary guidance on the most proficient method to pick
                  reliable and solid deals on secured about and unsecured
                  advances, insurance covers and credit cards.{" "}
                </li>
                <li>
                  Individual attention for each query irrespective of client
                  income/business capital, location and credit record.{" "}
                </li>
                <li>
                  Transparent approach. No concealed charges or phony
                  guarantees.{" "}
                </li>
                <li>
                  100% data security. We don't share customer subtleties with
                  any outsider for the reasons other than client driven product
                  inquiries.
                </li>
              </ul>
            </Typography>
          </Grid>

          {/* <Grid item xs={12} sm={12} md={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.gridContainer}
            >
              <Grid item xs={12} sm={4}>
                <Card variant="outlined" className={classes.cardRoot}>
                  <CardContent style={{ textAlign: "-webkit-center" }}>
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
          </Grid> */}
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
