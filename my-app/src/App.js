import Navbar from './Component/Navbar';
import './App.css';
import Footer from './Component/Footer';
import Slideshow from './Component/Slideshow';
import Company from './Component/Company';
import Employer from './Component/Employer';

function App() {
  return (
    <div>
   
      <Navbar></Navbar>
      <Slideshow></Slideshow>
      <Company></Company>
      <Employer></Employer>
      <Footer></Footer>
    </div>
  );
}

export default App;
