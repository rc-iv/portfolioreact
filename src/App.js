import './App.css';
import PortfolioNavbar from "./components/navbar/PortfolioNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from "./components/resume/Resume";
import About from "./components/about/About";
function App() {
    return (
        <div>
            <PortfolioNavbar/>
            <About />
            <Resume link="resume"/>
        </div>
    )
}

export default App;
