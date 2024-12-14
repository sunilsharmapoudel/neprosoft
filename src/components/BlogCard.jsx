const BlogCard = ({ thumbnail, title, pubDate }) => {
    return (
        <>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <img
                    src={thumbnail}
                    alt="Blog Post 2"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-[--primary] mb-4">
                    {title}
                </h3>
                <div className="flex items-center justify-between text-[--secondary] text-lg font-semibold">
                    <a
                        href="/blog/building-scalable-web-applications-with-react"
                        className=" hover:text-[--primary] "
                    >
                        Read More &rarr;
                    </a>
                    <span>{pubDate}</span>
                </div>

            </div>
        </>
    )
}

export default BlogCard
