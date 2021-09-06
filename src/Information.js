import React from 'react'
import './Information.css'
const Information = ({name, value}) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <h2>{value}</h2>
        </div>
    )
}

export default Information
