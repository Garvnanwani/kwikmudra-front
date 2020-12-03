import "./App.css";
import NavBar from "./components/Navbar";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import HeaderImage from "./assets/headerImage.svg";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#DF6B57",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <img src={HeaderImage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
