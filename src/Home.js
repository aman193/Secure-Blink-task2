import React from 'react'
import './Home.css'
import Information from './Information'
function Home() {
    return (
        <div className="home">
            <div className="home-top">
                <div className="home-left">
                    <h2 className="title">
                        Anytime, AnyWhere Learn On Your Schedule From Any Device
                    </h2>
                    <p class="text">
                        We Believe everyone has the capacity to be creative Course Pro is a place
                        where people develop their own potential
                    </p>
                    <button className="btn">Lets's Get Start</button>
                </div>
                <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGUlMjBsZWFybmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"/>
            </div>
            <div className="home-bottom">
                <Information name="Total Students" value="5140"></Information>
                <Information name="Partners" value="4123"></Information>
                <Information name="Affiliate Distributions" value="4.18 LAC"></Information>

            </div>
        </div>
    )
}

export default Home
