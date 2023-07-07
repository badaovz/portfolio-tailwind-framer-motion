import About from './components/About';
import ClientRate from './components/ClientRate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import UpTopBtn from './components/UpTopBtn';
import Work from './components/Work';

function App() {
    return (
        <div className='app'>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Work />
            <ClientRate />
            <Contact />
            <Footer />
            <UpTopBtn />
        </div>
    );
}

export default App;
