import ScheduleButton from "./ScheduleButton"

const HomeHero = () => {
    return (
        <>
            <div className="flex flex-row   ">
                <div className="flex flex-col flex-1 bg-slate-500">
                    <h2 className="text-6xl">Neprosoft develops what your business needs for success</h2>

                    <p>
                        At Neprosoft, we craft custom software, dynamic websites, and powerful mobile apps that drive your success. With expert IT consulting and seamless support, we bring your vision to life. Start strong today—grow smarter with us tomorrow!</p>
                    <p>
                    Neprosoft: Innovate. Build. Grow.
                    </p>

                    <ScheduleButton />
                </div>
                <div className="flex flex-1 bg-slate-700">
                    <img src="./images/sq-logo.svg" alt="" className="" />
                </div>
            </div>
        </>
    )
}

export default HomeHero
