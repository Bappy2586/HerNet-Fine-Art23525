import React from 'react'
import Explore from "../assets/save.jpg";


function demo() {
  return (
    <div className='row'>
        <div className='col-md-5' style={{padding:"140px"}}>
            <p>HerNet, Asia's 1st TV on Women's Well-Being, focuses on women,
            children, and third-gender community.</p>
            <div style={{padding:"50px"}}><button className='btn btn-dark'>EXPLORE</button></div>
        </div>
        <div className='col-md-2'></div>
        <div className='col-md-5' style={{padding:"140px"}}>
          <img className="d-block w-100 rounded" src={Explore} alt="Slide 3" />
        </div>
    </div>
  )
}

export default demo
