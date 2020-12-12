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

const HomeLoanBalanceTransfer = () => {
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
          Home Loan Balance Transfer
          Try not to pass up on an opportunity to bring down your loan reimbursements when you have more better choices to look over. Move your Home Loan outstanding balances to us, pay lower monthly scheduled payments and enjoy the savings for different things in life that truly matter to you and your family.
          Transfer your outstanding Home Loan availed from another Bank/Financial Institution to us and get an extra Top Up Loan.
          •	Appealing interest rates that make your Home Loan moderate and easier on your pocket
          •	Customized reimbursement alternatives to suit your requirements
          •	No shrouded charges
          •	Coordinated branch network for profiting and adjusting the loan anyplace in India
          •	Special arrangement for Home Loans for those employed in the Indian Army.

          Who can Apply? ‘’

          Primary Applicant
          •	AGE: 21-65 years
          •	Salaried/Self Employed: NATIONALITY
          •	Inhabitant Indian: Sex
          •	All genders
          Co-applicant(s)
          •	Including Co-Applicant helps in expanding the loan total.
          •	Including Women Co-Owner aides in getting better interest rates.
          •	All co-applicants need not be co-proprietors. By and large co-applicants are family members.


          What are the advantages of moving home advance?
          •	Decrease in interest rate from high rate to as low as 6.95% per annum
          •	Decrease in month to month EMI by up to 5% relying on the rate contrast, balance tenure and EMI
          •	Alternative to avail top up advance at same rate as home loan rate (6.95% to 8.8%) subject to eligibility conditions and loan to value proportion
          •	Lower interest rates and other discounts like nil processing charge offered by another lender
          •	Alternative to opt for smart saver home credit facility or max gain facility to spare interest
          •	Balance transfer alternatives are now available at different banks like SBI, Bank of Baroda, HDFC, ICICI and others


          Key Features of Home Loan Balance Transfer

          •	Move the outstanding balance of your existing home advance to another bank or from one moneylender to the next.

          •	There is a charge normally equivalent to 1% of the loan transferred that is payable to the new moneylender for home loan by the borrower.

          •	Most of the times, the home loan balance transfer application is dealt with like another home loan application.

          •	The balance transfer on a current home advance must be availed after a pre-decided timespan as referenced on the original loan agreement.

          •	At the point when the transfer is finished, the borrower owes the moved principal advance sum in addition to relevant charges to the new lender rather than the first one.

          Documents Required for Home Loan Balance Transfer

          Your home loan balance transfer is dealt with like a new home advance application by the bank you are moving the loan to. Along these lines, while applying for your home loan to transfer to another bank, all the documents provided during the initial home advance application should be resubmitted. These documents are then revalidated and vetted by the bank or NBFC giving the loan transfer facility. Documents are the most significant component while taking up a loan since they best assist the bank to identify the loan borrower to ensure their advance borrowing and advance reimbursement capacities. The essential key documents for home loan transfers are the following:

          •	Passport-size photos

          •	Totally filled application form for transfer issued by the financial organization.

          •	Latest three months' Salary Slips demonstrating break up of Gross salary that is the Basic Pay, House lease and Net Salary after derivations, if any.

          •	A half year's bank statement, reflecting salary credits updated within 15 days before the advance application.

          •	Identity Proof (Any One): Pan Card, Passport, Driving License or Voter's ID card or employee identity card (as identity proof and signature proof in case of of government workers).

          •	Proof of address

          •	Proof of Age (Any One): 10th or 12th Marks Cards, PAN Card or Voters ID Card.

          •	On the off chance that you are an independently employed personnel or businessman, then rather than Points (3.) and (4.), you need to provide documents demonstrating the existence of your business (for businesspersons) and scholastic capabilities (for experts) ; and budget reports for both.

          •	Bank articulations from wherein the home loan EMIs were deducted adding up last 12 months of the account.

          •	The Loan statement copy and complete set of documents relating to the property that is right now in possession of the current home credit lender.


          How can I avail the best home loan transfer offer?

          •	Check loan fee history of the new moneylender: You should check that the lower interest rate being publicized by the new loan lender is genuine and not a shot term trick. If it's not too much trouble approach your loan advisor for the benchmark track record of the new bank.

          •	Satisfy yourself about service quality of the new loan specialist: Check that the service quality offered by the new bank you are picking is up to your desires. Lower rate ought not to come at the expense of substandard services.

          •	Check the benchmark rate: There are two regularly utilized benchmark rates for home advances – MCLR rate in case of banks and prime loaning rate (PLR) in case of housing finance organizations. MCLR benchmarked loans are known to be more straightforward and consequently ideal over PLR benchmarked advances.

          •	Is the spread variable or fixed: Interest rate on floating rate loans comprises of two sections – benchmark rate and spread above it. While the benchmark rate is expected to change after some time, the spread is supposed to stay consistent except in case of a default. Be that as it may, a few banks offer floating rate loan with both the benchmark and the spread being variable. In case of numerous such credits, borrowers see their loan interest rates rise sharply after a couple of months. Along these lines, maintain a strategic distance from loans with variable spreads and rather settle on floating rate loans that vary interest rate only with change in the benchmark rate.

          •	Estimate transaction cost: Check the cost that you will acquire for affecting the change. These incorporate processing fees, stamp duty (in certain states like Maharashtra) and documentation charges.

          •	Issue notice to existing bank: A few banks demand a prior notice before you can prepay your home loan. Check your loan agreement cautiously and ensure that due notice is given to or waived by your current bank.
       </Typography >
      </div >
      <Copyright />
    </>
  )
}

export default HomeLoanBalanceTransfer
