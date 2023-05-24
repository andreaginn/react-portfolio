import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Resume />
        <Footer />
      </div>
      );
};

      export default App
