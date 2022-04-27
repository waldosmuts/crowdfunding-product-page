import { useState } from "react"
import ProductLogo from "../images/logo-mastercraft.svg"
import Pledge from "./Pledge"
import PledgeModal from "./modals/PledgeModal"
import CompleteModal from "./modals/CompleteModal"

export default function Main(props) {
    const [showModal, setShowModal] = useState(false)
    const [showCompleteModal, setShowCompleteModal] = useState(false)
    const [selectedPledge, setSelectedPledge] = useState(-1)
    const [pledgeAmount, setPledgeAmount] = useState(0)
    const [bookmarked, setBookmarked] = useState(false)

    const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    })

    const numberFormat = new Intl.NumberFormat('en-US')

    const pledgeElements = []
    for (const pledge of props.productData.pledges) {
        if (pledge.min > 24) {
            pledgeElements.push(
                <Pledge
                    key={pledge.min}
                    pledgeData={pledge}
                    currencyFormat={currencyFormat}
                    setShowModal={setShowModal}
                    selectPledge={() => setSelectedPledge(pledge.min)}
                />)
        }
    }

    function toggleBookmark() {
        setBookmarked(!bookmarked)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setShowModal(false)
        setShowCompleteModal(true)
        props.setProductData(prevProductData => {
            return ({
                ...prevProductData,
                backed: prevProductData.backed + Number(pledgeAmount),
                backers: (Number(pledgeAmount) > 0 ? prevProductData.backers + 1 : prevProductData.backers)
            })
        })
    }

    const goalPercentageTracker = (props.productData.backed / props.productData.goal) * 100

    return (
        <main className="flex flex-col mx-auto gap-6 px-6 md:px-0 relative -top-14 md:-top-24 pb-6 md:max-w-[730px]">
            <section className="flex flex-col w-full px-6 md:p-12 pt-12 pb-10 items-center bg-white rounded-lg relative">
                <img className="absolute -top-7" src={ProductLogo} alt="Product Logo" />
                <h1 className="font-bold text-xl md:text-3xl text-center mx-6">Mastercraft Bamboo Monitor Riser</h1>
                <p className="text-sm md:text-base text-dark-gray font-medium text-center leading-6 mt-4">{"A beautiful & handcrafted monitor stand to reduce neck and eye strain."}</p>
                <div className="flex justify-between gap-2 md:gap-0 w-full mt-5 md:mt-10">
                    <button className="bg-moderate-cyan hover:bg-dark-cyan transition-colors text-white font-medium w-full md:w-auto md:px-10 rounded-full active:outline-none" onClick={() => (setShowModal(true))}>Back this project</button>
                    <button className="shrink-0 flex items-center bg-dark-gray bg-opacity-10 hover:opacity-60 rounded-full focus:outline-none" onClick={toggleBookmark}>
                        <svg className="pointer-events-none" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <circle className={`${bookmarked ? "fill-dark-cyan" : "fill-[#2F2F2F]"} transition-colors`} cx="28" cy="28" r="28" />
                                <path className={`${bookmarked ? "fill-white" : "fill-[#B1B1B1]"} transition-colors`} d="M23 19v18l5-5.058L33 37V19z" />
                            </g>
                        </svg>
                        <span className={`font-bold ${bookmarked ? "text-dark-cyan" : "text-dark-gray"} hidden pl-4 pr-6 md:block pointer-events-none transition-colors`}>Bookmark</span>
                    </button>
                </div>
            </section>
            <section className="flex flex-col w-full px-6 pt-8 pb-10 md:p-12 items-center bg-white rounded-lg">
                <div className="flex flex-col w-full items-center md:flex-row md:justify-between">
                    <div className="flex flex-col items-center md:justify-center md:items-start md:w-full">
                        <span className="font-bold text-[32px]">{currencyFormat.format(props.productData.backed)}</span>
                        <span className="text-dark-gray text-sm md:text-base mt-1 font-medium">{`of ${currencyFormat.format(props.productData.goal)} backed`}</span>
                    </div>
                    <div className="h-px md:h-16 w-20 md:w-px md:mr-12 bg-dark-gray opacity-30 mt-5 md:mt-0" />
                    <div className="flex flex-col items-center md:justify-center md:items-start md:w-full">
                        <span className="font-bold text-[32px] mt-5 md:mt-0">{numberFormat.format(props.productData.backers)}</span>
                        <span className="text-dark-gray text-sm md:text-base mt-1 font-medium">total backers</span>
                    </div>
                    <div className="h-px md:h-16 w-20 md:w-px md:mr-12 bg-dark-gray opacity-30 mt-5 md:mt-0" />
                    <div className="flex flex-col items-center md:justify-center md:items-start md:w-full">
                        <span className="font-bold text-[32px] mt-5 md:mt-0">{numberFormat.format(props.productData.deadline)}</span>
                        <span className="text-dark-gray text-sm md:text-base mt-1 font-medium">days left</span>
                    </div>
                </div>
                <div className="flex justify-start w-full h-3 mt-7 md:mt-9 relative">
                    <div className="absolute top-0 left-0 h-full w-full bg-black opacity-5 rounded-full"></div>
                    <div style={{ width: goalPercentageTracker >= 100 ? "100%" : `${goalPercentageTracker}%` }} className={`bg-moderate-cyan h-full rounded-full shrink-0 relative flex items-center justify-center`}>
                        {
                            goalPercentageTracker >= 100 ?
                                <span className="absolute text-xs text-white bg-dark-cyan py-1 px-2 rounded-lg">Project Funded</span> :
                                <span className="absolute text-xs text-white bg-dark-cyan py-1 px-2 rounded-lg">{`${goalPercentageTracker.toFixed()}%`}</span>
                        }
                    </div>
                </div>
            </section>
            <section className="flex flex-col w-full px-6 pt-8 pb-10 md:p-12 bg-white rounded-lg">
                <h2 className="font-bold text-lg md:text-xl">About this project</h2>
                <p className="text-dark-gray text-sm md:text-base mt-6 md:mt-8 font-medium leading-[1.5rem] md:leading-[1.8rem]">
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                </p>
                <p className="text-dark-gray text-sm md:text-base mt-6 md:mt-8 font-medium leading-[1.5rem] md:leading-[1.8rem]">
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                    to allow notepads, pens, and USB sticks to be stored under the stand.
                </p>
                <div className="flex flex-col gap-y-6 mt-8 md:mt-10">
                    {pledgeElements}
                </div>
            </section>
            <div className={`main--modal fixed top-0 left-0 px-6 w-full h-full overflow-scroll z-30 ${!showModal && "hidden"}`}>
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" />
                <PledgeModal
                    pledgeData={props.productData.pledges}
                    setproductData={props.setproductData}
                    currencyFormat={currencyFormat}
                    selectedPledge={selectedPledge}
                    setSelectedPledge={setSelectedPledge}
                    setShowModal={setShowModal}
                    setShowCompleteModal={setShowCompleteModal}
                    pledgeAmount={pledgeAmount}
                    setPledgeAmount={setPledgeAmount}
                    handleSubmit={handleSubmit}
                />
            </div>
            <div className={`main--modal fixed flex justify-center items-center top-0 left-0 px-6 w-full h-full overflow-scroll z-30 ${!showCompleteModal && "hidden"}`}>
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" />
                <CompleteModal
                    setShowCompleteModal={setShowCompleteModal}
                    setSelectedPledge={setSelectedPledge}
                    handleSubmit={handleSubmit}
                />
            </div>
        </main>
    )
}