import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";

import styles from "../../../styles/blog.module.css";
import btnStyles from "../../../styles/buttons.module.css";

export default function BlogIndexEs({ posts }) {
  return (
    <>
      <Head>
        <title>Blog de CTM | Noticias y Logística</title>
        <meta
          name="description"
          content="Noticias y consejos de logística de CTM."
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>CTM Blog (Español)</h1>
          <p>Noticias y actualizaciones de la carretera.</p>
        </header>

        <div className={styles.grid}>
          {posts.length === 0 && <p>No hay publicaciones aún.</p>}

          {posts.map((post) => (
            <div key={post.slug} className={styles.card}>
              {post.frontmatter.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                />
              )}

              <small className={styles.meta}>
                {post.frontmatter.date.split("T")[0]} • 🇪🇸
              </small>

              <h2>{post.frontmatter.title}</h2>
              <p>{post.frontmatter.social_summary}</p>

              <Link
                href={`/es/blog/${post.slug}`}
                className={btnStyles.primary || "button"}
              >
                Leer más
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const filesPath = path.join(process.cwd(), "content/blog/es");
  if (!fs.existsSync(filesPath)) {
    return { props: { posts: [] } };
  }
  const files = fs.readdirSync(filesPath);
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join(filesPath, filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    if (frontmatter.date && typeof frontmatter.date === "object") {
      frontmatter.date = frontmatter.date.toISOString();
    }
    return { slug, frontmatter };
  });

  posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
  return { props: { posts } };
}
