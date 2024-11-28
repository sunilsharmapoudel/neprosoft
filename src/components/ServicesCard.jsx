import { Link } from "react-router-dom"
import { FcLink } from "react-icons/fc";
const ServicesCard = () => {
    return (
        <>
            <div className=" border-[#252529] border-2 rounded-2xl p-4 border-b-8 w-[45%]">
                <div className="flex justify-between">
                    <div className="flex flex-col justify-around">
                        <h3 className='text-3xl font-bold'>Web Development</h3>
                        <div className="inline-flex space-x-2 items-center">
                            <FcLink style={{ backgroundColor: "#252529", fontSize: '30px', borderRadius: "50%", padding: "4px" }} />
                            <span className="text-2xl"><Link to="/services">Learn More</Link></span>
                        </div>
                    </div>
                    <div className="w-max">
                        <img className="w-max" src="/images/website-development.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesCard
