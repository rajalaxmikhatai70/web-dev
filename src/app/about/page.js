import React from "react";
import Image from "next/image";
export default function Page() {
return( 
<div className="bg-black">
  <div className=" p-4 text-white text-left ">
    <p className="text-3xl font-mono font-bold">Political Website</p>
    <p className="text-1xl font-serif pt-2 w-1/2">Inspirational designs, illustrations, and graphic elements from the world’s best designers.
Want more inspiration? Inspirational designs, illustrations, and graphic elements from the world’s best designers.
Want more inspiration? </p>
  </div>

<div>
<div className="grid grid-cols-4 gap-4 px-3 py-3">
<div className="bg-gray-400 rounded-lg shadow-md p-4  cursor-pointer">
    <Image 
    src="/R.jpg" 
    alt="Image" 
    width={200}
    height={200}
    className="w-full h-32 object-cover rounded"/>
    <div class="mt-4">
      <h3 class="text-xl font-semibold"><a href="http://localhost:3000/services"> PM Narendra Modi</a></h3>
      <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  
  <div className="bg-gray-400 rounded-lg shadow-md p-4">
    <Image 
    src="/Naveen.jpg" 
    alt="Image" 
    width={200}
    height={200}
    className="w-full h-32 object-cover rounded"/>
    <div class="mt-4">
      <h3 class="text-xl font-semibold"> <a href="http://localhost:3000/services"> PM Narendra Modi</a> CM Naveen Pattnaik</h3>
      <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div className="bg-gray-400 rounded-lg shadow-md p-4">
    <Image 
    src="/amit-1.jpg" 
    alt="Image" 
    width={200}
    height={200}
    className="w-full h-32 object-cover rounded"/>
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Amit Shah</h3>
      <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div className="bg-gray-400 rounded-lg shadow-md p-4">
    <Image 
    src="/d.jpg" 
    alt="Image" 
    width={200}
    height={200}
    className="w-full h-32 object-cover rounded"/>
    <div className="mt-4">
      <h3 className="text-xl font-semibold">President Droupdi Murmu</h3>
      <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>

<div className="grid grid-cols-4 gap-4 px-3 py-3">
  <div className="bg-gray-400 rounded-lg shadow-md p-4">
    <Image 
    src="/image1.jpeg" 
    alt="Image" 
    width={200}
    height={200}
    className="w-full h-32 object-cover rounded"/>
    <div className="mt-4">
      <h3 className="text-xl font-semibold">IT Industry</h3>
      <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div className="bg-gray-400 rounded-lg shadow-md p-4">
    <Image 
    src="/image2.jpg" 
    alt="Image" 
    width={200}
    height={200}
    className="w-full h-32 object-cover rounded"/>
    <div class="mt-4">
      <h3 class="text-xl font-semibold">Web Development</h3>
      <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div className="bg-gray-400 rounded-lg shadow-md p-4">
    <Image 
    src="/image3.jpg" 
    alt="Image" 
    width={200}
    height={200}
    className="w-full h-32 object-cover rounded"/>
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Web-dev 4.0</h3>
      <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div className="bg-gray-400 rounded-lg shadow-md p-4">
    <Image 
    src="/image4.jpg" 
    alt="Image" 
    width={200}
    height={200}
    className="w-full h-32 object-cover rounded"/>
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Indian Institute of technology</h3>
      <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>

</div>

</div> 



)    
  
}