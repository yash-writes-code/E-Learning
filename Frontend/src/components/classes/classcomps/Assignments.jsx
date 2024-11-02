import React from 'react'
import '../Class.css'
// import { Uploader, FilesPropModel } from '@syncfusion/ej2-inputs';
const Assignments = () => {
    // let button = document.getElementById("btn");
    // button.addEventListener("click", ()=>{
    //     alert("You clicked!")
    // })
    const click1 = (e1) => {
        // alert("you clicked !")
        let div = document.createElement("div")
        let file = document.getElementById("formFileLg1").value
        div.innerHTML="Submitted File : " + file
        div.setAttribute("class", "created")
        document.querySelector(".result1").append(div)
        e1.preventDefault()
    }    
    const click2 = (e2) => {
        // alert("you clicked !")
        let div = document.createElement("div")
        let file = document.getElementById("formFileLg2").value
        div.innerHTML="Submitted File : " + file
        div.setAttribute("class", "created")
        document.querySelector(".result2").append(div)
        e2.preventDefault()
    }
    const click3 = (e3) => {
        // alert("you clicked !")
        let div = document.createElement("div")
        let file = document.getElementById("formFileLg3").value
        div.innerHTML="Submitted File : " + file
        div.setAttribute("class", "created")
        document.querySelector(".result3").append(div)
        e3.preventDefault()
    }
    return(
        <div className="classContainer">
            <div className="classHandle1">
                <img src="https://s39613.pcdn.co/wp-content/uploads/2022/04/flat-design-objects-work-desk-office-desk-books-computer-and-vector-id532666883.jpg" alt=""/>
            </div>
            <div className="things1">
                <div className="assignments">
                    <p className='heading'>Assignments</p>
                    <div className="assignsubmit">
                    <div>
                        <p>Assignment 1</p>
                        <div className="form">
                            <div>
                            <form action="get" className='form1'>
                              <input className="form-control form-control-lg" id="formFileLg1" type="file"/>
                              <button type="submit" id='btn' onClick={click1}>Submit</button>
                              <div className="result1 contforcreate"></div>
                            </form> 
                            </div>
                            <div className="deadline">deadline : 23/10/2024</div>
                        </div>
                        <p>Assignment 2</p>
                        <div className="form">
                            <div>
                            <form action="get">
                              <input className="form-control form-control-lg" id="formFileLg2" type="file"/>
                              <button type="submit" onClick={click2}>Submit</button>
                              <div className="result2"></div>
                            </form>
                            </div>
                            <div className="deadline">deadline : 23/10/2024</div>
                        </div> 
                        <p>Assignment 3</p>
                        <div className="form">
                            <div>
                            <form action="get">
                              <input className="form-control form-control-lg" id="formFileLg3" type="file"/>
                              <button type="submit" onClick={click3}>Submit</button>
                              <div className="result3"></div>
                            </form> 
                            </div>
                            <div className='deadline'>deadline : 24/10/2024</div>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
            <div className="things2">
                <div className="doubts">Doubts</div>
                <div className="resources">Resources</div>
            </div>
        </div>
    )
}

export default Assignments