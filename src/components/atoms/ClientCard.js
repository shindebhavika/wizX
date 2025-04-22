import Image from 'next/image'
import React from 'react'

function ClientCard({name,src,feedback}) {
  return (
    <div className=" p-6 rounded-lg text-[#FFFFFF] border-3 border-white/10 ">
    <div className="flex items-start gap-4">
      <Image
        src={src}
        alt="Kayley Frame"
        width={300}
        height={300}
        className="w-12 h-12  object-cover"
      />
      <div>
        <p className="mb-3 text-sm leading-relaxed">
         {feedback}
        </p>
        <p className="uppercase text-xs tracking-widest text-white/60">
         {name}
        </p>
      </div>
    </div>
  </div>
  )
}

export default ClientCard
