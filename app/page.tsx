import About from "@/components/About";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <div className="font-bold underline text-center">
      This is home page
      <Button>Default</Button>

      <About />
    </div>
  );
}
