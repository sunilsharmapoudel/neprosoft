
const ActionButton = ({ width, text }) => {
    return (

        <span className={`h-max ${width} text-xl p-2 border-2 max-md:p-2 rounded-xl text-white cursor-pointer bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:border-blue-600 hover:text-white transition-all`}>{text}</span>
    )
}



export default ActionButton

