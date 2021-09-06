import React from 'react'
import './CourseCard.css'
import time from "./img/time.png"
import calender from "./img/calender.png"
import {Avatar} from "@material-ui/core"
const CourseCard = (props) => {
    return (
        <div className="course-card">
            <div className="card-top" style={{backgroundImage: `url(${props.img})`}}>
                <p>{props.title}</p>
            </div>
            <div className="card-mid">
                <h4>{props.msg}</h4>
                <h5>{props.students} Students</h5>
                <div className="card-info">
                    <div className="time">
                        <img src={time}/>
                        <p>{props.duration}</p>
                    </div>
                    <div className="lecture">
                        <img src={calender}></img>
                        <p>{props.lecture} Lectures</p>
                    </div>
                </div>
            </div>
            <div className="tutor-info">
                <div className="card-bottom">
                    <Avatar src={props.tutorPic} sizes="small"></Avatar>
                    <p>{props.tutorName}</p>
                </div>
                <h4>{props.currfees}</h4>
                    
            </div>
        </div>
    )
}

export default CourseCard
