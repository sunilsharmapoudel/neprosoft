const BlogsPage = () => {
  return (
    <div className="bg-white text-[--primary] py-16">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-[--primary] mb-10">Our Blog</h1>
          <p className="text-lg font-light text-gray-700 max-w-3xl mx-auto">
            Explore our latest articles on technology, software development, industry trends, and more. Stay informed and inspired by our insights.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Blog Post 1"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-[--primary] mb-4">
                The Future of Software Development: Trends to Watch
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                In this article, we explore the upcoming trends in software development that are shaping the future of technology...
              </p>
              <a
                href="/blog/the-future-of-software-development"
                className="text-[--secondary] hover:text-[--primary] text-lg font-semibold"
              >
                Read More &rarr;
              </a>
            </div>


            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Blog Post 2"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-[--primary] mb-4">
                Building Scalable Web Applications with React
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Learn how to build scalable and maintainable web applications using React.js and best practices for managing state...
              </p>
              <a
                href="/blog/building-scalable-web-applications-with-react"
                className="text-[--secondary] hover:text-[--primary] text-lg font-semibold"
              >
                Read More &rarr;
              </a>
            </div>


            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Blog Post 3"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-[--primary] mb-4">
                How to Optimize Your Website's Performance
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Website performance is critical for user experience and SEO. In this blog, we discuss how to optimize your website's load time...
              </p>
              <a
                href="/blog/how-to-optimize-your-websites-performance"
                className="text-[--secondary] hover:text-[--primary] text-lg font-semibold"
              >
                Read More &rarr;
              </a>
            </div>


            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Blog Post 4"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-[--primary] mb-4">
                Mobile App Development: Trends for 2024
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                The mobile app landscape is rapidly evolving. Discover the trends that will define mobile development in 2024...
              </p>
              <a
                href="/blog/mobile-app-development-trends-2024"
                className="text-[--secondary] hover:text-[--primary] text-lg font-semibold"
              >
                Read More &rarr;
              </a>
            </div>


            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Blog Post 5"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-[--primary] mb-4">
                How Cloud Computing is Changing the IT Industry
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Cloud computing has revolutionized the way businesses operate. Learn about its impact on IT infrastructure and future potential...
              </p>
              <a
                href="/blog/how-cloud-computing-is-changing-it"
                className="text-[--secondary] hover:text-[--primary] text-lg font-semibold"
              >
                Read More &rarr;
              </a>
            </div>


            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Blog Post 6"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-[--primary] mb-4">
                The Importance of Cybersecurity in Modern Software
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                With increasing threats to data privacy, cybersecurity has never been more important. Read about strategies to protect your software...
              </p>
              <a
                href="/blog/cybersecurity-in-modern-software"
                className="text-[--secondary] hover:text-[--primary] text-lg font-semibold"
              >
                Read More &rarr;
              </a>
            </div>
          </div>
        </section>


        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-[--primary] mb-4">
            Stay Up-to-Date with Our Latest Insights
          </h2>
          <p className="text-lg font-light text-gray-700 mb-6">
            Don't miss out on future articles, industry news, and tips. Subscribe to our newsletter to get the latest posts delivered to your inbox.
          </p>
          <a
            href="#"
            className="inline-block bg-[--secondary] text-white py-3 px-6 rounded-lg text-xl hover:bg-[--primary] transition-all"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
