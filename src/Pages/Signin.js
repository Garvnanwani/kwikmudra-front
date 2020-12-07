import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "../components/Navbar";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import useInput from "../hooks/useInput";
import { client } from "../utils";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const { setUser } = useContext(UserContext);
  const username = useInput("");
  const password = useInput("");
  const history = useHistory();

  const classes = useStyles();
  const [loginType, setLoginType] = useState("agent");

  const handleChange = (event) => {
    setLoginType(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username.value || !password.value) {
      return toast.error("Please fill in both the fields");
    }

    const body = { username: username.value, password: password.value, role: loginType };

    try {
      const { token } = await client("/auth/login", { body });
      localStorage.setItem("token", token);
    } catch (err) {
      return toast.error(err.message);
    }

    const user = await client("/auth/userprofile");
    localStorage.setItem("user", JSON.stringify(user.data));
    setUser(user.data);
    toast.success("Login successful");

    username.setValue("");
    password.setValue("");
    history.push('/')
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
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={username.value}
              onChange={username.onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password.value}
              onChange={password.onChange}
            />
            <FormControl
              variant="outlined"
              margin="normal"
              fullWidth
              className={classes.formControl}
            >
              <InputLabel id="employment-type">I am </InputLabel>
              <Select
                labelId="login-type"
                id="login-type"
                value={loginType}
                onChange={handleChange}
                label="I am"
              >
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
                <MenuItem value={"employee"}>Employee</MenuItem>
                <MenuItem value={"agent"}>Partner</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In As
              {loginType === "agent" ? (
                <span>&nbsp;Partner</span>
              ) : (
                <span>&nbsp;Employee</span>
              )}
            </Button>
            <Grid container justify="center" alignItems="center">
              {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
              {loginType === "agent" ? (
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              ) : (
                ""
              )}
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
