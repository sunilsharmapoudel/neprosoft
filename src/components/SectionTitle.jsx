const SectionTitle = ({ title, desc }) => {
    return (
        <div>
            <div className="flex  items-center space-x-10 max-md:space-x-5">
                <h2 className="bg-[var(--secondary)] rounded-md p-1 text-2xl text-white">{title}</h2>
                <p className="w-3/4 text-sm">{desc}</p>
            </div>
        </div>
    )
}

export default SectionTitle
