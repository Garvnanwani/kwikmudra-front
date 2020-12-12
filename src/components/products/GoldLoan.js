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

const GoldLoan = () => {
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
      <div style={{ margin: "20px 0px" }}>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ textAlign: "left" }}
        >
          <br />
          <br />
          Life is loaded with opportunities. Try not to permit the opportunities
          to pass on account of budgetary limitation. Get instant gold advance
          by bringing your gold ornaments at any of our branches or online. Your
          gold remains safe while you can feel free to make the most of each
          opportunity. Our Gold Loan is a definitive solution for your monetary
          needs. You can avail Gold loan at whatever point you need funds for
          education of children, business expansion, up front installment for
          acquisition of property or car, health related emergency, holiday with
          family, agrarian requirements, and so forth.
          <br />
          Why go for Personal or Business advances when you have the support of
          gold with you! Get a credit against your gold, in minutes!
          <br />
          Draw instant Cash by vowing your Gold Ornaments and Jewelry.
          <br />
          Higher advance amounts, contingent upon purity, net weight of the
          gold.
          <br />
          Choose from a range of plans; there's one just suitable for your
          necessities
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ textAlign: "left" }}
        >
          <br />
          Highlights of Goal Loan <br />
          <br />
          Least Requirements: A certified copy of Passport, Driving License,
          Aadhaar number, Voters ID, Job card gave by NREGA duly signed by an
          Officer of the state government and letter issued by the NPR
          containing subtleties of name and address. One recent photograph, The
          Permanent Account Number or Form No. 60 as characterized in Income-tax
          Rules,1962.
          <br />
          Pay interest just for the specific time of advance, and to the exact
          number of days.
          <br />
          Various plans for various necessities, to suit all income levels.
          <br />
          Instant Gold Loan: Instant funds up to INR 1 crore against gold
          Jewelry.
          <br />
          Appealing Interest rates: Straightforward Interest beginning at 10%
          per annum
          <br />
          Brisk and Easy Process: Credit Disbursal in under 45 minutes
          <br />
          Bother Free Documentation: Just KYC required, No extra income
          verification document.
          <br />
          No EMI: Interest and principal reimbursement towards the finish of
          loan tenure (No burden of penalties on postponed/missed EMIs)
          <br />
          Gold OD: Gold Overdraft limit up to INR 1 crore set up around the same
          day with no monetary records
          <br />
          Short Tenures: Loans accessible for short tenures (3, 6 and 12 Months)
          <br />
          Various modes for Quick Disbursal: Cash (up to 3 lacs of loan sum),
          Fund Transfer, DD, NEFT, RTGS
          <br />
          Bank Savings/Current account not required for availing Gold advance
          <br />
          Zero Gold Valuation/Appraisal Charges
          <br />
          Digital reestablishment: Digital reestablishment facility accessible
          with improved sum (if applicable)
          <br />
          Part Payment Facility: Part payment facility accessible without any
          charges to lessen overall interest cost. *Part release of Jewelry not
          permitted.
          <br />
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ textAlign: "left" }}
        >
          Why Us? <br />
          Over 3.5 million satisfied clients
          <br />
          PAN India Branch arrange
          <br />
          Security and protection of gold pledged
          <br />
          Straightforward procedures
          <br />
          Dedicated support group
          <br />
        </Typography>
      </div>
      <Copyright />
    </>
  );
};

export default GoldLoan;
