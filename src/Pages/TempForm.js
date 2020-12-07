import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import products from "../components/products";
import useInput from "../hooks/useInput";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Kwik Mudra
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    // backgroundColor: theme.palette.primary.main,
    backgroundRepeat: "no-repeat",
    // backgroundColor:
    //   theme.palette.type === "light"
    //     ? theme.palette.grey[50]
    //     : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
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
}));

const CreditScore = () => {
  const classes = useStyles();
  return (
    <form className={classes.form} noValidate>
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
        name="PAN"
        label="PAN"
        type="number"
        id="pan"
      />
      <FormControlLabel
        control={<Checkbox value="allowExtraEmails" color="primary" />}
        label="I want to receive inspiration, marketing promotions and updates via email."
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
  );
};

const CreditCards = () => {
  const classes = useStyles();
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
  );
};

export default function SignInSide() {
  const { productName } = useParams();
  const classes = useStyles();
  const product_array = products.filter(
    (product) => product.name === productName
  );
  const product = product_array[0];
  const fullName = useInput("");
  const dob = useInput("");
  const pan = useInput("");
  const pinCode = useInput("");
  const mobileNumber = useInput("");
  const email = useInput("");

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={4} className={classes.image} />
      <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" gutterBottom>
            {product.title}
          </Typography>
          {product.name == "freecreditscore" ? (
            <div>
              <CreditScore />
            </div>
          ) : (
            ""
          )}
          {product.name == "creditcards" ? (
            <div>
              <CreditCards />
            </div>
          ) : (
            ""
          )}
          {/* <form className={classes.form} noValidate>
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
          </form> */}
        </div>
      </Grid>
    </Grid>
  );
}
