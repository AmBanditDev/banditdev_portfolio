import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import MyCerts from "../components/MyCerts";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Education />
      <MyCerts />
      <Skills />
    </>
  );
}
