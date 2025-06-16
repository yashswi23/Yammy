import React from 'react'
import Restaurant from '../components/Restaurant/Restaurant';
import "../styles/Res.css";
import { resLists } from '../components/Restaurant/Restaurant';

const Restaurants = () => {
  return (
    <div className='res-lists'>
     {resLists.map((rest)=>( <Restaurant key={rest._id} resData={rest}/>))}
    </div>
  )
}

export default Restaurants
