import About from "@/components/About";
import Cooperation from "@/components/Cooperation";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <div>
      <About />
      <Statistics/>
      <Cooperation/>
      <Services/>
      <Experience/>
      <Education/>
    </div>
  );
}