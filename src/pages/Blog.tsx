import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { PageTransition } from "@/components/PageTransition";
import { usePageTitle } from "@/hooks/UsePageTitle";
import { posts, categories } from "@/data/site";

const PER_PAGE = 4;

export default function Blog() {
  usePageTitle("Blog — Lazghiff", "Field notes on design, motion, and shipping software.");

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  // Posts that match the search text and the selected category
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchCategory = category === "All" || p.category === category;
      const matchQuery = q === "" || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const shown = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <PageTransition>
      <Section eyebrow="Field notes">
        <AnimatedTitle as="h1" text="Writing about *design* & code." className="font-display text-5xl font-semibold leading-[1.05] md:text-6xl" />

        {/* Search + category filters */}
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search articles…"
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCategory(c);
                  setPage(1);
                }}
                className={`rounded-full px-3 py-1.5 text-xs uppercase tracking-widest transition ${category === c ? "bg-primary/20 text-foreground" : "border border-white/10 text-muted-foreground hover:text-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Post cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {shown.map((p, i) => (
            <motion.article key={p.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="group relative overflow-hidden rounded-2xl glass p-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="rounded-full bg-primary/15 px-2 py-0.5 text-primary">{p.category}</span>
                <span>{p.date}</span>
                <span>·</span>
                <span>{p.read}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold group-hover:text-gradient">
                <Link to={`/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
              <Link to={`/blog/${p.slug}`} className="mt-6 inline-flex items-center gap-1 text-sm text-primary">
                Read more
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </motion.article>
          ))}

          {shown.length === 0 && <div className="col-span-full py-16 text-center text-muted-foreground">No articles found.</div>}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`h-10 w-10 rounded-full text-sm ${page === n ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground" : "border border-white/10 text-muted-foreground hover:text-foreground"}`}
              >
                {n}
              </button>
            ))}
          </div>
        )}
      </Section>
    </PageTransition>
  );
}
