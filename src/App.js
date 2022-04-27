import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"

export default function App() {
  const [productData, setProductData] = useState({
    backed: 89914,
    backers: 5007,
    deadline: 56,
    goal: 100000,
    pledges: [
      {
        title: "Pledge with no reward",
        min: 0,
        description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        left: -1
      },
      {
        title: "Bamboo Stand",
        min: 25,
        description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        left: 101
      },
      {
        title: "Black Edition Stand",
        min: 75,
        description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        left: 64
      },
      {
        title: "Mahogany Special Edition",
        min: 200,
        description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        left: 0
      }
    ]
  })

  return (
    <div className="app--container font-commissioner font-normal bg-white">
      <Header />
      <Main productData={productData} setProductData={setProductData} />
    </div>
  )
}