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

const LifeInsurance = () => {
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
          What Is Life Insurance?
          <br />
          Life Insurance is an agreement between an insurer and a policyholder
          in which the insurer ensures payment of a death benefit to named
          beneficiaries when the insured dies. The insurance agency guarantees a
          demise advantage in return for premiums paid by the policyholder.
          <br />
          <br />
          KEY TAKEAWAYS
          <br />
          Life insurance is a legitimately binding agreement.
          <br />
          For the agreement to be enforceable, the life insurance application
          should precisely reveal the insured's past and current health
          conditions and high-risk activities.
          <br />
          For a life insurance policy to remain in power, the policyholder must
          pay a solitary premium in advance or pay regular premiums after some
          time.
          <br />
          When the insured dies, the policy's named recipients will get the
          policy's presumptive worth, or death benefit.
          <br />
          Term life insurance policies lapse after a specific number of years.
          Perpetual life insurance policies stay dynamic until the insured dies,
          quits paying premiums, or gives up the poliy.
          <br />
          A life insurance policy is in the same class as the financial strength
          of the organization that issues it. State assurance assets may pay
          claims if the issuer can't.
          <br />
          <br />
          Who Should Buy Life Insurance?
          <br />
          Life insurance provides financial support to enduring wards or
          different recipients after the passing of an insured. Here are a few
          instances of individuals who may require extra security: Guardians
          with minor kids – If a parent dies, the loss of their salary or
          caregiving skills could create a money related difficulty. Life
          Insurance can ensure the children will have the money related assets
          they need until they can bolster themselves. Guardians with
          special-needs adult kids – For kids who require lifelong care and will
          never be self-sufficient, life insurance can ensure their necessities
          will be met after their folks die. The death benefit can be utilized
          to subsidize a special needs trust that a guardian will manage for the
          grown-up kid's advantage. Adults who own property together – Married
          or not, if the demise of one adult would imply that the other could no
          longer bear the cost of loan installments, upkeep, and taxes on the
          property, life insurance might be a smart thought. An example would be
          an engaged couple who took out a joint mortgage to purchase their
          first house. Elderly parents who want to leave money to adult kids –
          Many adult children sacrifice by taking time off work to think about
          an old parent who needs assistance. This assistance may likewise
          incorporate direct money related help. Life insurance can help repay
          the adult kid's costs afer the death of his parents. Young adults
          whose parents incurred loan costs for private student loan debts or
          cosigned a loan for them– Young adults without dependetnts rarely need
          life insurance, however on the off chance that a parent will be on the
          hook for a kid's debt after their demise, the child might need to
          carry enough life insurance to pay off the debt. Youthful adults who
          need to secure low rates – The younger and healthier you are, the
          lower your insurance premiums. A 20-something grown-up might purchase
          an approach even without having dependants if there is a desire to
          have them later on. Rich families who hope to owe estate taxes – Life
          insurance can provide funds to cover the taxes and keep the full
          estimation of the estate intact.
          <br />
          Families who can't bear burial and funeral service costs – A small
          life insurance policy can provide funds to honor a friend or family
          member's passing. Organizations with key workers – If the passing of a
          key employee, for example, a CEO, would make an extreme budgetary
          difficulty for a firm, that firm may have an insurable interest that
          will allow it to buy a life insurance poicy on that representative.
          Married pensioners– Instead of picking between a pension payout that
          offers a spousal advantage and one that doesn't, pensioners can decide
          to accept their full benefits and utilize a portion of the cash to
          purchase life insurance to profit their life partner. This system is
          called pension maximization.
          <br />
          <br />
          How Life Insurance Works
          <br />
          A life insurance policy has two principle segments - a death benefit
          and a premium. Term life insurance has these two parts, however
          permanent or whole life insurance policies likewise have a cash value
          element.
          <br />
          Death Benefit – The death benefit or face value is the amount of money
          the insurance agency guarantees to the beneficiaries recognized in the
          policy when the insured dies. The insured may be a parent, and the
          beneficiaries may be their youngsters, for instance. The insured will
          pick the ideal death benefit sum dependent on the beneficiaries'
          estimated future requirements. The insurance agency will decide if
          there is an insurable interest and if the proposed insured fits for
          the coverage based on the company's pre-mentioned requirements related
          to age, health, and any risky activities wherein the proposed insured
          takes an interest.
          <br />
          Premium – Premiums are the money the policyholder pays for the
          insurance. The insurer must pay the death benefit when the insured
          dies. If the policyholder pays the premiums as required, and premiums
          are determined to some extent by how likely it is that the insurer
          will have to pay the policy's death benefit dependent on the insured's
          life expectancy. Elements that influence life expectancy incorporate
          the insured's age, sex, clinical history, occpational hazards, and
          high-risk leisure activities. Some portion of the premium additionally
          goes toward the insurance agency's working costs. Premiums are higher
          on policies with larger death benefits, people who are at higher risk,
          and permanent policies that accumulate cash value.
          <br />
          Cash Value – The cash value of permanent life insurance fulfils two
          needs. It is a savings account that the policyholder can use during
          the life of the insured; the cash aggregates on a tax-deferred
          premise. Some policies may have limitations on withdrawals depending
          upon how the cash is to be utilized. For instance, the policyholder
          may apply for a loan against the policy's cash value and need to pay
          interest on the loan principal. The policyholder can likewise utilize
          the money incentive to pay premiums or buy extra protection. Thecash
          value is a living advantage that remains with the insurance agency
          when the insured dies. Any extraordinary loans against the cash value
          will lessen the policy's death benefit. Types of Life Insurance
          <br />
          <br />
          Various kinds of life insurance are accessible to meet a wide range of
          necessities and inclinations: <br />
          Term Life – Term life insurance lasts for a specific number of years.
          You choose the term when you take out the policy. Common terms are 10,
          20, or 30 years.
          <br />
          Level Term – The premiums are same every consecutive year.
          <br />
          Increasing Term – The premiums are lower when you're younger and
          increases as you get more established. This is likewise called "yearly
          renewable term."
          <br />
          Permanent – This stays in power for the insured's whole life unless
          the policyholder stops paying the premiums or surrenders the policy.
          It's commonly more costly than term.
          <br />
          Single Premium – In this situation the policyholder pays the whole
          premium in advance instead of paying it month to month, quarterly, or
          through yearly installments.
          <br />
          Whole Life – Whole life insurance is a sort of permanent life
          insurance that aggregates cash value.
          <br />
          Universal Life – A sort of permanent life insurance with a cash value
          element that earns interest, universal life insurance has premiums
          that are practically identical to term life insurance. In contrast to
          term and whole life, the premiums and death benefit can be adjusted
          later.
          <br />
          Guaranteed Universal – This is a kind of universal life insurance that
          doesn't build cash value and usually has lower premiums than whole
          life.
          <br />
          Variable Universal – With variable universal life insurance, the
          policyholder is permitted to invest the policy’s cash value.
          <br />
          Indexed Universal – This is a type of universal life insurance that
          lets the policyholder earn a fixed or equity-indexed rate of return on
          the cash value part.
          <br />
          Burial or Final Expense – This is a kind of permanent life insurance
          that has a lesser death benefit. Regardless of the names,
          beneficiaries can utilize the death benefit as they wish.
          <br />
          Guaranteed Issue – A kind of permanent life insurance accessible to
          individuals with medical issues that would some way or another make
          them uninsurable, guaranteed issue life insurance won't pay a death
          benefit during the initial two years the policy is in power (except if
          the death is unplanned) because of the high danger of insuring the
          individual. In any case, the insurer will restore the policy premiums
          in addition to interest to the beneficiaries if the insured dies
          during that period.
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ textAlign: "left" }}
        >
          Life Coverage Riders
          <br />
          <br />
          Numerous insurance policies offer policyholders the alternative to
          modify their policies to oblige their requirements. Riders are how the
          most common way policyholders may modify their plan. There are
          numerous riders, but availability depends upon the provider. The
          policyholder will regularly pay an extra premium for each rider or a
          fee to exercise the rider, however a few policies include certain
          riders in their base premium. <br />
          • The accidental death benefit rider gives extra life insurance
          coverage in the occasion the insured’s death is coincidental.
          <br />
          • The waiver of premium rider relieves the policyholder of making
          premium installments if the insured gets disabled and unfit to work.
          <br />
          • The disability income rider pays a month to month income in the
          event the policyholder gets unfit to work for a while or longer
          because of a serious disease or injury.
          <br />
          • Upon diagnosis of terminal illness, the accelerated death benefit
          rider permits the insured to collect a part or whole of the death
          benefit.
          <br />
          • The long-term care rider is a kind of accelerated death benefit that
          can be utilized to pay for nursing home, assisted living, or in-home
          care when the insured requires help with exercises of day-to- day
          living, for example, washing, eating, and using the toilet.
          <br />
          • An guaranteed insurability rider lets the policyholder purchase
          extra protection in the not too distant future without a medical
          review.
          <br />
          <br />
          <div style={{ border: "1px solid", display: "block" }}>
            <b>IMPORTANT</b>
            <i>
              Every policy is unique to the insured and insurer. It's essential
              to audit your policy document to comprehend what risks your policy
              covers, the amount it will pay to your beneficiaries, and under
              what conditions.
            </i>
          </div>
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ textAlign: "left" }}
        >
          <br />
          How much Life Insurance to Buy?
          <br />
          Before you apply for life insurance, you ought to examine your
          financial circumstance and decide how much cash would be required to
          maintain your beneficiaries’ standard of living or meet the need for
          which you're buying a policy. For instance, if you are the primary
          caretaker and have kids who are two and four years of age, you would
          need enough insurance to cover your custodial responsibilities until
          your children are grown up and are ready to sustain themselves. You
          may explore the costs to hire a babysitter and a maid, or to utilize
          commercial childcare and cleaning services, then maybe include some
          money for their education. Add up what these costs would be throughout
          the following 16 or so years, adding more with respect to expected
          inflation, and that is the death benefit you should purchase—if you
          can bear the cost of it.
          <br />
          <br />
          <div style={{ border: "1px solid", display: "block" }}>
            <b>TIP</b>: It's judicious to rethink your life insurance needs
            every year or after noteworthy life events, for example, separation,
            marriage, the birth or adoption of a child, or significant
            purchases, like, a house. You may need to update the policy’s
            beneficiaries, increase your coverage, or even decrease your
            coverage.
          </div>
          <br />
          Extra Uses for Life Insurance <br />
          A vast majority of people use life insurance to provide cash to
          beneficiaries who might endure a financial hardship upon the insured’s
          death. In any case, for wealthy folks, the tax advantages of life
          insurance, including tax-deferred growth of cash value, tax-free death
          dividends, and tax-free death benefits, can offer additional strategic
          opportunities.
          <br />
          Funding Retirement – Policies with a cash value or investment
          component can give a source of retirement income. This opportunity can
          accompany high fees and a lower death benefit, so it might just be a
          decent alternative for people who have maximized other tax-advantaged
          savings and investment accounts. The pension maximization strategy
          described before is another way life insurance can be utilized to fund
          retirement.
          <br />
          Maintaining a strategic distance from Taxes – The death benefit of a
          life insurance policy is generally tax free. Wealthy people at times
          purchase permanent life insurance within a trust to help pay the
          estate taxes that will be due upon their death. This strategy aids to
          preserve the estimation of the estate for their heirs. Tax avoidance
          is a law-abiding strategy for limiting one's tax liability and ought
          not be mistaken for tax evasion, which is illicit.
          <br />
          Borrowing Money – Most permanent life insurance accumulates cash value
          that the policyholder can borrow against. Actually, you are borrowing
          money from the insurance agency and utilizing your cash value as
          collateral. Unlike with different sorts of loans, the policyholder's
          credit score isn't a factor. Reimbursement terms can be flexible, and
          the loan interest returns into the policyholder's cash value account.
          Policy loans can lessen the policy’s death benefit, in any case.
          <br />
        </Typography>
      </div>
      <Copyright />
    </>
  );
};

export default LifeInsurance;
