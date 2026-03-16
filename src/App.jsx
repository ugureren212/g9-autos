import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkAndServices from './components/WorkAndServices';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <WorkAndServices />
        <AboutContact />
      </main>
      <Footer />
    </>
  );
}

export default App;
