import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.module.css';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Bedrooms2 from './Pages/Bedrooms-2.jsx';
import Bedrooms3 from './Pages/Bedrooms-3';
import Bedrooms4 from './Pages/Bedrooms-4';
import Complex from './Pages/Complex';
import About from './Pages/About';
// import Contact from './Pages/Contact';
import Recomendations from './Pages/Recomendations'

function App() {
    return (
      <BrowserRouter>
        <Header />
        <div className="main-container">
          <Switch>
  
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/base-doble">
              <Bedrooms2 />
            </Route>
            <Route path="/base-triple">
              <Bedrooms3 />
            </Route>
            <Route path="/base-cuadruple">
              <Bedrooms4 />
            </Route>
  
            <Route path="/complejo" exact>
              <Complex />
            </Route>
            <Route path="/nosotros" exact>
              <About />
            </Route>
            {/* <Route path="/contact" exact>
              <Contact />
            </Route> */}
            <Route path="/recomendaciones" exact>
              <Recomendations />
            </Route>

          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
  
  export default App;
  