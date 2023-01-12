import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();

  return (
    <div>
      <h1>The page for blog posts</h1>
    </div>
  );
}

export default BlogPostsPage;
