import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import Head from 'next/head';

import styles from '../../../styles/blog.module.css';

export default function BlogPostEs({ frontmatter, content, slug }) {
  return (
    <>
      <Head>
        <title>{`${frontmatter.title} | CTMBOX Español`}</title>
        <meta name="description" content={frontmatter.social_summary} />
      </Head>

      <div className={styles.container}>
        <article className={styles.article}>
          
          <Link href="/es/blog" style={{ textDecoration: 'none', color: '#666', display: 'inline-block', marginBottom: '1rem' }}>
             &larr; Volver a Noticias
          </Link>

          <header className={styles.header} style={{ textAlign: 'left', borderBottom: '1px solid #eee' }}>
            <span style={{ backgroundColor: '#0b0b0bff', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
              {frontmatter.categories && frontmatter.categories[0]}
            </span>
            <h1 style={{ fontSize: '2.5rem', margin: '15px 0' }}>{frontmatter.title}</h1>
            <p className={styles.meta}>
              {frontmatter.date.split('T')[0]} • 🇪🇸 Español
            </p>
          </header>

          {/* FIX: Used &quot; instead of " */}
          {frontmatter.social_summary && (
            <div className={styles.socialBox} style={{ borderLeftColor: '#090909ff', backgroundColor: '#FFE8E5' }}>
              &quot;{frontmatter.social_summary}&quot;
            </div>
          )}

          {/* FIX: Added eslint-disable */}
          {frontmatter.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={frontmatter.image} alt={frontmatter.title} />
          )}

          <div 
            dangerouslySetInnerHTML={{ __html: content }} 
            style={{ lineHeight: '1.8', fontSize: '1.1rem' }}
          />
          
        </article>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const folderPath = path.join('content/blog/es');
  if (!fs.existsSync(folderPath)) return { paths: [], fallback: false };
  const files = fs.readdirSync(folderPath);
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('content/blog/es', slug + '.md'), 'utf-8');
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