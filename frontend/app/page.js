import Contact from "@/components/Contact";
import Facilities from "@/components/Facilities";
import FAQ from "@/components/FAQs";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Notices from "@/components/Notices";
import Stats from "@/components/Stats";
import Timings from "@/components/Timing";

export default function Home() {
  return (
    <>
      <Hero/>
      <Stats/>
      <Gallery/>
      <Notices/>
      <Timings />
      <Facilities/>
      <FAQ/>
      <Contact/>
    </>
  );
}
