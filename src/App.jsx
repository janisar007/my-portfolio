import React, {useRef} from "react";
import Header from "./components/Header";
import ContactMeButton from "./components/ContactMeButton";
import Projects from "./components/Projects";
import More from "./components/More";
import Education from "./components/Education";
import { ContactUs } from "./components/ContactUs";
import Footer from "./components/Footer";


const App = () => {
  const contactRef = useRef(null);
  const toContactUs = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-roboto">
      <ContactMeButton btn={toContactUs}/>
      
      <Header />
      <div className="w-full flex justify-center m-2">
        <p className="text-white text-[1.3rem] font-semibold">Hi, I am a Web Developer.</p>

      </div>
      <Projects />
      <More />
      <div className="w-full flex flex-col items-center">
        <Education />
      </div>

      <div ref={contactRef} className="flex w-full justify-center mt-4">
        <ContactUs />
      </div>

      <div className="bg-[#1C1C27] mt-12 w-full">
        <Footer/>
      </div>


    </div>
  );
};

export default App;
