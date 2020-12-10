import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React from "react";
import Chart from "./Chart";
import Deposits from "./Deposits";
import { mainListItems, secondaryListItems } from "./ListItem";
import Orders from "./Orders";
import products from "../../components/products";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

function Copyright() {
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
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  cardGrid: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80px",
    [theme.breakpoints.down("sm")]: {
      height: "120px",
    },
    marginBottom: "16px",
    borderRadius: "15px",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    transition: theme.transitions.create(["background", "transform"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      transform: `scale(1.05)`,
      cursor: "pointer",
    },
  },
  cardItem: {
    minWidth: "200px",
    // minHeight: "250px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "200px",
      minHeight: "120px",
    },
  },
  cardContent: {
    flexGrow: 1,
  },
  cardHeading: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
  cardBody: {
    // textAlign: "left !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Admin Name Here
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List primary="Name">
          <div style={{ marginTop: "10px" }}>
            <Typography variant="h6">Admin Name Here</Typography>
            <Typography variant="body1">Username here</Typography>
          </div>
        </List>
        {/* <List>{secondaryListItems}</List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                className={fixedHeightPaper}
                style={{ justifyContent: "center" }}
              >
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Typography
                variant="h4"
                gutterBottom
                style={{ marginTop: "20px" }}
              >
                Products
              </Typography>
              {/* <Paper className={classes.paper}> */}
              <Grid
                container
                spacing={3}
                justify="center"
                alignItems="center"
                className={classes.cardGrid}
              >
                {products.map((card, key) => (
                  <Grid
                    item
                    key={key}
                    xs={3}
                    sm={3}
                    md={3}
                    // lg={1}
                    className={classes.cardItem}
                  >
                    <Link href="#" style={{ textDecoration: "none" }}>
                      <Card className={classes.card} variant="outlined">
                        <CardContent className={classes.cardContent}>
                          <Typography
                            variant="h5"
                            component="h2"
                            className={classes.cardHeading}
                          >
                            {card.title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                  </Grid>
                ))}
              </Grid>

              {/* <Orders /> */}
              {/* </Paper> */}
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
