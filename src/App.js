import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Background from "./Components/Background/background";
import Services from "./Components/Services/services"; 
import Contact from "./Components/Contact/contact"; 
import Footer from "./Components/Footer/footer";




function App() {
  return (
    <div className="App">
          <Navbar />   
          <Intro />
          <Background />
          <Services />
          <Contact />
          <Footer />
          
    </div>
  );
}

export default App;
