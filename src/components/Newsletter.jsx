import ActionButton from "./ActionButton"

const Newsletter = () => {
    return (
        <>
            <div className="mt-16 w-full h-max bg-[--accent] p-5 rounded-lg text-center">
                <h2 className="text-2xl font-semibold text-[--primary] mb-4">
                    Stay Up-to-Date with Our Latest Insights
                </h2>
                <p className="text-lg font-light text-[--secondary] mb-6">
                    Don't miss out on future articles, industry news, and tips. Subscribe to our newsletter to get the latest posts delivered to your inbox.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-5">
                    <input
                        type="email"
                        id="email"
                        className="max-sm:w-3/4 w-1/4 p-3 border border-gray-300 rounded-lg shadow-md"
                        placeholder="Enter your email"
                        required
                    />
                    <ActionButton text="Subscribe Now" width="w-30" />

                </div>
            </div>
        </>
    )
}

export default Newsletter
