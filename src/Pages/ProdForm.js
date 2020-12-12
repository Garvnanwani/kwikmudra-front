import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import React from "react"
import { useParams } from "react-router-dom"
import products from "../components/products"
import LifeInsurance from "../components/products/LifeInsurance"

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

const CreditCards = () => {
  const classes = useStyles()
  return (
    <form className={classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="Phone Number"
        label="Phone Number"
        type="number"
        id="phone-number"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Submit
      </Button>
    </form>
  )
}

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
          {product.name === "freecreditscore" ? (
            <div>
              <LifeInsurance />
            </div>
          ) : (
            ""
          )}
          {product.name === "creditcards" ? (
            <div>
              <CreditCards />
            </div>
          ) : (
            ""
          )}
        </div>
      </Grid>
    </Grid>
  )
}
