import { Link } from "react-router-dom"
import { FcLink } from "react-icons/fc";
const ServicesCard = ({color, textColor='black', borderColor='black'}) => {
    return (
        <>
            <div className={`flex border-2 h-max w-max border-b-8 rounded-2xl p-4 bg-[${color}] gap-10 mb-10 border-${borderColor}`}>
                <div className="flex flex-1 flex-col justify-evenly">
                    <h3 className="inline-block bg-[var(--secondary)] rounded p-1 text-white">Web Development</h3>
                    <div className="inline-flex items-center space-x-5">
                        <FcLink size={30} />
                        <span className={`text-${textColor}`}>Learn More</span>
                    </div>
                </div>
                <div className="">
                    <Link to="/">
                        <img className="h-full w-full" src="/images/website-development.svg" alt="neprosoft-logo" />
                    </Link>
                </div>

            </div>
        </>
    )
}

export default ServicesCard
