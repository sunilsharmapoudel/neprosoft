import ServicesCard from "./ServicesCard"

const HomeServices = () => {
    return (
        <>
            <div className="flex flex-row mt-8">
                <div className="flex flex-col gap-16 w-full">
                    <div className="flex  items-center space-x-10 max-md:space-x-5">
                        <h2 className="bg-[var(--secondary)] rounded-md p-1 text-2xl text-white">Services</h2>
                        <p className="w-3/4 text-sm">Neprosoft offers custom software, web and mobile app development, reliable maintenance, and expert IT consulting to drive your business forward. These services includes:</p>
                    </div>
                    <div className="flex flex-wrap justify-evenly">
                        <ServicesCard title="Web Development" image="" />
                        <ServicesCard title="Custom Software Development" image="" color="#1f1f1f" textColor="white" />
                        <ServicesCard title="Mobile App Development" image="" color="#1f1f1f" textColor="white" />
                        <ServicesCard title="Software Maintenance and Support" image="" />
                        <ServicesCard title="Desktop Software Development" image="" />
                        <ServicesCard title="IT Consulting" image="" color="#1f1f1f" textColor="white" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeServices
