export default function Pledge(props) {
    function handleClick() {
        props.setShowModal(true)
        props.selectPledge()
    }

    return (
        <div className={`flex flex-col items-start p-6 md:p-8 border border-dark-gray border-opacity-20 rounded-lg ${props.pledgeData.left === 0 && "opacity-50 pointer-events-none"}`}>
            <div className="flex flex-col w-full md:flex-row md:justify-between">
                <h3 className="font-bold text-sm md:text-lg">{props.pledgeData.title}</h3>
                <span className="text-sm md:text-base text-moderate-cyan font-medium mt-1 md:mt-0">Pledge {props.currencyFormat.format(props.pledgeData.min)} or more</span>
            </div>
            <p className="text-sm md:text-base text-dark-gray font-medium mt-6 leading-6">{props.pledgeData.description}</p>
            <div className="flex flex-col md:w-full md:flex-row md:justify-between">
                <span className="text-dark-gray mt-6 flex items-center gap-2"><span className="text-black text-3xl font-bold">{props.pledgeData.left}</span><span>left</span></span>
                <button className={`${props.pledgeData.left === 0 ? "bg-dark-gray" : "bg-moderate-cyan hover:bg-dark-cyan"} rounded-full text-white text-sm font-medium py-3 px-9 mt-6 transition-colors`} onClick={handleClick}>{props.pledgeData.left === 0 ? "Out of Stock" : "Select Reward"}</button>
            </div>
        </div>
    )
}