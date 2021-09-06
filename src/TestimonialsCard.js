import React from 'react'
import "./TestimonialsCard.css"
import Avatar from '@material-ui/core/Avatar'
const TestimonialsCard = ({msg, pic, name, time, mark}) => {
    return (
        <div className="testimonial-card">
            <p>{msg}</p>
            <div className="student-info">
                <div className="testimonial-card-avatar">
                    <Avatar src={pic}></Avatar>
                    <div>
                        <h4>{name}</h4>
                        <p>{time}</p>
                    </div>
                </div>
                <img src={mark} alt="" />
            </div>
        </div>
    )
}

export default TestimonialsCard
