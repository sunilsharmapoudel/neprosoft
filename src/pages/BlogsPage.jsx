import BlogCard from "../components/BlogCard";
import Newsletter from "../components/Newsletter";
import PageTitle from "../components/PageTitle";

const BlogsPage = () => {

  const blogs = [{ id: 1, thumb: "/images/website-development.svg", title: "How to install tailwindcss in react?", pubDate: "12 Oct 2024" },
  { id: 2, thumb: "/images/website-development.svg", title: "hello", pubDate: "12 Oct 2024" },
  { id: 3, thumb: "/images/website-development.svg", title: "hello", pubDate: "12 Oct 2024" },
  { id: 4, thumb: "/images/website-development.svg", title: "hello", pubDate: "12 Oct 2024" },
  ]

  return (
    <div className="bg-white text-[--primary] py-16">
      <div className="container mx-auto px-6">
        <PageTitle title="Our Blog" desc="Explore our latest articles on technology, software development, industry trends, and more. Stay informed and inspired by our insights." />

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {
              blogs.map((blog) => <BlogCard key={blog.id} thumbnail={blog.thumb} title={blog.title} pubDate={blog.pubDate} />)

            }
          </div>
        </section>
        <Newsletter />
      </div>
    </div>
  );
};

export default BlogsPage;
