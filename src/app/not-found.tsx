import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Section";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="flex min-h-[60vh] items-center">
        <Container>
          <p className="side-label">Error 404</p>
          <h1 className="mt-6 font-display text-display-md font-bold tracking-tight">
            This page isn&apos;t on the grid.
          </h1>
          <p className="mt-4 max-w-measure text-lg text-muted">
            The page you&apos;re after doesn&apos;t exist — or moved. Let&apos;s get you back.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-ink px-5 py-3 font-sans text-sm text-paper transition-colors hover:bg-accent"
          >
            ← Back to home
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
