import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function BlogIndex({ posts }) {
  return (
    <div className="blog-container">
      <h1>CTMBOX Blog (English)</h1>
      <div className="posts-grid">
        {posts.length === 0 && <p>No posts found. Start your engine!</p>}
        
        {posts.map((post) => (
          <div key={post.slug} className="post-card">
            {post.frontmatter.image && (
              <img src={post.frontmatter.image} alt={post.frontmatter.title} style={{maxWidth: '100%'}} />
            )}
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.social_summary}</p>
            <small>{post.frontmatter.date}</small>
            <br />
            <Link href={`/blog/${post.slug}`} style={{ color: 'blue', textDecoration: 'underline' }}>
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // 1. Define where the files are
  const filesPath = path.join(process.cwd(), 'content/blog/en');
  
  // 2. Read the directory
  const files = fs.readdirSync(filesPath);

  // 3. Loop through files and extract metadata
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join(filesPath, filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  // 4. Sort by date (newest first)
  posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return {
    props: {
      posts,
    },
  };
}