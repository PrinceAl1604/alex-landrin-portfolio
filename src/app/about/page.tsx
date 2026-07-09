import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Container } from "@/components/Section";
import { Experience } from "@/components/Experience";
import { site } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: `${site.fullName} — ${site.positioning}`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <About />
        <section className="pb-24">
          <Container>
            <Experience />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
