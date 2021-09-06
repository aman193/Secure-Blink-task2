import React from 'react'
import "./TopEarners.css"
import EarnerCard from "./EarnerCard"
import first from "./img/1.png"
import second from "./img/2.png"
import third from "./img/3.png"
import fourth from "./img/4.png"
const TopEarners = () => {
    return (
        <div className="top-earners">
            <div className="earner-top">
                <p>Top Earners</p>
                <h1>Transforming Your Ideas Into Reality</h1>
            </div>
            <div className="earner-card">
                <EarnerCard
                    img = {first}
                    amount = "₹8,00,000"
                    >
                </EarnerCard>
                <EarnerCard
                    img = {second}
                    amount = "₹6,00,000"
                    >
                </EarnerCard>
                <EarnerCard
                    img = {third}
                    amount = "₹5,00,000"
                    >
                </EarnerCard>
                <EarnerCard
                    img = {fourth}
                    amount = "₹4,50,000"
                    >
                </EarnerCard>
            </div>
        </div>
    )
}

export default TopEarners
