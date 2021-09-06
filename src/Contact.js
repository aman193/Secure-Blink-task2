import React from 'react'
import { useState } from "react";
import "./Contact.css"
import mobile from "./img/mobile.png"
import mail from "./img/mail.png"
import location from "./img/location.png"
import fb from "./img/fb.png"
import twitter from "./img/twitter.png"
import git from "./img/git.png"
import LinkedIn from "./img/in.png"
const Contact = () => {
    
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        let val = '1234567890'
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
            alert("Invalid Email!")
        else if(!(/^\d+$/.test(phone)))
            alert("Phone Number should contain digit only!")    
        else if(!name || !subject)
            alert("Invalid Fields!")
        else{
            setName("")
            setPhone("")
            setEmail("")
            setSubject("")
        }
    }
    return (
        <div className="contact">
            <div className="contact-top">
                <p>Contact Us</p>
                <h2>Reach Out Any Question You Have</h2>
            </div>
            <div className="contact-bottom">
                <div className="contact-bottom-left">
                    <h3>Contact Information</h3>
                    <div className="contact-info">
                        <img src={mail} alt="" />
                        <p>contact@coursepro.com</p>
                    </div>
                    <div className="contact-info">
                        <img src={mobile} alt="" />
                        <p>1800-562-895, 1800-895-877</p>
                    </div>
                    <div className="contact-info">
                        <img src={location} alt="" />
                        <p>102 Street, India</p>
                    </div>
                    <div className="social-media">
                        <h3>Social Media Channel</h3>
                        <div className="social-media-channel-icon">
                            <img src={fb} alt="" />
                            <img src={twitter} alt="" />
                            <img src={git} alt="" />
                            <img src={LinkedIn} alt="" />
                        </div>
                    </div>
                </div>
                <div className="contact-bottom-right">
                    <p>Fill up the form and our team will get back to you within 24 hours</p>
                    <form action="#" className="contact-form">
                        <div className="contact-form-right-top">
                            <div className="form-field">
                                <input 
                                    type="text" 
                                    value={name}
                                    onChange={(e)=> setName(e.target.value)}
                                    placeholder={"Name"}
                                    required />
                                <input 
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder={"Subject"}
                                    required/>
                            </div>
                            <div className="form-field">
                                <input 
                                    type="tel" 
                                    name="number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)} 
                                    id="number" 
                                    placeholder="Phone"
                                    required/>
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    required/>
                            </div>
                        </div>
                        <div className="form-field-msg">
                            <textarea placeholder="Message"></textarea>
                        </div> 
                        <div className="form-btn">
                            <button onClick={handleSubmit} type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
