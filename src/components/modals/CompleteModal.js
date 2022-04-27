import CheckIcon from "../../images/icon-check.svg"

export default function CompleteModal(props) {
    function handleClick() {
        props.setShowCompleteModal(false)
        props.setSelectedPledge(-1)
    }

    return (
        <div className="flex flex-col items-center bg-white w-full rounded-lg pt-8 pb-12 px-6 z-40 max-w-[540px]">
            <img className="md:scale-125" src={CheckIcon} alt="" />
            <h3 className="text-lg md:text-2xl font-bold mt-4 md:mt-12">Thanks for your support!</h3>
            <p className="text-sm md:text-base md:font-medium text-dark-gray text-center mt-6 leading-[1.5rem] md:leading-7">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            <button className="bg-moderate-cyan hover:bg-dark-cyan rounded-full text-white text-sm font-medium py-3 px-7 md:px-8 mt-8" onClick={handleClick}>Got it!</button>
        </div>
    )
}