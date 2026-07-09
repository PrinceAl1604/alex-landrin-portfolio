import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CvView } from "@/components/CvView";
import { site } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "CV",
  description: `Curriculum vitae — ${site.fullName}, ${site.role}.`,
  alternates: { canonical: "/cv" },
};

export default function CvPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <CvView />
      </main>
      <Footer />
    </>
  );
}
