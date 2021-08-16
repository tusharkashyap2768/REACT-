import React from 'react'
import NavBar from './NavBar';
import MasterHead from './MasterHead';
import PortfolioSection from './PortfolioSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
 import Footer from './Footer';
 import CopyRight from './CopyRight';

const App = () => {
    return(
        <div>
            <NavBar/>
             <MasterHead/>
             <PortfolioSection/>
             <AboutSection/>
             <ContactSection/> 
             <Footer/> 
             <CopyRight/>   
        </div>
    )
}


export default App;