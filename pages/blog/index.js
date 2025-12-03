import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head'; // <--- Added missing import

// Import Styles
import styles from '../../styles/blog.module.css';
import btnStyles from '../../styles/buttons.module.css';

export default function BlogIndex({ posts }) {
  return (
    <>
      {/* ADDED HEAD FOR SEO */}
      <Head>
        <title>CTM Blog | Trucking & Logistics News</title>
        <meta name="description" content="Latest updates, safety tips, and logistics news from CTM Arizona." />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>CTM Blog</h1>
          <p>Latest updates from the road.</p>
        </header>

        <div className={styles.grid}>
          {posts.length === 0 && <p>No posts found. Start your engine!</p>}
          
          {posts.map((post) => (
            <div key={post.slug} className={styles.card}>
              {post.frontmatter.image && (
                <img src={post.frontmatter.image} alt={post.frontmatter.title} />
              )}
              
              <small className={styles.meta}>
                📅 {post.frontmatter.date.split('T')[0]}
              </small>

              <h2>{post.frontmatter.title}</h2>
              <p>{post.frontmatter.social_summary}</p>
              
              <Link href={`/blog/${post.slug}`} className={btnStyles.primary || 'button'}>
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Data Fetching (Kept the same)
export async function getStaticProps() {
  const filesPath = path.join(process.cwd(), 'content/blog/en');
  
  if (!fs.existsSync(filesPath)) return { props: { posts: [] } };

  const files = fs.readdirSync(filesPath);
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join(filesPath, filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);

    if (frontmatter.date && typeof frontmatter.date === 'object') {
      frontmatter.date = frontmatter.date.toISOString();
    }

    return { slug, frontmatter };
  });

  posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return { props: { posts } };
}