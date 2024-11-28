import ScheduleButton from "./ScheduleButton"

const HomeHero = () => {
    return (
        <>
            <div className="flex flex-row mt-8 justify-between">
                <div className="flex flex-col flex-1 flex-wrap">
                    <h2 className="bg-gradient-to-b from-[#5e17eb] to-[#8c52ff] text-6xl text-transparent bg-clip-text mb-4">Neprosoft develops what your business needs for success</h2>

                    <p className="bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] text-xl font-bold text-transparent bg-clip-text">
                        Neprosoft: Innovate. Build. Grow.
                    </p>

                    <p className="lg:text-lg w-[90%] my-10 text-left w">
                        At Neprosoft, we craft custom software, dynamic websites, and powerful mobile apps that drive your success. With expert IT consulting and seamless support, we bring your vision to life. Start strong today—grow smarter with us tomorrow!</p>


                    <ScheduleButton text="Schedule Meeting" width="w-max" fontsize="text-xl" />
                </div>
                <div className="flex">
                    <img className="w-full" src="./images/sq-logo.svg" alt="" />
                </div>

            </div>
        </>
    )
}

export default HomeHero
