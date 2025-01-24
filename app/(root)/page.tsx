import About from "@/components/shared/Hero";
import Blog from "@/components/shared/Blog";
import Contact from "@/components/shared/Contact";
import Cooperation from "@/components/shared/Cooperation";
import Education from "@/components/shared/Education";
import Experience from "@/components/shared/Experience";
import MySkills from "@/components/shared/MySkills";
import Projects from "@/components/shared/Projects";
import Services from "@/components/shared/Services";
import Statistics from "@/components/shared/Statistics";

export default function Home() {
  return (
    <>
      <About />
      <Statistics/>
      <Cooperation/>
      <Services/>
      <Experience/>
      <Education/>
      <Projects/>
      <MySkills/>
      <Blog/>
      <Contact/>
    </>
  );
}