import React from "react";
import img1 from "./image/me.jpg"
import img2 from "./image/instagram (2).png"
import img3 from"./image/email.png"

function Border() {
    return(
        <>
        
<div className="">

 <div className="w-[750px]   h-[800px] md:w-[350px]   md:h-[550px]  border-2 bg-black border-slate-700 md:rounded-3xl justify-center ">

<h1 className=" font-rale ml-32  text-5xl text-slate-200 font-bold mt-6 md:font-rale md:ml-12  md:text-2xl md:text-slate-200 md:font-bold md:mt-6">
Kuvarji Gupta
</h1>
<h4 className="font-rale  text-xl ml-32 mt-1   text-slate-200 font-bold  md:font-rale  md:text-base md:ml-20 md:mt-1   md:text-slate-200 md:font-bold ">
    Web Developer
</h4>

<div className="pl-8 mt-5 ml-24 flex gap-16 md:pl-8 md:mt-5 md:flex md:gap-6  ">
<img className="w-[400px] h-[400px] md:w-[200px] md:h-[200px] rounded-2xl object-cover" src={img1} alt="" />


{/* image */}
<div className="flex gap-6">
<div className="w-[80px] h-[200px]   flex-col">
    <center>
<img className=" w-[80px] md:w-[30px] bg-black rounded-full border-2 border-green-800 p-1" src={img2} alt="" />
<br />
<img className=" w-[80px] md:w-[30px] bg-black rounded-full border-2 border-green-800  p-1" src={img2} alt="" />
<br />
<img className=" w-[80px] md:w-[30px] bg-black rounded-full border-2 border-green-800  p-1" src={img2} alt="" />
<br />
<img className=" w-[80px] md:w-[30px] bg-black rounded-full border-2 border-green-800  p-1" src={img2} alt="" />

</center>
</div>
<div className="border-2 border-spacing-y-2 border-green-500">
</div>

</div>

{/* iamge */}



{/* image div */}
</div>
<div className=" mt-5 pl-9">
<span className="font-rale text-slate-300 text-center font-semibold text-sm">
    kuvarjigupta2004@gmail.com
</span>
</div>

<div className=" mt-2 pl-14">
<span className="font-rale text-slate-300 font-semibold text-center text-base">
   Lucknow,U.P,India
</span>
</div>


<div className=" mt-5 pl-9">
<span className="font-rale text-slate-300 font-thin text-center text-xs">
© 2023 Shivam. All Right Reserved
</span>
</div>

<div className=" mt-10">
<center>
    <button className=" flex justify-center gap-4 bg-green-400 w-[200px] p-3 rounded-2xl font-rale font-semibold  ">
    <img className="w-[20px] h-[20px]" src={img3} alt="" />
Contact Me
    </button>
</center>
</div>

{/* boreder div */}
    </div>
    </div>

        
        </>
    );
}
export default Border;