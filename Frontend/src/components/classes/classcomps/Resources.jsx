import React from 'react'

const Resources = () => {
    return(
        <div className="res">
            <div className="classhandle2">
                <img src="https://study.com/cimages/course-image/student-resources_195321_large.jpg" alt="" />
            </div>
            <div className="Books">
                <p>Here are some books , you can follow : </p>
                <p>1. <a href="https://ncert.nic.in/textbook.php?kemh1=0-16">NCERT</a></p>
                <p>2. <a href="#">R.S. AGGARWAL</a></p>
                <p>3. <a href="#">R.D. SHARMA</a></p>
            </div>

            <div className="chapters">
                <p className='h1'>Video References are as follows : </p>
                <div className="chapter1 chapter">
                    <p>Chapter 1 : SETS AND RELATIONS</p>
                    <div className="vid">
                        <video src="1.mp4" controls>Sets</video>
                        <video src="2.mp4" controls>Relations</video>
                    </div>
                </div>
                <div className="chapter2 chapter">
                    <p>Chapter 2 : FUNCTIONS</p>
                    <div className="vid">
                        <video src="3.mp4" controls>Trigonometric functions</video>
                        <video src="4.mp4" controls>Domain and Range</video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources