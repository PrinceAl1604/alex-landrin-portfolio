import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CaseStudy } from "@/components/CaseStudy";
import { getProject, projectSlugs } from "@/lib/content/projects";
import { site } from "@/lib/content/profile";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  const title = `${project.title} — ${project.angle}`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      url: `${site.url}/work/${project.slug}`,
      type: "article",
    },
    twitter: { card: "summary_large_image", title: project.title, description: project.summary },
  };
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    abstract: project.summary,
    creator: { "@type": "Person", name: site.fullName },
    url: `${site.url}/work/${project.slug}`,
    keywords: project.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <Nav />
      <main id="main">
        <CaseStudy project={project} />
      </main>
      <Footer />
    </>
  );
}

export const dynamicParams = false;
