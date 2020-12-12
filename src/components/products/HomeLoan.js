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

const HomeLoan = () => {
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
      <Typography variant="pre"></Typography>
      <Copyright />
      <div style={{ margin: "20px 0px" }}>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ textAlign: "left" }}
        >
          What is Home Loan <br />
          <br />
          A home loan is an amount of money that an individual borrows from a
          bank or money lending agency at a specific rate of interest to be paid
          with the EMI monthly. The property is taken as a security by the cash
          loaning organization for the Home Loan.
          <br />
          The property can either be commercial or personal in nature.
          <br />
          When the borrower can't pay the dues, the moneylender will have
          legitimate rights to recover the outstanding loan amount by sale of
          the property in question.
          <br />
          Types of Home Loan:
          <br />
          Home Purchase Loan: This is the credit that one takes for buying a
          home.
          <br />
          Home Improvement Loan: This loan covers expenditure identified with
          fixes of your home or even redesign.
          <br />
          Home Construction Loan: This credit proves to be useful when you are
          building another house.
          <br />
          Land Purchase Loan: Someone wishing to purchase a plot of land for
          constructing his/her own house can avail this loan.
          <br />
          Home Extension Loan: Suppose you intend to include another room,
          garage, bathroom or kitchen to your home. This is the loan that you
          should to apply for and this also proves to be useful in the event
          that you are planning to have another floor.
          <br />
          Joint Home Loan: These are loans taken by two individuals or even
          more. For example, spouses can apply for joint home loans.
          <br />
          Home Loan Balance Transfer: You can utilize this mechanism to switch
          your outstanding loan amount to an alternate moneylender with better
          terms and conditions and lower interest.
          <br />
          Top Up Home Loan: This type of loan encourages you borrow some more
          money over the outstanding loan total. There are appealing rates of
          interest offered by us in case of top-up loans.
          <br />
          Home Loan - Features and Benefits <br />
          <br />
          • Pradhan Mantri Awas Yojana (PMAY)
          <br />
          Home Loans get more affordable than ever, with help from the Pradhan
          Mantri Awas Yojana (PMAY) for first-time homeowners. Reduce your Home
          Loan EMIs with PMAY, by getting a Home Loan at a financing cost of
          simply 6.93%*, and save up to Rs. 2.67 lakh on interest*. Get a Home
          Loan under PMAY regardless of whether your folks own a home, and in
          this manner get the opportunity to become a property holder yourself.
          <br />
          • Easy Balance Transfer Facility
          <br />
          Renegotiate your current home loan with us, with minimal documentation
          and faster processing. Apply for home loan transfer, and get a top-up
          loan at a nominal interest rate.
          <br />
          • Top-up Loan
          <br />
          Finance your other necessities with a high-value top-up loan well
          beyond your current housing loan. Get a top-up loan up to Rs. 50 lakhs
          with no additional documentation, at a nominal rate of interest.
          <br />
          • Property Dossier
          <br />
          A modified report to direct you through all the legal and financial
          aspects of being a property owner.
          <br />
          • Part-prepayment and Foreclosure Facility
          <br />
          No charges on part-prepayment or foreclosure to make the loan
          affordable.
          <br />
          • Flexible Tenor
          <br />
          Flexible tenors extending as long as 240 months, to accommodate your
          repayment limit.
          <br />
          • Minimal Documentation
          <br />
          Simple Home Loan eligibility criteria and minimal documentation, to
          assist you with getting your loan quicker.
          <br />
          • Online Account Management
          <br />
          Online management of your Home Loan utilizing our computerized
          customer portal, for your convenience.
          <br />
          • Customized Insurance Schemes
          <br />
          Customized insurance plans to shield your family from the burden of
          repaying the housing loan in case of unanticipated events.
          <br />
        </Typography>
      </div>
    </>
  );
};

export default HomeLoan;
