import React from "react";
import "./App.css";
import PortfolioNavbar from "./components/navbar/PortfolioNavbar";
import Resume from "./components/resume/Resume";
import About from "./components/about/About";
import UseScroll from "./components/UseScroll/UseScroll";
import ContactForm from "./components/contact/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

function App() {
  const [homeScroll, homeRef] = UseScroll();
  const [resumeScroll, resumeRef] = UseScroll();
  const [portfolioScroll, portfolioRef] = UseScroll();
  const [contactScroll, contactRef] = UseScroll();

  const scrollHandler = (name) => {
    switch (name) {
      case "home":
        homeScroll();
        break;
      case "resume":
        resumeScroll();
        break;
      case "portfolio":
        portfolioScroll();
        break;
      case "contact":
        contactScroll();
        break;
      default:
        console.error(`Unhandled name: ${name}`);
        break;
    }
  };

  return (
    <React.Fragment>
      <PortfolioNavbar scrollHandler={scrollHandler} />
      <div ref={homeRef}></div>

      <div ref={portfolioRef}>
        <Portfolio />
      </div>

      <div ref={resumeRef}>
        <Resume />
      </div>

      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
