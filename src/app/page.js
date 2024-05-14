import React from "react";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col-3 gap-3 mt-2 ">
        {/* 1  */}
        <div className="basis-1/4 h-[115vh] border border-black text-center bg-gray-500">
          <h1 className="font-bold text-white">Till Yesterday</h1>
          <div className="grid grid-rows-4  p-1  gap basis-1/4 h-[110vh]">
            <div className="relative mb-2 border-2 border-black rounded-lg">
              <div className=" flex justify-center items-center">
                <Image
                  src="/image2.jpg"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className="relative z-0 p-2"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg">
                  It is the company
                </p>
              </div>
            </div>
            <div className="relative mb-2 border-2 border-black rounded-lg">
              <div className=" flex justify-center items-center">
                {" "}
                <Image
                  src="/image2.jpg"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className="relative z-0 p-2"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg">
                  It  is the company
                </p>
              </div>
            </div>
            <div className="relative mb-2 border-2 border-black rounded-lg">
              <div className=" flex justify-center items-center">
                {" "}
                <Image
                  src="/image2.jpg"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className="relative z-0 p-2"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg">
                It  is the company
                </p>
              </div>
            </div>
            <div className="relative mb-2 border-2 border-black rounded-lg">
              <div className=" flex justify-center items-center">
                {" "}
                <Image
                  src="/image2.jpg"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className="relative z-0 p-2"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg">
                It  is the company
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}

        <div className="border border-black basis-1/2 h-[115vh] bg-gray-500">
          <p className="text-center font-bold text-white">
            Today on 09/05/2024
          </p>
          <p className="font-bold text-white">Top Headlines</p>
          <div className="grid grid-rows-2 p-2  basis-1/2 h-[90vh]">
            <div className="grid grid-cols-2">
              <div className="bg-black border border-black">
                <Image src="/image7.jpg" alt="Picture of the author" width={300} height={300} 
                className="p-3"/>
                <p class="text-amber-700  flex justify-center text-lg font-semibold">
                  Top companies
                </p>
              </div>
              <div className=" grid grid-cols-2">
                <div className="grid grid-rows-2 p-2">
                  <div className="relative mb-2  border-2 border-black rounded-lg">
                    <div className=" flex justify-center items-center">
                      <Image
                        src="/image4.jpg"
                        alt="Picture of the author"
                        width={250}
                        height={250}
                        className="relative z-0 mt-6"
                      />
                      <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg mb-2">
                        The is one picture.
                      </p>
                    </div>{" "}
                  </div>
                  <div className="relative mb-2  border-2 border-black rounded-lg">
                    <div className=" flex justify-center items-center">
                      <Image
                        src="/image4.jpg"
                        alt="Picture of the author"
                        width={250}
                        height={250}
                        className="relative z-0 mt-6"
                      />
                      <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg mb-2">
                        The is one picture.
                      </p>
                    </div>{" "}
                  </div>
                </div>
                <div className=" grid grid-rows-2 p-2">
                  <div className="relative mb-2  border-2 border-black rounded-lg">
                    <div className=" flex justify-center items-center">
                      <Image
                        src="/image4.jpg"
                        alt="Picture of the author"
                        width={250}
                        height={250}
                        className="relative z-0 mt-6"
                      />
                      <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg mb-2">
                        The is one picture.
                      </p>
                    </div>{" "}
                  </div>
                  <div className="relative mb-2  border-2 border-black rounded-lg">
                    <div className=" flex justify-center items-center">
                      <Image
                        src="/image4.jpg"
                        alt="Picture of the author"
                        width={250}
                        height={250}
                        className="relative z-0 mt-6"
                      />
                      <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg mb-2">
                        The is one picture.
                      </p>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[50vh] text-red-600">
              <p>SPECIAL REPORT</p>
              <div className="grid grid-cols-3 h-[50vh]">
                <div className="grid grid-rows-2 h-[50vh]">
                <div className="relative   border-2 border-black rounded-lg">
                  <div className="flex justify-center items-center ">
                    <Image
                      src="/image6.jpg"
                      alt="Picture of the author"
                      width={250}
                      height={250}
                      className="relative z-0 p-2"
                    />{" "}
                    <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg mb-2">
                        The is one picture.
                      </p>
                  </div>
                  </div>
                  <div className="relative   border-2 border-black rounded-lg">
                  <div className="flex justify-center items-center ">
                    <Image
                      src="/image6.jpg"
                      alt="Picture of the author"
                      width={250}
                      height={250}
                      className="relative z-0 p-2"
                    />
                    <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg mb-2">
                        The is one picture.
                      </p>
                  </div>
                  </div>
                </div>
                <div className="grid grid-rows-2 h-[50vh]">
                <div className="relative   border-2 border-black rounded-lg">
                  <div className="flex justify-center items-center ">
                    <Image
                      src="/image6.jpg"
                      alt="Picture of the author"
                      width={250}
                      height={250}
                      className="relative z-0 p-2"
                    />{" "}
                    <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg mb-2">
                        The is one picture.
                      </p>
                  </div>
                  </div>
                  <div className="relative   border-2 border-black rounded-lg">
                  <div className="flex justify-center items-center ">
                    <Image
                      src="/image6.jpg"
                      alt="Picture of the author"
                      width={250}
                      height={250}
                      className="relative z-0 p-2"
                    />
                    <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg mb-2">
                        The is one picture.
                      </p>
                  </div>
                  </div>
                </div>
                <div className="grid grid-rows-2 h-[50vh]">
                <div className="relative   border-2 border-black rounded-lg">
                  <div className="flex justify-center items-center ">
                    {" "}
                    <Image
                      src="/image6.jpg"
                      alt="Picture of the author"
                      width={250}
                      height={250}
                      className="relative z-0 p-2"
                    />
                     <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg mb-2">
                        The is one picture.
                      </p>
                  </div>
                  </div>
                  <div className="relative   border-2 border-black rounded-lg">
                  <div className="flex justify-center items-center ">
                    <Image
                      src="/image6.jpg"
                      alt="Picture of the author"
                      width={250}
                      height={250}
                      className="relative z-0 p-2"
                    />
                    <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg mb-2">
                        The is one picture.
                      </p>
                  </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="basis-1/4 border bg-gray-500 h-[115vh] text-center border-black">
          <p className="font-bold text-white">Today on 08/05/2024</p>
          <div className="grid grid-rows-4 p-1 gap basis-1/4 h-[110vh] ">
            <div className="relative mb-2 border-2 border-black rounded-lg">
              <div className=" flex justify-center items-center">
                <Image
                  src="/logo1.jpg"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className="relative z-0 p-2"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg">
                It  is the company
                </p>
              </div>
            </div>
            <div className="relative mb-2 border-2 border-black rounded-lg">
              <div className="flex justify-center items-center">
                <Image
                  src="/logo1.jpg"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className="relative z-0 p-2"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg">
                It  is the company
                </p>
              </div>
            </div>
            <div className="relative mb-2 border-2 border-black rounded-lg">
              <div className=" flex justify-center items-center">
                <Image
                  src="/logo1.jpg"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className="relative z-0 p-2"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg">
                It  is the company
                </p>
              </div>
            </div>
            <div className="relative mb-2 border-2 border-black rounded-lg">
              <div className=" flex justify-center items-center">
                <Image
                  src="/logo1.jpg"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className="relative z-0 p-2"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg">
                It  is the company
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* lastdiv */}
      <div className="grid grid-cols-6 ">
        <div className="border-2 m-2 p-2 border-black hover:shadow-lg hover:backdrop-blur-lg bg-black">
          <p class="rotate-90 py-10 px-10 font-bold text-white ">
            OUR TOP READINGS
          </p>
        </div>
        <div className="grid grid-rows-2">
          <div className="border-2 m-2 p-2  border-black  hover:shadow-lg hover:backdrop-blur-lg bg-black">
            <Image
              src="/image1.jpeg"
              alt="Picture of the author"
              width={700}
              height={700}
            />
            <p class="text-amber-600  flex justify-center text-lg font-semibold">
              Top IT cunsultings
            </p>
          </div>
          <div className="border-2 m-2 p-2  border-black hover:shadow-lg hover:backdrop-blur-lg bg-black">
            <Image
              src="/image1.jpeg"
              alt="Picture of the author"
              width={700}
              height={700}
            />
            <p class="text-amber-600 flex justify-center text-lg font-semibold">
              Top IT cunsultings
            </p>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="border-2 m-2 p-2 border-black hover:shadow-lg hover:backdrop-blur-lg bg-black">
            <Image
              src="/image1.jpeg"
              alt="Picture of the author"
              width={700}
              height={700}
            />
            <p class="text-amber-600  flex justify-center text-lg font-semibold">
              Top IT cunsultings
            </p>
          </div>
          <div className="border-2 m-2 p-2 border-black hover:shadow-lg hover:backdrop-blur-lg bg-black">
            <Image
              src="/image1.jpeg"
              alt="Picture of the author"
              width={700}
              height={700}
            />
            <p class="text-amber-600  flex justify-center text-lg font-semibold">
              Top IT cunsultings
            </p>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="border-2 m-2 p-2 border-black hover:shadow-lg hover:backdrop-blur-lg bg-black">
            <Image
              src="/image1.jpeg"
              alt="Picture of the author"
              width={700}
              height={700}
            />
            <p class="text-amber-600  flex justify-center text-lg font-semibold">
              Top IT cunsultings
            </p>
          </div>
          <div className="border-2 m-2 p-2 border-black hover:shadow-lg hover:backdrop-blur-lg bg-black">
            <Image
              src="/image1.jpeg"
              alt="Picture of the author"
              width={700}
              height={700}
            />
            <p class="text-amber-600  flex justify-center text-lg font-semibold">
              Top IT cunsultings
            </p>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="border-2 m-2 p-2 border-black  hover:shadow-lg hover:backdrop-blur-lg bg-black">
            <Image
              src="/image1.jpeg"
              alt="Picture of the author"
              width={700}
              height={700}
            />
            <p class="text-amber-600  flex justify-center text-lg font-semibold">
              Top IT cunsultings
            </p>
          </div>

          <div className="border-2 m-2 p-2  border-black hover:shadow-lg hover:backdrop-blur-lg bg-black">
            <Image
              src="/image1.jpeg"
              alt="Picture of the author"
              width={700}
              height={700}
            />
            <p class="text-amber-600  flex justify-center text-lg font-semibold">
              Top IT cunsultings
            </p>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="border-2 m-2 p-2 border-black  hover:shadow-lg hover:backdrop-blur-lg bg-black">
            <Image
              src="/image1.jpeg"
              alt="Picture of the author"
              width={700}
              height={700}
            />
            <p class="text-amber-600  flex justify-center text-lg font-semibold">
              Top IT cunsultings
            </p>
          </div>

          <div className="border-2 m-2 p-2 border-black  hover:shadow-lg hover:backdrop-blur-lg bg-black">
            <Image
              src="/image1.jpeg"
              alt="Picture of the author"
              width={700}
              height={700}
            />
            <p class="text-amber-600  flex justify-center text-lg font-semibold">
              Top IT cunsultings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



