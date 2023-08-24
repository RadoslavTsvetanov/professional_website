import { BrowserRouter } from "react-router-dom";
import Comments from './Comments'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech , Works,  StarsCanvas} from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#F8F6F0]'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech/>
        <Works />
        <Feedbacks />
        <Comments />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

