# Online Presence Optimization — shashankbindal.me
> Cursor: Read this file top to bottom and implement all changes listed. Each section targets a specific file or area of the codebase. Follow instructions exactly.

---

## 0. Context

**Owner**: Shashank Bindal  
**Site**: shashankbindal.me (Next.js)  
**Goal**: Maximize global discoverability — international researchers, recruiters, professors  
**Target queries**: "Shashank Bindal", "Shashank Bindal RGIPT", "Shashank Bindal AI engineer", "full stack engineer NLP India"

---

## 1. Schema.org Structured Data (Person)

**File**: `app/layout.tsx` or `pages/_document.tsx` (whichever is root layout)

Add the following JSON-LD `<script>` tag inside `<head>`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Shashank Bindal",
      "url": "https://shashankbindal.me",
      "image": "https://shashankbindal.me/og-image.jpg", // update with actual image path
      "email": "bindalshashank.89@gmail.com",
      "jobTitle": "Full Stack Engineer & AI Builder",
      "description": "B.Tech IT student at RGIPT Amethi building AI-powered products using Next.js, FastAPI, LangChain, AWS, and NLP. Open to global research internships.",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Rajiv Gandhi Institute of Petroleum Technology (RGIPT), Amethi"
      },
      "knowsAbout": [
        "Full Stack Development",
        "Next.js",
        "FastAPI",
        "LangChain",
        "RAG",
        "NLP",
        "AWS",
        "Docker",
        "Machine Learning",
        "TypeScript",
        "Python"
      ],
      "sameAs": [
        "https://linkedin.com/in/shashankbindal07",
        "https://github.com/shashank7109",
        "https://shashankbindal.me/blog"
      ]
    })
  }}
/>
```

---

## 2. Global Meta Tags

**File**: `app/layout.tsx` (inside the exported `metadata` object, Next.js 13+ App Router)

Replace or extend existing metadata with:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://shashankbindal.me"),
  title: {
    default: "Shashank Bindal — Full Stack Engineer & AI Builder",
    template: "%s | Shashank Bindal",
  },
  description:
    "Shashank Bindal is a Full Stack Engineer and AI builder from RGIPT Amethi, India. Building with Next.js, FastAPI, LangChain, AWS, and NLP. Open to global research internships.",
  keywords: [
    "Shashank Bindal",
    "RGIPT Amethi",
    "Full Stack Engineer India",
    "AI Engineer India",
    "LangChain developer",
    "NLP engineer",
    "Next.js developer",
    "FastAPI developer",
    "RAG developer",
    "research internship India",
    "Kode Club RGIPT",
  ],
  authors: [{ name: "Shashank Bindal", url: "https://shashankbindal.me" }],
  creator: "Shashank Bindal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shashankbindal.me",
    siteName: "Shashank Bindal",
    title: "Shashank Bindal — Full Stack Engineer & AI Builder",
    description:
      "Building AI-powered products with Next.js, FastAPI, LangChain, and AWS. B.Tech IT @ RGIPT Amethi. Open to global research & engineering internships.",
    images: [
      {
        url: "/og-image.jpg", // ensure this file exists at /public/og-image.jpg (1200x630px)
        width: 1200,
        height: 630,
        alt: "Shashank Bindal — Full Stack Engineer & AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashank Bindal — Full Stack Engineer & AI Builder",
    description:
      "Building AI-powered products. Next.js · FastAPI · LangChain · AWS. B.Tech IT @ RGIPT Amethi.",
    images: ["/og-image.jpg"],
    creator: "@[your_twitter_handle]", // replace with actual handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://shashankbindal.me",
  },
};
```

---

## 3. Blog Post Meta Tags

**File**: `app/blog/[slug]/page.tsx` (or equivalent dynamic route)

Each blog post page must export its own `generateMetadata` function:

```tsx
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug); // use your existing data-fetching function

  return {
    title: post.title,
    description: post.excerpt || post.content.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Shashank Bindal"],
      url: `https://shashankbindal.me/blog/${params.slug}`,
      images: [
        {
          url: post.coverImage || "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://shashankbindal.me/blog/${params.slug}`,
    },
  };
}
```

Also add Article schema JSON-LD per blog post:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "author": {
        "@type": "Person",
        "name": "Shashank Bindal",
        "url": "https://shashankbindal.me"
      },
      "datePublished": post.publishedAt,
      "url": `https://shashankbindal.me/blog/${post.slug}`,
      "description": post.excerpt,
      "publisher": {
        "@type": "Person",
        "name": "Shashank Bindal"
      }
    })
  }}
/>
```

---

## 4. Sitemap

**File**: `app/sitemap.ts` (create if it doesn't exist)

```ts
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts(); // use your existing fetch function

  const blogRoutes = posts.map((post) => ({
    url: `https://shashankbindal.me/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://shashankbindal.me",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://shashankbindal.me/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogRoutes,
  ];
}
```

---

## 5. Robots.txt

**File**: `app/robots.ts` (create if it doesn't exist)

```ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://shashankbindal.me/sitemap.xml",
  };
}
```

---

## 6. OG Image

**Action**: Create `/public/og-image.jpg`  
- Dimensions: **1200 × 630px**  
- Should include: name "Shashank Bindal", tagline (e.g. "Full Stack Engineer · AI Builder · RGIPT"), and optionally a headshot or minimal background  
- This image is used for all link previews on Twitter, LinkedIn, WhatsApp, Slack, etc.

If you want to auto-generate it dynamically, create `app/opengraph-image.tsx`:

```tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ color: "#ffffff", fontSize: 64, fontWeight: 700 }}>
          Shashank Bindal
        </div>
        <div style={{ color: "#888888", fontSize: 28, marginTop: 16 }}>
          Full Stack Engineer · AI Builder · RGIPT Amethi
        </div>
        <div style={{ color: "#555555", fontSize: 22, marginTop: 12 }}>
          Next.js · FastAPI · LangChain · AWS · NLP
        </div>
        <div style={{ color: "#444444", fontSize: 18, marginTop: 32 }}>
          shashankbindal.me
        </div>
      </div>
    ),
    { ...size }
  );
}
```

---

## 7. Canonical Tags

Ensure every page has a canonical URL set. This is already handled by the `alternates.canonical` field in the metadata objects above. Double-check that no page is missing it, especially blog posts.

---

## 8. Performance & Crawlability Checks

After implementing the above, verify:

- [ ] Run `pnpm build` — no metadata errors
- [ ] Visit `/sitemap.xml` in browser — all pages listed
- [ ] Visit `/robots.txt` in browser — correct output
- [ ] Use [Google Rich Results Test](https://search.google.com/test/rich-results) on homepage — Person schema detected
- [ ] Use [Twitter Card Validator](https://cards-dev.twitter.com/validator) — card preview shows correctly
- [ ] Use [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) — OG image and title correct
- [ ] Submit sitemap at [Google Search Console](https://search.google.com/search-console) → Sitemaps

---

## 9. Notes for Cursor

- Do not break existing styles or layout while adding metadata
- If the project uses Pages Router (`pages/`) instead of App Router (`app/`), use `next/head` and `_document.tsx` equivalents instead of the `metadata` export pattern
- All `// replace with...` comments in the code above need real values substituted
- The `getAllPosts()` and `getPostBySlug()` calls should match whatever data-fetching pattern is already in use in the project
- Priority order: Schema JSON-LD → metadata object → sitemap → robots → OG image