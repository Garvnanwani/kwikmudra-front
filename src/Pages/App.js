import React from "react";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/Navbar";
import ProductsSection from "../components/ProductsSection";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Header />
      </div>
      <ProductsSection />
      <div className="content">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
