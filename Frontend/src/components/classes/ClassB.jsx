import React from 'react'
import './Class.css'
import { Link } from 'react-router-dom'
const ClassB = () => {
    const send = (e) => {
        let doubt = document.querySelector(".doubt").value;
        let write = document.querySelector(".write");
        let newer = document.createElement("div");
        newer.setAttribute("class", "created")
        newer.innerHTML=doubt;
        write.before(newer)
    }
    return(
        <div className="classContainer">
            <div className="classHandle">
                <img src="https://cdn.vectorstock.com/i/500p/81/78/school-class-students-studying-kids-in-classroom-vector-52958178.jpg" alt=""/>
            </div>
            <div className="things">
                <div className="thing thing1">
                    <p>Announcements</p>
                    <div className="a1">
                        <img src="https://c8.alamy.com/comp/2ATH656/colourful-female-face-circle-in-flat-style-cartoon-vector-icon-modern-design-woman-face-person-silhouette-avatar-profile-round-portrait-isolated-2ATH656.jpg" alt="" />
                        <p>Our first class will be held on coming Monday</p>
                    </div>
                    <div className="a1">
                        <img src="https://c8.alamy.com/comp/2ATH656/colourful-female-face-circle-in-flat-style-cartoon-vector-icon-modern-design-woman-face-person-silhouette-avatar-profile-round-portrait-isolated-2ATH656.jpg" alt="" />
                        <p>Your first assignment has been posted.</p>
                    </div>
                    <div className="a1">
                        <img src="https://c8.alamy.com/comp/2ATH656/colourful-female-face-circle-in-flat-style-cartoon-vector-icon-modern-design-woman-face-person-silhouette-avatar-profile-round-portrait-isolated-2ATH656.jpg" alt="" />
                        <p>Class will begin at 10:00 a.m.</p>
                    </div>
                </div>
                <div className="thing thing2">
                    <p>Doubts</p>
                    <div className="write">
                        <input type="text" className='doubt' placeholder='You can enter your doubts here'/>
                        <button className='send' onClick={send}>Send</button>
                    </div>
                </div>
                <div className="thing thing3">
                    <p><Link to="/assignments">Assignments</Link></p>
                </div>
                <div className="thing thing4">
                    <p><Link to="/resources">Resources</Link></p>
                </div>
            </div>
        </div>
    )
}

export default ClassB