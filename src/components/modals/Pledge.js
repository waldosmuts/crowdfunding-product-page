import { useEffect } from "react"

export default function Pledge(props) {
    const pledgeSelected = props.selectedPledge === props.pledgeData.min

    useEffect(() => {
        if (pledgeSelected) {
            props.setPledgeAmount(props.pledgeData.min)
        }
        // eslint-disable-next-line
    }, [pledgeSelected])


    function handleChange(e) {
        props.setPledgeAmount(e.target.value)
    }

    return (
        <div className={`flex flex-col items-start pt-8 rounded-lg md:relative ${props.pledgeData.left === 0 && "opacity-50 pointer-events-none"} ${pledgeSelected ? "ring-2 ring-moderate-cyan pb-6 pointer-events-none" : "ring-1 ring-dark-gray ring-opacity-20 pb-8"}`}>
            <div className="flex gap-x-4 md:gap-x-6 items-center px-6">
                <label htmlFor={`pledge-${props.pledgeData.min}`} className={`w-6 md:w-5 h-6 md:h-5 rounded-full ring-1 ring-opacity-40 ring-dark-gray cursor-pointer bg-white border-white transition-colors ${pledgeSelected && "bg-moderate-cyan border-white border-5"}`} />
                <input id={`pledge-${props.pledgeData.min}`} className="hidden" type="radio" name="pledge" value={props.pledgeData.min} checked={pledgeSelected} onChange={() => (props.setSelectedPledge(props.pledgeData.min))} />
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
                    <h3 className="font-bold text-sm md:text-base hover:text-moderate-cyan transition-colors cursor-pointer" onClick={() => (props.setSelectedPledge(props.pledgeData.min))}>{props.pledgeData.title}</h3>
                    {props.pledgeData.min > 0 && <span className="text-sm md:text-base text-moderate-cyan font-medium">Pledge {props.currencyFormat.format(props.pledgeData.min)} or more</span>}
                </div>
            </div>
            <p className="text-sm md:text-[15px] md:ml-11 text-dark-gray mt-6 md:mt-4 px-6 leading-[1.5rem] md:leading-7">{props.pledgeData.description}</p>
            {props.pledgeData.min > 0 && <span className="flex items-center gap-2 text-dark-gray mt-4 px-6 md:p-0 md:m-0 md:absolute md:top-6 md:right-6"><span className="text-black text-lg font-bold">{props.pledgeData.left}</span><span className="text-sm">left</span></span>}
            {
                pledgeSelected && props.pledgeData.min !== 0 &&
                <div className="flex flex-col items-center w-full mt-4 pointer-events-auto">
                    <div className="h-px w-full bg-dark-gray opacity-30" />
                    <div className="flex flex-col items-center md:justify-between w-full md:flex-row md:px-6">
                        <span className="text-sm md:text-base text-dark-gray mt-6">Enter your pledge</span>
                        <div className="flex gap-x-4 px-6 md:px-0 mt-6">
                            <div htmlFor="pledge--input" className="flex items-center justify-center ring-1 ring-dark-gray focus-within:ring-dark-cyan ring-opacity-30 px-6 rounded-full max-w-[100px]">
                                <label className="text-sm text-dark-gray mr-2" htmlFor="pledge--input">$</label>
                                <input className="bg-transparent w-full text-sm font-bold focus:outline-none caret-dark-cyan" onChange={handleChange} id="pledge--input" type="number" min={props.pledgeData.min} value={props.pledgeAmount} />
                            </div>
                            <button className="bg-moderate-cyan hover:bg-dark-cyan transition-colors rounded-full text-white text-sm font-medium py-3 px-7 md:px-5">Continue</button>
                        </div>
                    </div>
                </div>
            }
            {
                pledgeSelected && props.pledgeData.min === 0 &&
                <div className="flex flex-col items-center w-full mt-4 pointer-events-auto">
                    <div className="h-px w-full bg-dark-gray opacity-30" />
                    <div className="flex gap-x-4 px-6 mt-6">
                        <button className="bg-moderate-cyan hover:bg-dark-cyan transition-colors rounded-full text-white text-sm font-medium py-3 px-7">Continue</button>
                    </div>
                </div>
            }
        </div >
    )
}