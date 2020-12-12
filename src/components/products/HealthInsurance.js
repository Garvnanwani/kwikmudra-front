import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
import useInput from "../../hooks/useInput";

const Copyright = () => {
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
};

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
}));

const HealthInsurance = () => {
  const fullName = useInput("");
  const dob = useInput("");
  const pan = useInput("");
  const pinCode = useInput("");
  const mobileNumber = useInput("");
  const email = useInput("");

  const [age, setAge] = React.useState("");
  const classes = useStyles();
  return (
    <>
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
      <Typography variant="pre"></Typography>
      <div style={{ margin: "20px 0px" }}>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ textAlign: "left" }}
        >
          <br />
          <br />
          What are health insurance plans? <br />
          <br />
          Health insurance plans reimburse insured clients for their medical
          costs, including treatments, surgeries, hospitalization and the like
          which emerge from injuries/sicknesses, or directly pay out a certain
          pre-determined sum to the client. A health insurance policy offers
          coverage for any future medical costs of the client. This is an
          agreement between the insurance company and the customer where the
          former consents to guarantee payment/remuneration for medical expenses
          in the event that the latter is injured/sick later on, leading to
          hospitalization. Much of the time, insurance agencies have tie-ups
          with a network of hospitals and clinics, guaranteeing cashless
          treatment for patients there.
          <br />
          <br />
          What is the requirement for health insurance?
          <br />
          Popular US lawmaker, Jan Schakowsky, said that 'Without medical
          insurance, getting ill or injured could mean going bankrupt, going
          without required care, or even dying unnecessarily.' Nothing could be
          truer!
          <br /> <br />
          Here are the reasons why you need health insurance:
          <br />
          <br />
          Health insurance pays for future illnesses/ treatments without
          draining your savings funds or contrarily affecting your family's
          financial future.
          <br />
          Clinical expenses are expanding quickly and for those with inadequate
          investment funds, managing clinical consideration turns into an issue
          during crises.
          <br />
          Cashless treatment conceivable with network hospitals while
          reimbursements are given by insurance agencies in different cases.
          <br />
          Health insurance plans offer inclusion for a few kinds of illnesses
          and medical procedures alongside different aspects of medical
          treatment.
          <br />
          Health insurance keeps you and your family worry free; you just need
          to pay a little premium for the same.
          <br />
          By and large, you likewise get inclusion for hospitalization costs,
          rescue vehicle costs, meetings, drugs, tests and post-hospitalization
          use.
        </Typography>
      </div>
      <Copyright />
    </>
  );
};

export default HealthInsurance;
