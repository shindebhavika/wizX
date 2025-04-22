import React from 'react'
import ShowCard from './atoms/ShowCard'

function ShowCase() {
    const Clinets=[
        {
            name:"UI kit",
            src:"/work1.png",
            feedback:"Mozart Project"
        },
        {
            name:"Framework",
            src:"/work2.png",
            feedback:"Startup Framework 2.0"
        },
        {
            name:"Photos",
            src:"/work3.png",
            feedback:"From the Sky"
        },
        {
            name:"Pictures",
            src:"/work4.png",
            feedback:"Air Forces "
        }
    ]
  return (
    <section className="bg-[#2F1893] py-16 px-4 md:px-10 text-[#FFFFFF]">
  <div className='flex justify-between max-w-5xl mx-auto'>
  <h2 className="text-3xl md:text-4xl font-semibold leading-15 ">
    Last works
    </h2>
    <button className="px-4 py-3 rounded-full font-semibold border border-white/30 hover:bg-white hover:text-[#2F1893] transition duration-300">
  View all Works
</button>

  </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {/* Testimonial 1 */}
{
    Clinets?.map((client,index)=>(
        <ShowCard name={client.name}  src={client.src} feedback={client.feedback}key={index} />   
    ))
}

    </div>
  </section>
  
  )
}

export default ShowCase
