import ServicesCard from "./ServicesCard"

const HomeServices = () => {
    return (
        <>
            <div className="flex flex-row mt-8">
                <div className="flex-col space-y-10">
                    <div className="flex items-center space-x-10">
                        <h2 className="bg-[#8c52ff] rounded-md p-1 text-2xl text-white">Services</h2>
                        <p className="w-3/4 text-sm">Neprosoft offers custom software, web and mobile app development, reliable maintenance, and expert IT consulting to drive your business forward. These services includes:</p>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <ServicesCard />
                        <ServicesCard />
                        <ServicesCard />


                    </div>
                </div>

            </div>
        </>
    )
}

export default HomeServices
