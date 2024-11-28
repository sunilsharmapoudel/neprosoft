
const ScheduleButton = (props) => {
    return (

        <span className={`h-max ${props.width} ${props.fontsize} border-2 p-2 max-md:p-1 rounded-xl text-white cursor-pointer bg-gradient-to-r from-[#5e17eb] to-[#8c52ff] hover:bg-blue-700 hover:border-blue-600 hover:text-white transition-all`}>{props.text}</span>
    )
}



export default ScheduleButton

