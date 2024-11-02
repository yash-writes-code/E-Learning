import React from 'react'
import {Link} from 'react-router-dom'
import './join.css'
const Join = () => {
    return(
        // <div style={{
        //     color: 'black',
        // }}>
        //     <Link style={{
        //     color: 'black',
        // }} to={"/classA"}>ClassA</Link>
        // </div>
        <>
          <div className="allClass">
            <div className="class classA">
              <div className="item1"><Link to={"/classA"}>Class-A</Link></div>
              {/* <div className="item2">+ Join</div> */}
            </div>
            <div className="class classB">
              <div className="item1"><Link to={"/classB"}>Class-B</Link></div>
              {/* <div className="item2">+ Join</div> */}
            </div>
            <div className="class classC">
              <div className="item1"><Link to={"/classC"}>Class-C</Link></div>
              {/* <div className="item2">+ Join</div> */}
            </div>
          </div>
        </>
    )
}

export default Join