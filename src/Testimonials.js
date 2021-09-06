import React from 'react'
import "./Testimonials.css"
import TestimonialsCard from "./TestimonialsCard"
import anshul from "./img/1.png"
import quote from "./img/quote.png"
import rajkumar from "./img/2.png"
const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="testimonial-top">
                <p>Testimonials</p>
                <h2>Check Out What Our Students Think About Us</h2>
            </div>
            <div className="testimonial-bottom">
                <TestimonialsCard
                    msg = "It's A Comprehensive Online Learning Platform For Everyone Looking To Learn And Course Pro. Providing This Platform Which Is Very Beneficial For Practicals. Students Can Revise Everything At Home Like Dissection And Slides"
                    pic = {anshul}
                    name = "Anshul Jain"
                    time = "Yesterday"
                    mark = {quote}
                ></TestimonialsCard>
                <TestimonialsCard
                    msg = "It's A Comprehensive Online Learning Platform For Everyone Looking To Learn And Course Pro. Providing This Platform Which Is Very Beneficial For Practicals. Students Can Revise Everything At Home Like Dissection And Slides"
                    pic = {rajkumar}
                    name = "Rajkumar Jain"
                    time = "Yesterday"
                    mark = {quote}
                ></TestimonialsCard>
            </div>
        </div>
    )
}

export default Testimonials
