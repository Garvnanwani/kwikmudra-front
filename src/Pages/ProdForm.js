import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import React from "react"
import { useParams } from "react-router-dom"
import products from "../components/products"
import BusinessLoan from "../components/products/BusinessLoan"
import GoldLoan from "../components/products/GoldLoan"
import HealthInsurance from "../components/products/HealthInsurance"
import HomeLoan from "../components/products/HomeLoan"
import HomeLoanBalanceTransfer from "../components/products/HomeLoanBalanceTransfer"
import LifeInsurance from "../components/products/LifeInsurance"
import LoanAgainstProperty from "../components/products/LoanAgainstProperty"
import PersonalLoan from "../components/products/PersonalLoan"
import TermInsurance from "../components/products/TermInsurance"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignInSide() {
  const { productName } = useParams()
  const classes = useStyles()
  const product_array = products.filter(
    (product) => product.name === productName
  )
  const product = product_array[0]

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={4} className={classes.image} />
      <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" gutterBottom>
            {product.title}
          </Typography>
          {product.name === "lifeinsurance" ? (
            <div>
              <LifeInsurance />
            </div>
          ) : (
            ""
          )}

          {product.name === "homeloan" ? (
            <div>
              <HomeLoan />
            </div>
          ) : (
            ""
          )}
          {product.name === "personalloan" ? (
            <div>
              <PersonalLoan />
            </div>
          ) : (
            ""
          )}
          {product.name === "businessloan" ? (
            <div>
              <BusinessLoan />
            </div>
          ) : (
            ""
          )}
          {product.name === "homeloanbalancetransfer" ? (
            <div>
              <HomeLoanBalanceTransfer />
            </div>
          ) : (
            ""
          )}
          {product.name === "terminsurance" ? (
            <div>
              <TermInsurance />
            </div>
          ) : (
            ""
          )}
          {product.name === "loanagainstproperty" ? (
            <div>
              <LoanAgainstProperty />
            </div>
          ) : (
            ""
          )}
          {product.name === "goldloan" ? (
            <div>
              <GoldLoan />
            </div>
          ) : (
            ""
          )}
          {product.name === "healthinsurance" ? (
            <div>
              <HealthInsurance />
            </div>
          ) : (
            ""
          )}
        </div>
      </Grid>
    </Grid>
  )
}
