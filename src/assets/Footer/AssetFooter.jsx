import React from 'react'

export default function AssetFooter() {

    let dic={
        "footer":[{"About":["Electron Inside","About Us","Company","Careers","Brands"]},
        {"Quick Action":["Electron Inside","About Us","Company","Careers","Brands"]},
        {"Polices":["Electron Inside","About Us","Company","Careers","Brands"]},
        {"Brands":["Samsung", "Apple","Bosch", "Beko"]},
        {"Accessories":["Order Tracking","Terms & Conditions","Privacy Policy","Tutorials", "FAQ"]},
        {"BestSeller":["Iphone 14 Pro Max","Iphone 13 Pro Max","Samsung Note 21 Ultra","Xiaomi Vacuum Cleaner"]},
    ]
    }

    

  return (
    <div className='text-white flex flex-wrap'>

        {dic.footer.map((i,index)=>(

        <div key={index} className='flex flex-col m-8 mr-12'>
        <h2 className='text-white text-xl font-semibold mb-6'>{Object.keys(i)} </h2>
        
            {Object.values(dic.footer[index])[0].map((k, ind)=>(
                <div key={ind}>{k}</div>

            ))}
       
        </div>
        ))}

        
        
    </div>
  )
}
