import React, { useEffect } from 'react'
import Restaurant from '../components/Restaurant/Restaurant';
import "../styles/Res.css";
import resLists  from "../utils/mockData";
import { useState } from 'react';

const Restaurants = () => {
  const [mock, setMockData] = useState(resLists);
  const [setf, setFiltered]  = useState(resLists);
  const [searchtext, setSearchText] = useState("");
useEffect(()=>{
    setMockData(resLists);
    console.log("mock data");
  },[]);
console.log("Body rendered");
  return (
    <>
    <div className='search'>
      <input type='text' className='sea' onChange={(e)=>{
        setSearchText(e.target.value);
      }}></input>
      <button className='sch' onClick={()=>{
        const filteredRes = mock.filter((res) =>
  res.name.toLowerCase().includes(searchtext.toLowerCase())
);
        setFiltered(filteredRes);
      }}>Search
      </button>
    </div>
    <div className='btn'>
      <button className='filter-btn' onClick={()=>{
        const filtered = resLists.filter((res)=> res.rating> 4.3);
        setFiltered(filtered);
      }}>Top Resturants</button>
    </div>
    <div className='res-lists'>
     {setf.map((rest)=>( <Restaurant key={rest._id} resData={rest}/>))}
    </div>
    </>
  )
}

export default Restaurants
