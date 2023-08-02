import Employee from './Components/Employee';
import Employer from './Components/Employer';
import FooterAndAbout from './Components/FooterAndAbout';
import Home from './Components/Home';
import InfiniteLogoCarousel from './Components/InfiniteLogoCarousel';
import Navbar from './Components/Navbar';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <InfiniteLogoCarousel/>
      <Employer/>
      <Employee/>
      <Testimonials/>
      <FooterAndAbout/>
    </div>
  );
}

export default App;
