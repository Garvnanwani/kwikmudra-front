/* eslint-disable no-lone-blocks */
import "./App.css";
import NavBar from "./components/Navbar";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "./components/Header";
import ProductsPage from "./components/ProductsPage";
// import Provider from "./provider";
// import Context from "./context";

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
        <Header />
        <ProductsPage />
      </div>
      {/* <Provider>
        All components to provide data here
      </Provider> */}
    </ThemeProvider>
  );
}

export default App;

// To use the consumer
{
  /* <Context.Consumer>
  {context => (
    <div>
      {context.myData}
    </div>
  )}
</Context.Consumer> */
}
