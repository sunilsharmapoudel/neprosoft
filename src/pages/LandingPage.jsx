import Appointment from "../components/Appointment"
import HomeAbout from "../components/HomeAbout"
import HomeHero from "../components/HomeHero"
import HomeServices from "../components/HomeServices"
import TechUse from "../components/TechUse"

const LandingPage = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <HomeHero />
        <HomeServices />
        <TechUse />
        <Appointment />
      </div>
    </>
  )
}

export default LandingPage
