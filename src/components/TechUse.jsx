import SectionTitle from "./SectionTitle"
import TechCard from "./TechCard"

const TechUse = () => {
    const technologyUse = [{ id: 1, technology: "React", logo: "/images/website-development.svg" },
    { id: 2, technology: "NextJs", logo: "/images/website-development.svg" },
    { id: 3, technology: "NextJs", logo: "/images/website-development.svg" },
    { id: 4, technology: "NextJs", logo: "/images/website-development.svg" },
    {id: 4, technology: "NextJs", logo: "/images/website-development.svg" },
    {id: 5, technology: "NextJs", logo: "/images/website-development.svg" },
    ]
    return (
        <>
            <section className="flex flex-row mt-8 mb-10 shadow-[--primary]">
                <div className="flex flex-col gap-16">
                    <SectionTitle title="Technology we use" desc="Neprosoft offers custom software, web and mobile app development, reliable maintenance, and expert IT consulting to drive your business forward. These services includes:" />
                    <div className="flex flex-wrap justify-center gap-10">
                        {
                            technologyUse.map((tech) =>
                                <TechCard key={tech.id} technology={tech.technology} logo={tech.logo} />

                            )
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default TechUse
