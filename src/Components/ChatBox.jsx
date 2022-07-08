import React from 'react'

export const ChatBox = () => {

  let chatdata = [{
    msg:"But I must explain to you how all this mistaken idea of denoucing pleasure and praising pain was born and I will give you complete account of the system",
    img:"",
    time:"11:01|Yesterday"
  },{
    msg:"Expound the actual teaching of the great explorer of the truth, the master-builder of human happiness",
    img:"",
    time:"11:01|Yesterday"
  },{
    msg:"But I must explain to you how all this mistaken idea of denoucing pleasure and praising pain was born and I will give you complete account of the system",
    img:"",
    time:"11:01|Yesterday"
  }];


  return (
    <div style={{width:"700px",marginLeft:"50px"}}>
      <h2>ChatBox</h2>
      <div style={{borderTop:"1px solid grey",borderBottom:"1px solid grey"}}>

      {
        chatdata.map((item,index)=>{
        

            return (
              <div key={index}> 
                  <img src={item.img} />
                  <p style={{backgroundColor:"	#87CEFA"}}>{item.msg}</p>
                  <p style={{color:"grey"}}>{item.time}</p>
              </div>
              
            )
         
          
        })
      }
      </div>
      <div style={{marginTop:"20px"}}>
        <input type="text" placeholder="type a message...." style={{width:"90%",height:"30px",marginLeft:"20px"}}/>
      </div>
      
    </div>
  )
}
