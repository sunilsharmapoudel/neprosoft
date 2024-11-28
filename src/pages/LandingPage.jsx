import HomeHero from "../components/HomeHero"
import HomeServices from "../components/HomeServices"

const LandingPage = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <HomeHero />
        <HomeServices />
      </div>
    </>
  )
}

export default LandingPage
