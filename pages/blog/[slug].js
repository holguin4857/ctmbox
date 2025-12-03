import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import Head from 'next/head';

// Import ONLY the blog layout styles (We removed the unused btnStyles)
import styles from '../../styles/blog.module.css';

export default function BlogPost({ frontmatter, content, slug }) {
  return (
    <>
      <Head>
        {/* FIX: Use backticks to make the title a single string, stopping the React warning */}
        <title>{`${frontmatter.title} | CTMBOX`}</title>
        <meta name="description" content={frontmatter.social_summary} />
      </Head>

      <div className={styles.container}>
        <article className={styles.article}>
          
          {/* Back Link - We keep this as a clean text link for better UX */}
          <Link href="/blog" style={{ textDecoration: 'none', color: '#666', display: 'inline-block', marginBottom: '1rem' }}>
             &larr; Back to Index
          </Link>

          <header className={styles.header} style={{ textAlign: 'left', borderBottom: '1px solid #eee' }}>
            <span style={{ backgroundColor: '#0070f3', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
              {frontmatter.categories && frontmatter.categories[0]}
            </span>
            <h1 style={{ fontSize: '2.5rem', margin: '15px 0' }}>{frontmatter.title}</h1>
            <p className={styles.meta}>
              {frontmatter.date.split('T')[0]} • 🇺🇸 English
            </p>
          </header>

          {/* Social Hook Box */}
          {frontmatter.social_summary && (
            <div className={styles.socialBox}>
              <strong>📢 Social Hook:</strong> "{frontmatter.social_summary}"
            </div>
          )}

          {/* Featured Image */}
          {frontmatter.image && (
            <img src={frontmatter.image} alt={frontmatter.title} />
          )}

          {/* Content Body */}
          <div 
            dangerouslySetInnerHTML={{ __html: content }} 
            style={{ lineHeight: '1.8', fontSize: '1.1rem' }}
          />
          
        </article>
      </div>
    </>
  );
}

// ---------------------------------------------------------
// DATA FETCHING (No changes needed here, just keeping it intact)
// ---------------------------------------------------------

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('content/blog/en'));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('content/blog/en', slug + '.md'), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  
  if (frontmatter.date && typeof frontmatter.date === 'object') {
    frontmatter.date = frontmatter.date.toISOString();
  }

  return {
    props: {
      frontmatter,
      slug,
      content: marked(content),
    },
  };
}