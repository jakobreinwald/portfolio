import React from 'react';

import { About, Footer, Header, Experiences, Skills, Testimonial, Work } from './containers';
import { Navbar, Particles } from './components';
import './App.scss';

const App = () => {
    return (
        <>
            {/* <Particles /> */}
            <div className="app">
                <Navbar />
                <Header />
                <Work />
                <Experiences />
                <Skills />
                {/* No testimonials for now */}
                {/* <Testimonial /> */}
                <About />
                <Footer />
            </div>
        </>
    );
}

export default App