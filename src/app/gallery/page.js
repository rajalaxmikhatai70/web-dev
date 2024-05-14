import React from "react"

import Image from "next/image"

export default function Page() {
return( 
<div>
<div className="bg-yellow-100">
<h1 className=" text-center text-3xl font-bold text-blue-950">Customer page</h1>
<p className="p-4 font-bold text-blue-900">The Software Report is pleased to announce The Top 100 Software Companies of 2021. This year’s awardee list is comprised of a wide range of companies from the most well-known such as Microsoft, Adobe, and Salesforce to the relatively newer but rapidly growing - Qualtrics, Atlassian, and Asana</p>
</div>

<div className="flex  items-center">
    <Image
    src="/image4.jpg"
    width={500}
    height={500}
    alt="picture"></Image>
    <p className="p-4 font-bold text-black">The Software Report is pleased to announce The Top 100 Software Companies of 2021. This year’s awardee list is comprised of a wide range of companies from the most well-known such as Microsoft, Adobe, and Salesforce to the relatively newer but rapidly growing - Qualtrics, Atlassian, and Asana</p>
   
</div>
</div>
)    
  
}