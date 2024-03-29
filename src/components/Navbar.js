// import MoreIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useContext } from "react";
import { Link } from "@material-ui/core";
import Logo from "../assets/logo.png";
import Fade from "react-reveal/Fade";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    maxWidth: "95%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  space: {
    marginLeft: theme.spacing(4),
    // [theme.breakpoints.up("sm")]: {
    // display: "none",
    // marginRight: "20px",
    // },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  title: {
    // display: "none",
    // [theme.breakpoints.up("sm")]: {
    display: "block",
    marginLeft: "20px",
    // },
  },
  navColors: {
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "none",
  },
  myButton: {
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    transition: theme.transitions.create(
      ["background", "transform", "color", "background-color"],
      {
        duration: theme.transitions.duration.standard,
      }
    ),
    "&:hover": {
      transform: `scale(1.05)`,
      border: "1px solid",
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      backgroundColor: "#fff",
      cursor: "pointer",
    },
  },
  logOutButton: {
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    transition: theme.transitions.create(
      ["background", "transform", "color", "background-color"],
      {
        duration: theme.transitions.duration.standard,
      }
    ),
    "&:hover": {
      transform: `scale(1.05)`,
      border: "1px solid",
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      backgroundColor: "#fff",
      cursor: "pointer",
    },
  },
  logo: {
    height: "100px",
    marginTop: "5px",
    display: "inline",
    marginLeft: "auto",
    marginRight: "auto",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const { user, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const history = useHistory();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const SignInButton = () => {
    const classes = useStyles();
    return (
      <Button
        className={classes.myButton}
        variant="contained"
        color="primary"
        // size="small"
      >
        Sign In
      </Button>
    );
  };

  const LogOutButton = () => {
    const classes = useStyles();
    return (
      <Button
        className={classes.logOutButton}
        variant="contained"
        color="primary"
        onClick={handleLogout}
        // size="small"
      >
        Log out
      </Button>
    );
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleLogout = (user) => {
    if (user && localStorage.getItem("user")) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      // setIsLoggedIn(!isLoggedIn);
      setIsLoggedIn(false);

      history.push("/signin");
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link href="/signin" style={{ textDecoration: "none" }}>
        <MenuItem onClick={handleMenuClose}>Employee Login</MenuItem>
      </Link>
      <Link href="/signin" style={{ textDecoration: "none" }}>
        <MenuItem onClick={handleMenuClose}>Agent Login</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link href="/#products" style={{ textDecoration: "none" }}>
        <MenuItem>
          {/* <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton> */}

          <p>Our Products</p>
        </MenuItem>
      </Link>
      <Link href="/about" style={{ textDecoration: "none" }}>
        <MenuItem>
          {/* <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton> */}
          <p>About Us</p>
        </MenuItem>
      </Link>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {user && !isLoggedIn ? <LogOutButton /> : <SignInButton />}
          {console.log(isLoggedIn)}
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <Fade top>
        <AppBar position="static" className={classes.navColors}>
          <Toolbar>
            {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
            <Link href="/">
              <img src={Logo} alt="kwikmudra-logo" className={classes.logo} />
            </Link>

            <Link href="/#products" style={{ textDecoration: "none" }}>
              <Typography className={classes.space} variant="h6" noWrap>
                Our Products
              </Typography>
            </Link>
            {/* <Typography className={classes.space} variant="h6" noWrap>
            Resources
          </Typography> */}
            <Link href="/about" style={{ textDecoration: "none" }}>
              <Typography className={classes.space} variant="h6" noWrap>
                About Us
              </Typography>
            </Link>

            {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div> */}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {/* <AccountCircle /> */}
                {user ? <LogOutButton /> : <SignInButton />}
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Fade>
    </div>
  );
}
