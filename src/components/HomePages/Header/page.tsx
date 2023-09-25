"use client";

import Input from "@/components/Input/page";
import { Size } from "@/utils/Size/page";
import { useState } from "react";

const Header = () => {
  const {fullHeight,fullWidth}=Size();
  const [searchData, setSearchData] = useState("");
  const handlechange = (event:any) => {
    const {value}=event.target.value;
    setSearchData(value);
  };
  return (
    <div
      style={{
        background: `url('https://t3.ftcdn.net/jpg/04/00/77/64/240_F_400776431_5JxdDYRr1mn9yISiUFMPcLtLp3zt6NA1.jpg') center center / cover no-repeat`, // Set the background image
        width: "100%",
        height: "34rem",
        // display:'flex',
        // alignItems:'center'
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Input
          placeholder="Search"
          name="search"
          value={searchData}
          onChange={(event) => handlechange(event)}
          style={{
            width: "40rem",
            height: "2.5rem",
            borderWidth: 2.5,
            borderRadius: "9px",
            marginTop:'12px',
            padding:6,
            borderColor:'#339C9C'
          }}
        />
      </div>
    </div>
  );
};
export default Header;
