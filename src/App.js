import './App.css';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import Transform from './Components/Transform';
import Standout from './Components/Standout';
import Graphic from './Components/Graphic';
import Testimonials from './Components/Testimonials';
import Bottom from './Components/Bottom';
import Footer from './Components/Footer';

function App() {
    return (
        <div>
            <Navigation />
            <Hero />
            <Transform />
            <Standout />
            <Graphic />
            <Testimonials />
            <Bottom />
            <Footer />
        </div>
    );
}

export default App;
