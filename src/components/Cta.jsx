import ActionButton from "./ActionButton"

const Cta = ({ heading, desc, btnText }) => {
    return (
        <>
            <div className="text-center mt-12 bg-[--accent] rounded-lg p-5">
                <h2 className="text-2xl font-semibold text-[--primary] mb-4">{heading}</h2>
                <p className="text-lg font-light text-gray-700 mb-6">
                    {desc}
                </p>
                <ActionButton text={btnText} />
            </div>
        </>
    )
}

export default Cta
