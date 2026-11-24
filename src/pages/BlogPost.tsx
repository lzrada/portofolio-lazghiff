import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/Section";
import { PageTransition } from "@/components/PageTransition";
import { usePageTitle } from "@/hooks/UsePageTitle";
import { posts } from "@/data/site";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  usePageTitle(post ? `${post.title} — Lazghiff` : "Article not found — Lazghiff", post?.excerpt);

  if (!post) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl">Article not found</h1>
          <Link to="/blog" className="mt-4 inline-block text-primary underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <Section>
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>

        <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
          <span className="rounded-full bg-primary/15 px-2 py-0.5 text-primary">{post.category}</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.read}</span>
        </div>

        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.1] md:text-6xl">{post.title}</h1>

        {/* Article body: replace this placeholder text with your real content */}
        <div className="mx-auto mt-14 max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p className="text-2xl text-foreground">{post.excerpt}</p>
          <p>This is a placeholder article. Drop your MDX or CMS content here — the layout is tuned for long-form reading with generous line height, quiet color, and a max-width that keeps paragraphs comfortable.</p>
          <p>Motion should support the writing, not compete with it. Use scroll-linked reveals for headings and quotes, and let the body settle. A well-paced article feels like an interface itself.</p>
          <blockquote className="border-l-2 border-primary pl-6 italic text-foreground">"Design is the difference between something that works and something that stays with you."</blockquote>
          <p>More sections, code blocks, and images would live below. Wire this up to your CMS of choice and you're off.</p>
        </div>
      </Section>
    </PageTransition>
  );
}
