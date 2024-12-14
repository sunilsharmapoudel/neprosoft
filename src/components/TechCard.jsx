const TechCard = ({ technology, logo }) => {
    return (
        <>
            <div className="h-max w-max max-sm:w-full text-center p-4 bg-slate-300 rounded-lg shadow-md hover:shadow-2xl  hover:cursor-pointer group hover:bg-[--secondary] transition-all space-y-1">
                <img src={logo} alt="React" className="inline-block group-hover:scale-105 transition-all" />
                <span className="block text-lg group-hover:text-white">{technology}</span>
            </div>
        </>
    )
}

export default TechCard
