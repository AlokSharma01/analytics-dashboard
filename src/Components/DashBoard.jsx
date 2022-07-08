import React from 'react'
import "./DashBoard.css"
import { ChatBox } from './ChatBox'
import { Taskbox } from './Taskbox'


export const DashBoard = () => {
  return (
    <div>
        {/* nav */}
        <div  className="nav">
            <div  className="logo">
                <img style={{width:"100px",height:"100px"}}src="https://t3.ftcdn.net/jpg/01/59/63/48/240_F_159634840_Fa2HPb8ITrbr5gddY2eKlomVfsnu1gx6.jpg" alt="logo"/>
            </div>
            <div  className="navheading"> 
                <h3 >Analytics Dashboards</h3>
                <p style={{color:"grey"}}>Dashboard is an online report where website data from ecommerce to web analytics will be displayed</p>
            </div>
            <div className="navbutton">
                <i class="fa fa-star" aria-hidden="true"></i>
                <button className='createButton'>+ create new</button>
            </div>
        </div>

        {/* midpoint */}
        <div className='midpoint'>
            <Taskbox/>
            <ChatBox/>
        </div>

    </div>
  )
}
