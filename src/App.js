import "./App.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import ProductsPage from "./components/ProductsPage";
import AboutSection from "./components/AboutSection";
// import Provider from "./provider";
// import Context from "./context";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ProductsPage />
      <AboutSection />
      {/* <Provider>
          All components to provide data here
        </Provider> */}
    </div>
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
