import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./App.css";
import Nav from './components/navbar/Nav';
import About from "./components/navbar/About";
import Contact from "./components/navbar/Contact";
import Services from "./components/navbar/Services";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/scss/bootstrap.scss';
export default function App(){
  return (
  <>
     <Nav />
     <Routes>
      <Route path="/about" element={<About />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/contact" element={<Contact />}/>
     </Routes>
     hello
  </>
  )
}