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

const BusinessLoan = () => {
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
      <Copyright />
      <div style={{ margin: "20px 0px" }}>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ textAlign: "left" }}
        >
          To begin any new business, or to revamp an existing one, or for
          extension purposes, business loan is the essential money related item
          benefited by people and undertakings. Business loan is offered to meet
          the working capital necessities, for purchase hardware or apparatus,
          improve business income and much more. With credit sums beginning
          from, as low as Rs. 10,000 and surpassing up to Rs. 50 crore (made
          sure about credit), organizations and ventures have numerous financing
          choices with adaptable and taylormade reimbursement alternatives.
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ textAlign: "left" }}
        >
          <br />
          Top Features of Business Loan: <br />
          Interest Rates: 14.99% onwards <br />
          Nature of Loan: Short-and Long-term, Working Capital, Secured and
          Unsecured Loans <br />
          Minimum Loan Amount: Rs. 10,000Maximum Loan Amount: Up to Rs. 50
          crore, can surpass according to business requirements <br />
          Repayment Period: Minimum a year and Maximum up to 5 years <br />
          Collateral: Not required for Unsecured Business Loans <br />
          Check and Compare from accessible business loan choices at competitive
          financing costs.
          <br />
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ textAlign: "left" }}
        >
          <br />
          <br />
          Qualification rules for business loans:
          <br />
          Age Criteria: Minimum 18 years at the time of application and 65 years
          at maturity <br />
          Indian Citizen with no criminal background <br />
          Applicant with great FICO assessment and no previous advance defaults,{" "}
          <br />
          if any Fees and Charges, Income, Business Turnover, Operational
          History, Business Vintage, Credit score and Profitability Criteria
          will be characterized by the individual financer. <br />
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ textAlign: "left" }}
        >
          <br />
          <br />
          Institutions Below referenced can avail business loans:
          <br />
          Individuals Startup
          <br />
          Enterprises
          <br />
          MSMEs
          <br />
          Artisans, Retailers, Manufacturers and Traders
          <br />
          Private and Public Limited Companies
          <br />
          Closely Held Limited Companies
          <br />
          Sole Proprietorship Firms, Partnerships, Limited Liability
          Partnerships and Large Enterprises engaged only in Manufacturing,
          Trading or Services sectors
          <br />
          NGOs, Co-usable Societies and Trusts
          <br />
          Self-employed people/Professionals - CAs, Doctors, Architects, Company
          Secretaries, Allopathic Doctors, Designers, and so forth.
          <br />
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ textAlign: "left" }}
        >
          <br />
          <br />
          Documents Required :
          <br />
          Checklist of documents required for business loan:
          <br />
          Recent Passport-sized Photographs
          <br />
          Identity Proof - PAN card, Aadhaar card, Valid passport, Voter's ID
          card, Driving License
          <br />
          Address Proof - Voter's ID card, Aadhar card, Passport, Driving
          license, Utility bill, Water Bill, Electricity Bill
          <br />
          Business Address Proof
          <br />
          Proof of business existence for last 3 years
          <br />
          Last 6 months' bank statement
          <br />
          Last 3 years’ Income Tax Return (ITR)
          <br />
          Balance sheet and Profit & Loss account statement
          <br />
          Financial documents audited/attested/signed by Certified CA
          <br />
          Copy of Trade License
          <br />
          Sales Tax Certificate
          <br />
          Certified Copy of Partnership Deed
          <br />
          GST Registration Certificate
          <br />
          Proof of ownership of the possessions used for business activities
        </Typography>
      </div>
    </>
  );
};

export default BusinessLoan;
