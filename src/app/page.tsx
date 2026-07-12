import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Capabilities } from "@/components/Capabilities";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <SelectedWork />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
