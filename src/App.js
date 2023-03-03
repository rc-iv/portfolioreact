import React from "react";
import './App.css';
import PortfolioNavbar from "./components/navbar/PortfolioNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from "./components/resume/Resume";
import About from "./components/about/About";
import UseScroll from "./components/UseScroll/UseScroll"
import ContactForm from "./components/contact/ContactForm";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
function App() {
    const [homeScroll, homeRef] = UseScroll()
    const [resumeScroll, resumeRef] = UseScroll()
    const [portfolioScroll, portfolioRef] = UseScroll()
    const [contactScroll, contactRef] = UseScroll()

    const scrollHandler = (name) => {
        console.log(`scrollHandler: ${name}`)
        switch (name) {
            case 'home':
                homeScroll()
                break
            case 'resume':
                resumeScroll()
                break
            case 'portfolio':
                portfolioScroll()
                break
            case 'contact':
                contactScroll()
                break
            default:
                break
        }
    }
    return (
        <React.Fragment>
            <PortfolioNavbar scrollHandler={scrollHandler}/>
            <div ref={homeRef}>
                <About/>
            </div>

            <div ref={portfolioRef}>
                <Portfolio/>
            </div>

            <div ref={resumeRef}>
                <Resume/>
            </div>

            <div ref={contactRef}>
                <ContactForm/>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default App;
