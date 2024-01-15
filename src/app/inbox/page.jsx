import Image from "next/image";

//Assets
import arrowBackIcon from '@/icons/arrow-back-icon.svg';
import profilePic1 from '@/icons/profile-icon-1.svg';
import profilePic2 from '@/icons/profile-icon-2.svg';
import profilePic3 from '@/icons/profile-icon-3.svg';
import profilePic4 from '@/icons/profile-icon-4.svg';



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
              Inbox
            </p>
          </section>

        <section className=" pb-12">
        <div class="w-10/12 mx-auto grid grid-cols-[35%_75%] gap-y-7 gap-x-5  px-4 pt-7 md:pb-3 md:pt-8 md:px-8 relative shadow-lg bg-primary-white bg-opacity-0 border-transparent rounded-2xl">
            <div className="col-span-1">
                <div className="grid grid-cols-[1fr_2fr_2fr_1fr] gap-y-6">
                    
                     {/** row 1 */}
                    <div className="col-span-4">
                    <input type="search" placeholder="Search..." className="w-full rounded-md border border-secondary-gray p-2"/>
                    </div>

                    {/** row 2 */}
                    
                    <div className="col-span-1">
                        <div className="flex items-center gap-3">
                            <span class="inline-block rounded-full bg-[#3876BF] w-2 h-2"></span>
                            <Image   src={profilePic1} alt="" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="flex items-center space-x-2">
                            <div className=" text-lg font-bold pb-1">
                                Claim Submitted
                            </div>
                            <span class="bg-[#3876BF] text-white text-xs px-2 py-1 rounded mb-1 ">Unread</span>
                        </div>

                        <div className=" text-sm text-font-secondary md:pr-10">
                            We’ll like to inform you that your claim has been submitted. It may take 3-5...
                        </div>
                    </div>
                    <div className="col-span-1 flex items-end">
                        <div className="text-sm text-font-secondary">
                            Yesterday
                        </div>
                    </div>

                     {/** row 3*/}
                     <div className="col-span-4">
                        <div class="ml-4 mr-1 border-t border-secondary-gray flex-grow"></div>

                     </div>

                      {/** row 4 */}
                    <div className="col-span-1">
                        <div className="flex justify-center gap-3">
                            <Image   src={profilePic2} alt="" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="flex items-center space-x-2">
                            <div className=" text-lg font-medium pb-1">
                                Payment Successful
                            </div>
                        </div>

                        <div className=" text-sm text-font-secondary md:pr-10">
                        Contrary to popular belief, Lorem Ipsum is not simply random text...
                        </div>
                    </div>
                    <div className="col-span-1 flex items-end">
                        <div className="text-sm text-font-secondary">
                            4 days ago
                        </div>
                    </div>

                     {/** row 5*/}
                     <div className="col-span-4">
                        <div class="ml-4 mr-1 border-t border-secondary-gray flex-grow"></div>

                     </div>

                    {/** row 6 */}
                    <div className="col-span-4 bg-[#ECECEC80] bg-opacity-50">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-1">
                                <div className="flex justify-center gap-3">
                                    <Image src={profilePic3} alt="" />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="flex items-center space-x-2">
                                    <div className="text-lg font-medium pb-1">
                                        The Best Takaful Deal
                                    </div>
                                </div>
                                <div className="text-sm text-font-secondary md:pr-10">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text...
                                </div>
                            </div>
                            <div className="col-span-1 flex items-end">
                                <div className="text-sm text-font-secondary">
                                    a month ago
                                </div>
                            </div>
                        </div>
                    </div>

                    {/** row 7 */}
                    <div className="col-span-4 bg-[#ECECEC80] bg-opacity-50">
                        <div className="ml-4 mr-1 border-t border-secondary-gray flex-grow"></div>
                    </div>




                </div>
            </div>
          
        </div>
        </section>
          
    
        </main>
      )
   
}