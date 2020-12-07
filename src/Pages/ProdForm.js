import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import React from "react"
import { useParams } from "react-router-dom"
import products from "../components/products"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

export default function ProdForm() {
  const { productName } = useParams()
  const classes = useStyles()
  const product = products.filter((product) => product.name === productName)
  const [age, setAge] = React.useState("")

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {product.title}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Desired Loan Amount"
            label="Desired Loan Amount"
            type="number"
            id="loan-amount"
          />

          <FormControl
            variant="outlined"
            margin="normal"
            fullWidth
            className={classes.formControl}
          >
            <InputLabel id="employment-type">Employment Type</InputLabel>
            <Select
              labelId="employment-type"
              id="employment-type"
              value={age}
              onChange={handleChange}
              label="Employment Type"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Salaried</MenuItem>
              <MenuItem value={20}>Self Employed - Business Owner</MenuItem>
              <MenuItem value={30}>Self Employed - Professional</MenuItem>
            </Select>
          </FormControl>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Net Monthly Income"
            label="Net Monthly Income"
            type="number"
            id="monthly-income"
          />

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

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="City of Residence"
            label="City of Residence"
            type="text"
            id="curr-city"
          />
          <FormControl
            variant="outlined"
            margin="normal"
            fullWidth
            className={classes.formControl}
          >
            <InputLabel id="employment-type">Salary Received In</InputLabel>
            <Select
              labelId="salary-received"
              id="salary-received"
              value={age}
              onChange={handleChange}
              label="Salary Reveived In"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Salaried</MenuItem>
              <MenuItem value={20}>Self Employed - Business Owner</MenuItem>
              <MenuItem value={30}>Self Employed - Professional</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Full Name"
            label="Full Name"
            type="text"
            id="full-name"
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
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
