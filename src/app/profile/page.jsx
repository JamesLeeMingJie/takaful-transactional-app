import Image from "next/image";

//Assets
import arrowBackIcon from '@/icons/arrow-back-icon.svg';
import profilePic from '@/icons/profile-icon.svg';



export default function Profile() {
    return (
        <main>
          <section className="pb-0 mt-8">
          <div className=" mx-auto w-10/12 flex items-center pb-10 gap-1">
            <Image  className="w-5 h-5 " src={arrowBackIcon} alt="" />
             <a href="/homepage" className="text-16">
             Back to Home
            </a>
          </div>  
            <p className="mx-auto w-10/12 text-[25px] font-bold pb-10">
              Profile
            </p>
          </section>

        <section className=" pb-12">
        <div className="md:flex md:justify-between md:w-10/12 mx-auto md:mt-5">
          <section className=" pb-4">
                    <div className="mx-auto w-10/12 md:w-full ">
              <div className="grid grid-cols-[1fr_2fr] md:grid-cols-1 grid-rows-3 md:grid-rows-auto md:gap-6 auto-rows-auto relative">
                  <div className="row-span-3 relative flex md:justify-start ">
                      <Image className=" w-20 h-20 md:w-28 md:h-28" src={profilePic} alt="" />
                
                  </div>

                  <div className="text-xl pb-2">
                      Ismail Abu
                  </div>

                  <div className="text-base text-[#E03DFC] flex items-center">
                      Change Password
                  </div>

                  <div className="text-base text-[#E03DFC]">
                      Change Security Phrase
                  </div>
              </div>
            </div>

          </section>

          <section className="md:w-4/5">
          
            <div class="grid grid-cols-2   gap-y-7 gap-x-5  mx-5 md:mx-9 px-4 pt-7 md:pb-3 md:pt-8 md:px-8 relative shadow-lg bg-primary-white bg-opacity-0 border-transparent rounded-2xl">
            
                 {/** first row */}
                <div class="col-span-2 ">
                    <div class="flex items-center mt-5">
                        <h4 class="font-bold text-base">Personal Details</h4>
                        <div class="ml-4 mr-1 border-t border-secondary-gray flex-grow"></div>
                        <p class="text-primary font-normal mx-1">Edit</p>
                        <button class="ml-0.5"><svg class="h-4 w-4 text-primary" width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg></button>
                    </div>
                  
                </div> 

                 {/** second row */}
                <div class="col-span-1">
                    <p class=" font-light text-font-secondary">Full Name</p>
                    <p class="font-semibold mt-1.5 text-font-primary">Ismail Abu bin Mamat</p>
                </div>
                
                <div class="col-span-1 ">
                <p class=" font-light text-font-secondary">Phone No.</p>
                    <p class="font-semibold mt-1.5 text-font-primary">0123456789</p>
                </div>

                 {/** third row */}
                <div class="col-span-1 ">
                    <p class=" font-light text-font-secondary">Identification No.</p>
                    <p class="font-semibold mt-1.5 text-font-primary">601112-01-5543</p>
                </div>

                <div class="col-span-1 ">
                    <p class=" font-light text-font-secondary">Gender</p>
                    <p class="font-semibold mt-1.5 text-font-primary">Male</p>

                </div>

                 {/** fourth row */}
                <div class="col-span-1 ">
                    <p class="font-normal text-font-secondary">Email</p>
                    <p class="font-semibold mt-1.5 text-font-primary">ismail.abu20@gmail.com</p>

                </div>

                <div class="col-span-1 ">
                <p class="font-normal text-font-secondary">Marital Status</p>
                    <p class="font-semibold mt-1.5 text-font-primary">Married</p>

                </div>


                 {/** 5th row */}
                <div class="col-span-2 ">
                    <div class="flex items-center mt-5">
                        <h4 class="font-bold text-base">Address Details</h4>
                        <div class="ml-4 mr-1 border-t border-secondary-gray flex-grow"></div>
                        <p class="text-primary font-normal mx-1">Edit</p>
                        <button class="ml-0.5"><svg class="h-4 w-4 text-primary" width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg></button>
                    </div>
                 
                </div> 

               {/** 6th row */}
                <div class="col-span-2">
                    <p class="font-normal text-font-secondary">Address Line 1</p>
                    <p class="font-semibold mt-1.5">No 100-2-G, Casadera Apartment</p>
                </div>

                 {/** 7th row */}
                <div class="col-span-1">
                    <p class="font-normal text-font-secondary">Address Line 2</p>
                    <p class="font-semibold mt-1.5">Persiaran Margosa</p>
                </div>

                <div class="col-span-1">
                    <p class="font-normal text-font-secondary">Address Line 3</p>
                    <p class="font-semibold mt-1.5">Jalan PJU/9</p>
                </div>

                 {/** 8th row */}
                <div class="col-span-1">
                    <p class="font-normal text-font-secondary">Postcode</p>
                    <p class="font-semibold mt-1.5">52200</p>
                </div>

                <div class="col-span-1">
                    <p class="font-normal text-font-secondary">City</p>
                    <p class="font-semibold mt-1.5">Bandar Sri Damansara</p>
                </div>
 
                 {/** 9th row */}
                <div class="col-span-2 mb-6">
                    <p class="font-normal text-font-secondary">State</p>
                    <p class="font-semibold mt-1.5">Kuala Lumpur</p>
                </div>

               

                

                





            </div>






        </section>
        </div>
        </section>
          
    
        </main>
      )
   
}