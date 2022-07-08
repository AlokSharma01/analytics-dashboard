import React from 'react'
import { Draggable } from "react-drag-reorder";

export const Taskbox = () => {

  let taskdata= [{
    taskname:"Wash the car",
    subline:"written by Bob",
    taskbadge: "rejected"
  },{
    taskname:"Task with dropdown menu",
    subline:"by johny",
    taskbadge: "new"

  },{
    taskname:"Badge on the right task",
    subline:"by johny",
    taskbadge: ""

  },{
    taskname:"Go grocery Shopping",
    subline:"A short description for this todo item",
    taskbadge: ""

  },
  {
    taskname:"Wash the car",
    subline:"written by Bob",
    taskbadge: "rejected"

  },
  {
    taskname:"Service the car",
    subline:" written by Bob",
    taskbadge: "rejected"

  }]


  return (
    <div>
      <h2>Tasklist</h2>

      <div style={{width:"600px"}}>
      <Draggable>
        {
          taskdata.map((item,index)=>{

            return (

              <div style={{display:"flex",border:"1px solid grey"}} key={index}>
                <div style={{width:"4px",height:"70px",backgroundColor:"yellow",marginLeft:"10px"}}></div>
                <div style={{display:"flex"}}>
                  <div style={{marginTop:"20px",marginLeft:"20px"}}> <input type="checkbox" /></div>
                  <div style={{marginLeft:"10px"}}>
                    <h3>{item.taskname}</h3>
                    <p style={{color:"grey",marginTop:"-20px"}}>{item.subline}</p>
                  </div>
                </div>
                <span style={{backgroundColor:"red",color:"white",height:"30px",borderRadius:"5px",marginTop:"20px",marginLeft:"20px"}}>
                    {item.taskbadge}
                </span>
              </div>
            )
          })
        }
      </Draggable>
      </div>

      <div style={{float:"right"}}>

          <button style={{height:"40px",border:"none",color:"blue"}}>Cancel</button>
          <button style={{height:"40px",border:"none",backgroundColor:"blue",color:"white",borderRadius:"5px"}}>Save</button>
      </div>

    </div>
  )
}
