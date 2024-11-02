import React from 'react'
import './join.css'
const JoinAc = () => {
    const joinreq1 = (e) => {
        let div=document.createElement("div");
        let join = document.querySelector(".join1");
        div.innerHTML="Request Sent !";
        div.setAttribute("class", "createreq");
        join.append(div);
    }
    const joinreq2 = (e) => {
        let div=document.createElement("div");
        let join = document.querySelector(".join2");
        let canc = document.querySelector(".cancelreq");
        div.innerHTML="Request Sent !";
        div.setAttribute("class", "createreq");
        join.append(div);
        // canc.classList.toggle("cancelreq");
    }
    const canceljoin2 = (e) => {
        let present = document.querySelector(".createreq");
        present.classList.toggle(".cancelreq");
    }
    const joinreq3 = (e) => {
        let div=document.createElement("div");
        let join = document.querySelector(".join3");
        div.innerHTML="Request Sent !";
        div.setAttribute("class", "createreq");
        join.append(div);
    }
    return(
        <>
          <div className="allClass">
            <div className="join join1">
                <p>Class-A</p>
                <button onClick={joinreq1}>Join +</button>
            </div>
            <div className="join join2">
                <p>Class-B</p>
                <button onClick={joinreq2}>Join +</button>
                {/* <div className="cancelreq cancelreq2">
                    <button onClick={canceljoin2}>Cancel Request</button>
                </div> */}
            </div>
            <div className="join join3">
                <p>Class-C</p>
                <button onClick={joinreq3}>Join +</button>
            </div>
          </div>
        </>
    )
}

export default JoinAc