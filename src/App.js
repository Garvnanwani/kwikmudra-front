import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <div>
      <Navbar />
      <Header />;
      <Footer />
    </div>
  );
}
