import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../api/GlobalApi';

export default function Items() {

  
  const [items,setitems]=useState([]);

  useEffect(() => {
    getItems();
    
},[])
const getItems=()=>{
    GlobalApi.GetItems().then(res=>{
        console.log("res",res.items);
        setitems(res.items);
    })
}
  return (
    <div className='m-8 my-16 flex justify-evenly '>
      {items.map((i)=>(

        <div key={i.id} className='h-20 w-36 bg-slate-600 hover:bg-[#3984f0] duration-300 ease-in-out relative flex justify-center rounded-lg cursor-pointer group'>
            <div  key={i.id} className='h-16 w-16 bg-white absolute flex justify-center items-center rounded-full' style={{ top:-30 }}>
                <div className='h-14 w-14 rounded-full group-hover:scale-125 duration-300 ease-in-out flex'><img className='h-full w-full' src={ i?.icons?.url } alt="" /></div>
            </div>
            <span  key={i.id} className='absolute bottom-3 text-white tracking-[2px]'>{i?.name}</span>
        </div>
      ))}
    </div>

  )
}



//<a href="https://www.flaticon.com/free-icons/laptop" title="laptop icons">Laptop icons created by Vectors Market - Flaticon</a>
//