"use client";
import { useState } from "react";

const data = [
  {
    image: "images/Vector (4).png",
    icon: "",
  },
  {
    image: "images/Group 1606.png",
    icon: "",
  },
  {
    image: "images/Vector (6).png",
    icon: "",
  },{
    image:'images/Vector (8).png'
  }
];
const Tab = () => {
  const [clickedData, setClickData] = useState(0);
  const handleClick = (index: number) => {
    setClickData(index);
  };
  console.log("clickedData", clickedData);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        height: "5rem",
        alignItems: "center",
        backgroundColor:'#ffff',
        boxShadow:'-1px 1px 3px -2px'
      }}
    >
      {data.map((allData, index) => {
        return (
          <div onClick={() => handleClick(index)} style={{}} key={index}>
            <img src={allData.image} alt="///"  style={{ height:index+1==data.length?14:24}}/>
            
          </div>
        );
      })}
    </div>
  );
};

export default Tab;
