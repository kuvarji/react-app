import React from 'react'
import Border from './Border'
import Bottom from './Bottom'
import Edi from './Edi'
function Edu() {
  return (
   <>
    <div className=" w-screen h-screen  bg-black align-middle flex items-center pl-16 gap-20    ">
        <Border/>
      <div className="w-[950px] h-[550px]  border-slate-400 rounded-3xl relative ">
<Edi/>

    <div className=" mt-16 ml-52 absolute bottom-0">
    <Bottom/>
    </div>

</div>
    </div>
   </>
  )
}

export default Edu