import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import { Resume } from "./components/resume/Resume";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
    </main>
  );
}

export default App;
