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

const TermInsurance = () => {
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
          <br />
          <br />
          What is Term Insurance?
          <br />
          <br />
          Term insurance plan or policy is a kind of life insurance where the insurer gives coverage for a specific 'term' in return for a particular premium paid over a stretch of time. Whenever insured dies during the term period indicated in the policy, a death benefit is paid to the group of the insured.
          <br />
          <br />
          Why do I need Term Insurance?
          <br />
          To take care of my family
          <br />
          If you are an earning individual of the family, then you must have term insurance. When you decide to purchase term insurance, you will get genuine feelings of serenity in realizing that your income will be replaced if that you are no longer there. In the event of your sad end, the advantages from the term plan can help your friends and family pay for their standard costs and furthermore accomplish their long-term objectives.
          <br />
          <br />
          To take care of my credits
          <br />
          If that you have any huge liabilities like home/car/personal loans then you must purchase a term plan. At the point when you purchase, if it's not too much trouble guarantee that the life cover amount you select is multiple times your yearly pay PLUS the total value of considerable liabilities you have.
          <br />
          To make sure about my wellbeing
          <br />
          Our term plan provides enhanced protection against many perilous sicknesses including Cancer, Heart Attack, Kidney failure, Stroke, Alzheimer's Disease, Parkinson's Disease and
          <br />
          <br />
          Encephalitis.
          <br />
          Benefits of a term insurance plan
          <br />
          Affordability
          <br />
          Term insurance plans are a blend of affordability with simplicity. You find something useful to do a life cover of 50L at premiums as low as 17/day*
          <br />
          <br />
          Tax breaks
          <br />
          You can profit tax breaks under segment 80C of the Income Tax Act, 1961, for the premium paid and entirety guaranteed of your term protection plan.
          <br />
          Simple to Buy
          <br />
          Rather than stepping out of your home, you are now able to buy term insurance plans online with a couple of clicks, according to your convenience.
          <br />
          Claim Payouts can be Staggered
          <br />
          Staggered monthly payouts give an alternative to claim a lump-sum amount and the rest of the claim as Monthly Income forestalling any misuse of the total cover.
          <br />
          Flexibility in Premium Payments
          <br />
          You have the alternative to pay premiums on a month to month, semi-annual, or yearly basis. Additionally, there are likewise term insurance plans that offer single pay premium alternative.
          <br />
          Return of Sum Assured
          <br />
          Term Insurance Plan's Dual Protect include restores your Sum assured after retirement.
          <br />
          Extra Riders with your Plan
          <br />
          You can include riders like accidental death rider, disability rider, critical illness rider, income benefit rider, waiver of premium rider, and so on for another shielding layer.
          <br />
          Insurance Against Liabilities
          <br />
          During our lifetime, we purchase a vehicle, house, and so on. On the off chance that an mishap occurs to you - accident, disability, or demise - the term protection plan replaces your monetary role in the family.
          <br />
          Features of a Term Insurance Policy
          <br />
          Save Tax U/S 80C and 80D
          <br />
          The premium you pay for your term protection plan can save tax for you. Critical illness premium spares tax for you u/s 80D, while life insurance premium is checked u/s 80C of Income Tax, subject to conditions
          <br />
          <br />
          Long Policy Term
          <br />
          You can pick a more extended policy term to remain secured. You can remain covered for to 50 years with a term life cover.
          <br />
          <br />
          Low Entry Age
          Most term Plans have a base entry age of 18 years; that is, you can purchase term insurance when you hit adult age.
          <br />
          Death Benefit as Regular Income
          <br />
          Present day term insurance plans permit you to give your dependents a regular income alongside the lump-sum benefit in case of your unfortunate death.
          <br />
          Premiums Returned on Survival
          <br />
          You now are able to get all your money back if you survive the policy term. Term insurance plans with the arrival of premium benefit offer to return all the paid premiums on the policy as survival benefit.

          <br />
          Add Disability Benefit to Your Term Plan
          <br />
          Any sort of disability because of accident or illness can affect your income earning limit. You can include disability benefit with your term plan at affordable prices. The disability spread is available on payment of extra premium.

          <br />
          Cover Against Life Threatening Diseases
          <br />
          Cancer, heart attack, renal failure are some curable ailments which can be perilous. Try not to let money concern you while in transit to the cure from these diseases. Critical illness cover is accessible on payment of extra premium

          <br />
          High Maturity Age
          <br />
          Of all life insurance plans, term insurance offers the life cover for the highest noteworthy age bracket. You can proceed with the term-insurance cover up to the age of 85.

          <br />
          Term insurance riders-Must-have Add-ons
          <br />

          <br />
          What are term insurance riders?
          <br />
          A rider is an extra or a paid component to your base term plan. Each rider intends to overhaul the extent of your basic policy coverage. Be that as it may, what advantages do riders bring? Is it accurate to say that are worth the extra money? Do they really give complementary coverage? If you are gazing at a list of riders and pondering whether to consider them, how about we take a gander at some essential add-on benefits that can improve your term plan and help you choose.
          <br />
          1. Accidental death rider
          <br />
          Indian roads saw more than 1.46 lakh mishaps during the year 2017. This is a number that can't be ignored.
          Most ideal precautionary measures are possible but there isn't a lot of you can do if the other driver commits a mistake. That is the reason numerous individuals include an accidental death benefit rider in their term policy.
          This implies that if an insured individual passes away because of an accident, the accidental death rider pays an aggregate well beyond the basic total guaranteed to the nominee.
          <br />
          2. Income benefit rider
          <br />
          As the name suggests, an income benefit rider guarantees your family gets a consistent flow of income even in your absence.
          The income received supplements the sum assured guaranteed to your beneficiaries/nominees. For instance, by opting for the income benefit rider, your family would get an extra 10% of the sum assured for a specific number of years.
          The fundamental motivation behind the rider is to generate income for your family. The ideal time for this rider can extend somewhere in the range of 5-10 years.
          <br />
          3. Waiver of premium rider
          <br />
          When you become a term insurance policy holder, you need to guarantee all of your payments are made on time. In any case, imagine a scenario in which you can't proceed with regular payments because of a critical illness. Generally, the term insurance company drops the term policy.
          For somebody who has made the premium payments normally on schedule, this can come as a genuine blow. Be that as it may, there is an approach to avoid this situation. On the off chance that the policyholder is diagnosed with any of the 36 critical illnesses, a 'waiver of premium rider' guarantees all your future premiums get waived off.
          It is a low-cost choice to keep your policy active regardless of whether you can't make your payments.
          <br />
          4. Comprehensive Critical Illness Care Rider
          <br />
          The Rider gives single amount benefit and waiver of premium benefit in case of first event of any of the covered critical diseases conditions during the lifetime of the insured and gave the incident happening during the coverage time frame.
          <br />
          Why should you purchase this term insurance plan?
          <br />
          o	Monetary security of your family if there should arise an occurrence of your absence.
          <br />
          o	Providing standard month to month pay to your family post your earning years or if there should be an occurrence of your deplorable passing;
          <br />
          o	Possibility of your money related liabilities turning into a weight to your family in case of eventualities.
          <br />
          o	Dangers of Accident and Terminal Illness, and their subsequent budgetary impact.
          <br />
        </Typography>
      </div>
      <Copyright />
    </>
  )
}

export default TermInsurance
