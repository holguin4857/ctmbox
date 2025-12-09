import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Head from "next/head";

// Correct path for pages/blog/[slug].js
import styles from "../../styles/blog.module.css";

export default function BlogPostEn({ frontmatter, content, slug }) {
  // 1. Define your domain
  const siteUrl = "https://ctmbox.com";

  // 2. Build the absolute Image URL for Facebook/LinkedIn
  // If the post has an image, combine domain + path. If not, use a default.
  const ogImageUrl = frontmatter.image
    ? `${siteUrl}${frontmatter.image}`
    : `${siteUrl}/images/default-social.jpg`;

  return (
    <>
      <Head>
        <title>{`${frontmatter.title} | CTM English`}</title>
        <meta name="description" content={frontmatter.social_summary} />

        {/* --- OPEN GRAPH TAGS (Facebook/LinkedIn) --- */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.social_summary} />

        {/* The Fix: Absolute URL for the image */}
        <meta property="og:image" content={ogImageUrl} />

        {/* Specific English Locale */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={`${siteUrl}/blog/${slug}`} />

        {/* Force Large Image Preview */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* --- TWITTER CARDS --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.social_summary} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>

      <div className={styles.container}>
        <article className={styles.article}>
          {/* Link back to the English Blog Feed */}
          <Link
            href="/blog"
            style={{
              textDecoration: "none",
              color: "#666",
              display: "inline-block",
              marginBottom: "1rem",
            }}
          >
            &larr; Back to News
          </Link>

          <header
            className={styles.header}
            style={{ textAlign: "left", borderBottom: "1px solid #eee" }}
          >
            <span
              style={{
                backgroundColor: "#0b0b0bff",
                color: "white",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "0.8rem",
              }}
            >
              {frontmatter.categories && frontmatter.categories[0]}
            </span>
            <h1 style={{ fontSize: "2.5rem", margin: "15px 0" }}>
              {frontmatter.title}
            </h1>
            <p className={styles.meta}>
              {frontmatter.date.split("T")[0]} • 🇺🇸 English
            </p>
          </header>

          {/* Social Summary Box */}
          {frontmatter.social_summary && (
            <div
              className={styles.socialBox}
              style={{
                borderLeftColor: "#090909ff",
                backgroundColor: "#FFE8E5",
              }}
            >
              &quot;{frontmatter.social_summary}&quot;
            </div>
          )}

          {/* Main Image */}
          {frontmatter.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={frontmatter.image} alt={frontmatter.title} />
          )}

          <div
            dangerouslySetInnerHTML={{ __html: content }}
            style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
          />
        </article>
      </div>
    </>
  );
}

// POINTING TO THE ENGLISH FOLDER
export async function getStaticPaths() {
  const folderPath = path.join("content/blog/en");
  if (!fs.existsSync(folderPath)) return { paths: [], fallback: false };
  const files = fs.readdirSync(folderPath);
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  // READING FROM THE ENGLISH FOLDER
  const markdownWithMeta = fs.readFileSync(
    path.join("content/blog/en", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  if (frontmatter.date && typeof frontmatter.date === "object") {
    frontmatter.date = frontmatter.date.toISOString();
  }

  // --- MAKE SURE YOU INCLUDE THIS RETURN BLOCK ---
  return {
    props: {
      frontmatter,
      slug,
      content: marked(content),
    },
  };
}
