import React from "react";
import Kp from "./Kp"
import Border from './Border'
import Bottom from './Bottom'
function Boiler() {
    return(
<>

<div className=" w-screen h-screen  md:bg-black  align-middle md:flex flex-none   items-center pl-0 md:pl-16 gap-20     ">
    <Border/>

 <div className="w-[750px] h-[750px] md:w-[950px] md:h-[550px] bg-black border-slate-400 md:rounded-3xl  relative ">

<Kp/>
    <div className=" ml-52 mt-16 absolute bottom-0">
    <Bottom/>
    </div>

</div>
</div>
{/* last div */}




</>
    );
}
export default Boiler;