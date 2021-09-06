import React from 'react'
import './Courses.css'
import CourseCard from './CourseCard'
import albert from "./img/4.png"
import wanda from "./img/3.png"
const Courses = () => {
    return (
        <div className="courses">
            <div class="courses-top">
                <h5 class="title">Courses</h5>
                <p class="heading">Our Most Popular Courses</p>
            </div>
            <div class="courses-bottom">
                <CourseCard
                    title="Business"
                    img="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    msg="Ultimate Business Intelligence Analyst A to Z Course 2021"
                    students="46,995"
                    duration="11 hr 20 mins"
                    lecture="44"
                    tutorName="Albert Hitler"
                    tutorPic={albert}
                    currfees="₹2000"
                    ></CourseCard>
                <CourseCard
                    title="Design"
                    img="https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    msg="Adobe Photoshop Training: From Beginner to Pro"
                    students="6,995"
                    duration="6 hr 20 mins"
                    lecture="24"
                    tutorName="Wanda Willson"
                    tutorPic={wanda}
                    currfees="₹3000"
                ></CourseCard>
                <CourseCard
                    title="Marketing"
                    img="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcmtldGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    msg="Social Meadia Marketing- A to Z Content Marketing Class 2021"
                    students="46,995"
                    duration="11 hr 20 mins"
                    lecture="44"
                    tutorName="Albert Hitler"
                    tutorPic={albert}
                    currfees="₹2000"
                ></CourseCard>
            </div>

        </div>
    )
}

export default Courses
