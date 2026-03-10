import About from "./components/About";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Navbar from "./components/navbar"


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App
