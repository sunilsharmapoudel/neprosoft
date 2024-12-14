const PageTitle = ({title, desc}) => {
    return (
        <>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-semibold text-[--primary] mb-10">{title}</h1>
                <p className="text-lg font-light text-gray-700 max-w-3xl mx-auto">
                    {desc}
                </p>
            </div>
        </>
    )
}

export default PageTitle
