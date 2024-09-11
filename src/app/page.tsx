import { ThreeDCardDemo } from "@/Components/Cards/Cards";
import Footer from "@/Components/Footer/Footer";
import Herosection from "@/Components/Herosection/Herosection";
import HoverCards from "@/Components/HoverCards/HoverCards";
import InfiniteCards from "@/Components/InfiniteCards/InfiniteCards";
import WavyBackgroundComponent from "@/Components/Instructors/Instructors";
import WhyChooseUs from "@/Components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
         <main className="min-h-screen bg-black/[0.96] antialiased">
    <Herosection/>
    <ThreeDCardDemo/>
    <WhyChooseUs/>
    <InfiniteCards/>
    <HoverCards/>
    <WavyBackgroundComponent/>
    {/* <Footer/> */}
   </main>
    </>
  
  );
}
