import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";
import useInput from "../hooks/useInput";
import { client } from "../utils";

// import {Link} from "react-router-dom"

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const EmployeeSignUp = () => {
  const { setUser } = useContext(UserContext);
  const fullName = useInput("");
  const username = useInput("");
  const email = useInput("");
  const password = useInput("");
  const history = useHistory();
  const classes = useStyles();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!fullName.value || !email.value || !password.value || !username.value) {
      return toast.error("Please fill in all the fields");
    }

    const re = /^[a-z0-9]+$/i;
    if (re.exec(username.value) === null) {
      return toast.error(
        "The username you entered is not acceptable, try again"
      );
    }

    const body = {
      email: email.value,
      password: password.value,
      username: username.value,
      fullName: fullName.value,
    };

    try {
      const { token } = await client("/auth/signup", { body });
      localStorage.setItem("token", token);
      console.log({ token });
    } catch (err) {
      return toast.error(err.message);
    }
    const user = await client("/auth/userprofile");
    setUser(user.data);
    localStorage.setItem("user", JSON.stringify(user.data));

    username.setValue("");
    password.setValue("");
    email.setValue("");
    fullName.setValue("");
    history.push("/");
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        height: "100vh",
      }}
    >
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSignup}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="fullName"
                  variant="outlined"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  value={fullName.value}
                  onChange={fullName.onChange}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={lastName.value}
                  onChange={lastName.onChange}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email.value}
                  onChange={email.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password.value}
                  onChange={password.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="user-name"
                  label="Username"
                  type="text"
                  id="c"
                  value={username.value}
                  onChange={username.onChange}
                />
              </Grid>
              {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default EmployeeSignUp;
