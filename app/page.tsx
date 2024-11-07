import About from "@/components/About";
import Cooperation from "@/components/Cooperation";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <div>
      <About />
      <Statistics/>
      <Cooperation/>
      <Services/>
    </div>
  );
}