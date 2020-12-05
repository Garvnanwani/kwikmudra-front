import AboutSection from "../components/AboutSection"
import Header from "../components/Header"
import NavBar from "../components/Navbar"
import ProductsPage from "../components/ProductsPage"
import "../styles/App.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ProductsPage />
      <AboutSection />
    </div>
  )
}

export default App
