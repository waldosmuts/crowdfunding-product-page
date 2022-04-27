import Pledge from "./Pledge"

export default function PledgeModal(props) {
    const pledgeElements = props.pledgeData.map(pledge => {
        return (
            <Pledge
                key={pledge.min}
                pledgeData={pledge}
                currencyFormat={props.currencyFormat}
                selectedPledge={props.selectedPledge}
                setSelectedPledge={props.setSelectedPledge}
                pledgeAmount={props.pledgeAmount}
                setPledgeAmount={props.setPledgeAmount}
            />
        )
    })

    return (
        <div className="bg-white w-full rounded-lg p-6 md:p-12 relative top-32 md:max-w-[730px] mx-auto">
            <button className="absolute top-8 right-6 fill-black opacity-40 hover:opacity-100" onClick={() => (props.setShowModal(false))}>
                <svg className="pointer-events-none" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" /></svg>
            </button>
            <h2 className="font-bold text-lg md:text-2xl">Back this project</h2>
            <p className="text-sm md:text-base text-dark-gray mt-6 md:mt-4 md:font-medium leading-6">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            <form onSubmit={props.handleSubmit} className="flex flex-col gap-y-6 mt-6">
                {pledgeElements}
            </form>
        </div>
    )
}