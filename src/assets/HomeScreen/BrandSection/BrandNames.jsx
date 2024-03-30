import React from 'react'

export default function BrandNames() {

    let brand={'HP':'https://1000logos.net/wp-content/uploads/2017/02/HP-Log%D0%BE.png',
     'Dell':'https://1000logos.net/wp-content/uploads/2017/07/Dell-Logo.png',
        'Acer':'https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo.png',
         'Apple':'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
         'Lenovo':'https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-1.png',
         'Sony':'https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png',
         'JBL':'https://1000logos.net/wp-content/uploads/2023/07/JBL-logo.png',
         'Samsung':'https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png'};



  return (
    <div className='flex gap-4 flex-wrap items-center justify-center'>
        {
            Object.keys(brand).map((i,index)=>(
                <div className='w-[20rem] h-[3.5rem] hover:bg-[#3984f0] duration-[500ms]  ease-in-out group flex justify-center rounded-lg items-center cursor-pointer bg-slate-200' key={index}>
                    {/* <span className='text-xl font-semibold text-white'></span>
                     */}
                     <img className='h-full group-hover:scale-125 duration-300 ease-in-out' src={brand[i]} alt="" />
                </div>
            ))
        }
    </div>
  )
}



/**
 * 
 * hp: https://1000logos.net/wp-content/uploads/2017/02/HP-Log%D0%BE.png
 * lenovo: https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-1.png
 * apple: https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png
 * acer: https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo.png
 * dell: https://1000logos.net/wp-content/uploads/2017/07/Dell-Logo.png
 * sony: https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png
 * jbl: https://1000logos.net/wp-content/uploads/2023/07/JBL-logo.png
 * samsung: https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png
 * 
 */