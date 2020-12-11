import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

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
    paddingLeft: "30px",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  productsGrid: {
    padding: theme.spacing(5),
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
    marginBottom: "20px",
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
    textAlign: "-webkit-center",
    alignSelf: "stretch",
  },
  heading: {
    color: theme.palette.primary.main,
  },
}))

export default function AboutPage() {
  const classes = useStyles()
  return (
    <div>
      <Navbar />
      <div className={classes.section}>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={5}
          style={{ paddingBottom: "40px", textAlign: "-webkit-center" }}
        >
          <Grid item xs={12}>
            <div className={classes.textSection}>
              <Typography
                variant="h3"
                component="h3"
                gutterBottom
                className={classes.heading}
              >
                Our Vision
              </Typography>
              <Typography variant="body1">
                Our Vision: To instruct, encourage and enable customers with the
                greatest decision of the best and the most moderate financial
                items in India.
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.textSection}>
              <Typography
                variant="h3"
                component="h3"
                gutterBottom
                className={classes.heading}
              >
                Who are we?
              </Typography>
              <Typography variant="body1">
                Kwikmudra is India's first and own money related marketplace
                encouraging quick and simple Loans, Credit Cards and Insurance
                Covers to customers. <br />
                We are a group of more than 40 Lakh satisfied clients, 100+ RBI
                perceived banks, NBFCs and budgetary establishments, and 2500+
                relationship chiefs. <br />
                With MakeMyBachat, finding moderate Loans, Credit Cards, and
                Insurance spread is simple!
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.textSection}>
              <Typography
                variant="h3"
                component="h3"
                gutterBottom
                className={classes.heading}
              >
                What we do?
              </Typography>
              <Typography variant="body1">
                We overcome any issues between the loan specialists and the
                borrowers as a real-time Online Marketplace. We empower you to
                look out for the best accessible options on Loans and Credit
                Cards for your profile with only a couple of clicks.
              </Typography>
              <Typography
                variant="body2"
                style={{
                  margin: "2rem 0",
                }}
              >
                <ul>
                  <li>
                    We offer free customized help for Loans, Credit Cards and
                    Insurance items on the web.{" "}
                  </li>
                  <li>
                    We generally endeavor to resound with our customer needs. In
                    this way, every time we gather the best-coordinated products
                    under each query.
                  </li>
                  <li>
                    We team up with renowned and dependable banks and financial
                    establishments to reliably guarantee a hassle-free customer
                    experience.
                  </li>
                  <li>
                    With our online presence, social media platforms and
                    Financial Tools, we enable our clients by disentangling and
                    de-jargonizing budgetary terms and calculations. You can
                    likewise do a simple comparison of financial institutions
                    foundations and items on our site.
                  </li>
                  <li>
                    Our Relationship Managers are very much prepared to
                    guarantee the best client experience by guiding clients
                    about the product includes, documentation, endorsement, and
                    payment measure.
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
                The brand " MakeMyBachat " has online just as offline presence.
                We connect with planned clients through tele-calling (as a
                reaction to online/offline queries), field deals, field sales,
                official online stages including our site and social media web
                properties. We don't charge clients for our services and broaden
                product assistance and provide it 100% free of cost.
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h3" className={classes.heading}>
              {" "}
              Our Most Popular Products{" "}
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.productsGrid}
            >
              <Grid item xs={12} sm={6}>
                <Typography variant="h4"> Personal Loans </Typography>
                <Typography variant="body1">
                  For a wedding, home improvement, travel, crisis, salaried as
                  well as independently employed people. (The rundown is
                  demonstrative. Personal advances are generally useful credits;
                  you can obtain for every legitimate explanation.)
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4"> Home Loans </Typography>
                <Typography variant="body1">
                  For purchase and/or constructing additional private plot or
                  property including the flat/apartment.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4"> Loan Against Property </Typography>
                <Typography variant="body1">
                  For subsidizing business, kid's education or other individual
                  reasons.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4">Business Loans </Typography>
                <Typography variant="body1">
                  For startup, business expansion, injecting working capital or
                  stock, gear financing.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4">Credit Cards</Typography>
                <Typography variant="body1">
                  For rewards, Shopping, Travel, Corporate and so forth
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4">Insurance</Typography>
                <Typography variant="body1">
                  For Health Cover and Life Cover
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{
                background: "#DF6B57",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="body1"
                  style={{
                    marginRight: "1.5rem",
                  }}
                >
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
                  style={{
                    marginRight: "2.5rem",
                    border: "2px solid black",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ textAlign: "left" }}>
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
  )
}
