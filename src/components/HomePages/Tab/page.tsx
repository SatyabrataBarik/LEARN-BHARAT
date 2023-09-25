"use client"
import { useState } from "react";

const  data=[
    {
        
        image:'',
         icon:''
    },
    {
        image:'',
         icon:''
    },
    {
        image:'',
         icon:''
    },
]
const Tab = () => {
    const [clickedData,setClickData]=useState(0);
    const handleClick=(index:number)=>{
        setClickData(index);
    }
    console.log('clickedData', clickedData)
  return (
    <div style={{display:'flex' ,justifyContent:'space-evenly'}}>
    { data.map((allData,index)=>{
       return <div onClick={()=>handleClick(index)}>
               <img src={allData.image} alt="///"/>
               <img src={allData.icon} alt="///"/>
       </div>
      
      })
    }
       </div>
  )
}

export default Tab