import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Ventures } from "@/components/Ventures";
import { site } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "Ventures",
  description: "LogoMint, ACADEMIA, Cozisoft and Landtone — the ecosystem around Alex Landrin's design practice.",
  alternates: { canonical: "/ventures" },
  openGraph: {
    title: `Ventures — ${site.name}`,
    description: "LogoMint · ACADEMIA · Cozisoft · Landtone",
    url: `${site.url}/ventures`,
  },
};

export default function VenturesPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-8">
        <Ventures />
      </main>
      <Footer />
    </>
  );
}
