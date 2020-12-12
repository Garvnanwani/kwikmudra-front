import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import React from "react"
import useInput from "../../hooks/useInput"

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
  )
}

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

const PersonalLoan = () => {
  const fullName = useInput("")
  const dob = useInput("")
  const pan = useInput("")
  const pinCode = useInput("")
  const mobileNumber = useInput("")
  const email = useInput("")

  const [age, setAge] = React.useState("")
  const classes = useStyles()
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
          About Personal Loan
          Personal Loan is a short to medium term advance, which doesn't require any collateral /security for disbursal. They are for the most part dispensed in a couple of hours to a couple of days with negligible or no lengthy  paper work by any means. A key component of Personal Loan is its adaptable end-use. Along these lines, this loan can be utilized to meet an lot of requirements going from crisis clinical costs to arranged uses, for example, home redesign, wedding, and so on.
          Personal Loan Eligibility Factors

          Most banks and NBFCs (Non-Banking Financial Companies) offer individual credits to both salaried and self employed people. The qualification norms for an individual advance shift marginally relying upon the sort of candidate. Following are a portion of the key individual loan qualification factors that should be kept in mind*:
          Particulars	Salaried	Self-Employed
          Age	21 - 60 years	21 - 68 years
          Minimum Income	Rs. 15,000 per month	Rs. 5 lakh per year (gross)
          Employment stability	Total experience- Minimum 2 years
          Experience in the current organization- Minimum 1 year	Minimum 2 years in current business

          How Personal Loan Works
          Personal Loan are unsecured loan with adaptable end-use that ordinarily have a tenure of a year to 60 months. In the event that a shorter period is picked, individual EMI sums are higher, while a more extended period brings about lower individual EMIs. Coming up next are the key highlights of an individual advance:

          Personal Loan Features
              No Collateral/Security Required: You don’t need to provide any collateral such as house or car to avail a personal loan. The loan is approved only on the basis of your creditworthiness, which depends on your credit score, income, repayment history, employer reputation, etc.
              Flexible End Use: Unlike a car loan or home loan, personal loans can be used for multiple purposes, such as to meet expenses of a medical emergency, travel, house renovation, debt consolidation, etc.
              Flexible Tenure: Personal Loans come with flexible tenure usually ranging from 12 months to 60 months.
              Minimal Documentation: You can apply for a personal loan online and even offline with minimal documentation. Key documents that lenders generally need the applicant to provide include a proof of identity, a proof of address and a proof of income.
              Quick Disbursal: Personal loan disbursal can happen within a period as short as a few hours, once the application is approved. Turnaround times can also be as short as a few minutes, if you are able to avail a pre-approved loan offer.
              Flexible Loan Amount: The eligible personal loan amount is based on an individual’s repayment history, monthly income, age, profession, employer reputation and other such factors. Lenders offer personal loans of amount as low as Rs. 10,000 to as high as Rs. 40 lakh.


          Interest Rates
          Personal loan interest rates differ from one lending bank to another. NBFC’s have a slightly higher rate but quicker disbursal chances.,
          Documents Required
          Documents Required
              Identity Proof	PAN Card/ Voter’s ID/ Aadhaar Card/ Passport/ Driving License
              Address Proof	Bank Account Statement/ Aadhaar Card/ Lease/ Property purchase Agreement/ Utility Bill (not more than 3 months old)/ Passport/ Driving License
              Income Proof	For Salaried Individuals: Salary Slip/ Bank Account Statement/ Form 16
          For Self Employed: Previous Year ITR/ P&L Statement and Balance Sheet/ Bank Account Statement
              Business Proof	Certificate of Practice/ Partnership Deed/ GST Registration and Filing Documents/ MOA & AOA/ Shop Act License

          ** Just a sample list. Actual list will vary
          Documents Required :
          The confirmation procedure for an individual credit includes the accompanying key steps:

          steps 1: Once you have presented your online application on our webpage or App, your selected bank gets your online credit application.
          Step 2: Subsequently, the moneylender's delegate will call you to check application subtleties and schedule pickup of records required for your advance application.
          Step 3: Once the reports have been gathered and effectively checked , the individual advance application is approved.
          Step 5: Loan is dispensed once the candidate consents to the advance arrangement
          and signs the necessary paperwork

          The primary variables influencing the loan disbursal

          Salary of the candidate – higher pay level will in general increase the disbursal amount
          Current EMI payable – higher EMI payouts normally decline the disbursal amount
          Number of dependents – higher number of dependents for the most part reduce  the disbursal amount
          The list of components affecting disbursal limits  of loan  referenced above isn't comprehensive and there might be others that affect the disbursal choice made by moneylenders..

        </Typography >
      </div>
      <Copyright />
    </>
  )
}

export default PersonalLoan
