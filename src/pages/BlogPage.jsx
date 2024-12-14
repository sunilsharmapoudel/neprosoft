const BlogPage = ({ post }) => {
    const samplePost = post || {
        title: "The Future of Web Development",
        author: "Sunil Sharma",
        date: "December 6, 2024",
        thumbail: "/images/kathmandu-valley.webp",
        content: `
      Web development is an ever-evolving field. With advancements in AI, cloud computing, and responsive design, 
      developers are crafting faster, more scalable applications. This article explores how emerging technologies like 
      WebAssembly, Jamstack, and AI-powered tools are redefining the landscape.

      Paragraph 2 is an ever-evolving field. With advancements in AI, cloud computing, and responsive design, 
      developers are crafting faster, more scalable applications. This article explores how emerging technologies like 
      WebAssembly, Jamstack, and AI-powered tools are redefining the landscape.-
      
      Web development is an ever-evolving field. With advancements in AI, cloud computing, and responsive design, 
      developers are crafting faster, more scalable applications. This article explores how emerging technologies like 
      WebAssembly, Jamstack, and AI-powered tools are redefining the landscape.-

      ### Key Highlights:
      1. WebAssembly allows near-native performance for web applications.
      2. Jamstack simplifies the developer experience and improves performance.
      3. AI tools are automating repetitive tasks, enabling developers to focus on creativity.

      By staying updated with these trends, developers can ensure their skills remain relevant in this competitive industry.
    `,
    };

    const { title, author, date, thumbail, content } = samplePost;

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 lg:px-20">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <img
                        src={thumbail}
                        alt={title}
                        className="w-full h-full"
                    />
                    <div className="p-6">
                        <div className='my-10'>
                            <h1 className="text-3xl font-bold text-[--primary] mb-4">{title}</h1>
                            <div className="flex items-center justify-between text-gray-600 mb-6">
                                <span>By <span className="font-medium text-gray-800">{author}</span></span>
                                <span>{date}</span>
                            </div>
                        </div>


                        <article className="prose prose-lg max-w-none text-gray-700 mb-2">
                            {content.split("-").map((paragraph, idx) => (
                                <p key={idx} className="leading-normal">
                                    {paragraph}
                                </p>
                            )
                            )}
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
