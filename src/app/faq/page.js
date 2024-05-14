import React from "react"
import Image from "next/image"

export default function Page() {
return(
    <div className="bg-slate-400">

<h1 className="text-bold text-6xl text-center m-5">Frequently Asked Questions ?</h1>
<div className="flex m-5">
  
  <p className="text-2xl text-brown-700">Many CHASICARE customers are asking the common questions for their organic farming including Biofloc, Aquaponics, Diary farming, Dairy & Goatery, Soil less farming, hydroponic farming and more. Let’s explore the most common and frequently asked questions and answers here at CHASICARE,  Odisha.
  CHASICARE  is the farmers-oriented organization in Odisha committed to help people to setup up their organic farm in Biofloc, Aquaponics, Dairy & Goatery, Soil less farming, hydroponic farming and also get access to the quality training and government subsidies facilities.
  </p>

<Image 
src={'/question.jpg'}
height={600}
width={600}
alt="image description"

/>
</div>

</div>
)    
  
}