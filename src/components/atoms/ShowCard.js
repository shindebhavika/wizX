import Image from 'next/image'
import React from 'react'

function ShowCard({name="UI kit",src,project="Mozart Project"}) {
  return (
     <div className=" p-6 rounded-md text-[#FFFFFF] ">
        <div className="flex items-start gap-4 text-center">
        
          <div>
            <p className="mb-3 text-sm leading-relaxed">
            <Image
            src={src}
            alt="Kayley Frame"
            width={470}
            height={300}
            // className="w-12 h-12 rounded-full object-cover"
          />
            </p>
            <p className="uppercase text-sm tracking-widest leading-8 ">
             {name}
            </p>
            <p className="uppercase text-xs tracking-widest ">
             {project}
            </p>
          </div>
        </div>
      </div>
  )
}

export default ShowCard
