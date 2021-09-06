import React from 'react'
import "./EarnerCard.css"
const EarnerCard = ({img, amount}) => {
    return (
        <div className="card">
            <img src={img} alt="" />
            <p>{amount}</p>
        </div>
    )
}

export default EarnerCard
