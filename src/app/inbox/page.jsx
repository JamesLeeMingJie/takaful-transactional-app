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
        <div class="w-10/12 mx-auto grid grid-cols-1 gap-y-7 px-4 pt-7 lg:pb-3 lg:pt-8 lg:px-8 lg:grid-cols-[40%_50%] gap-x-16 relative shadow-lg bg-primary-white bg-opacity-0 border-transparent rounded-2xl">
            <div className="col-span-1">
                <div className="grid grid-cols-[1fr_2fr_2fr_1fr] ">
                    
                  
                    <div className="col-span-4 mb-6">
                    <input type="search" placeholder="Search..." className="w-full rounded-md border border-secondary-gray p-2"/>
                    </div>

               
                   
                    <div className="col-span-4 border-b-[1px] border-b-secondary-gray px-2 py-6">
                        <div className="grid grid-cols-[1fr_2fr_2fr_2fr] gap-4">
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
                            <div className="col-span-1 flex items-end justify-end">
                                <div className="text-sm text-font-secondary">
                                    Yesterday
                                </div>
                            </div>
                        </div>
                    </div>
                  
                   
                    <div className="col-span-4 border-b-[1px] border-b-secondary-gray px-2 py-6">
                        <div className="grid grid-cols-[1fr_2fr_2fr_2fr] gap-4">
                            <div className="col-span-1">
                                <div className="flex justify-center gap-3">
                                    <Image src={profilePic2} alt="" />
                                </div>
                            </div>
                            <div className=" col-span-2">
                                <div className="flex items-center space-x-2">
                                    <div className="text-lg font-medium pb-1">
                                    Payment Successful
                                    </div>
                                </div>
                                <div className="text-sm text-font-secondary md:pr-8">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text...
                                </div>
                            </div>
                            <div className="col-span-1 flex items-end justify-end">
                                <div className="text-sm text-font-secondary">
                                    4 months ago
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-span-4 border-b-[1px] border-b-secondary-gray px-2 py-6 bg-[#ECECEC80] bg-opacity-50">
                        <div className="grid grid-cols-[1fr_2fr_2fr_2fr] gap-4">
                            <div className="col-span-1">
                                <div className="flex justify-center gap-3">
                                    <Image src={profilePic3} alt="" />
                                </div>
                            </div>
                            <div className=" col-span-2">
                                <div className="flex items-center space-x-2">
                                    <div className="text-lg font-medium pb-1">
                                        The Best Takaful Deal
                                    </div>
                                </div>
                                <div className="text-sm text-font-secondary md:pr-8">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text...
                                </div>
                            </div>
                            <div className="col-span-1 flex items-end justify-end">
                                <div className="text-sm text-font-secondary">
                                    a month ago
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 border-b-[1px] border-b-secondary-gray px-2 py-6">
                        <div className="grid grid-cols-[1fr_2fr_2fr_2fr] gap-4">
                            <div className="col-span-1">
                                <div className="flex justify-center gap-3">
                                    <Image src={profilePic4} alt="" />
                                </div>
                            </div>
                            <div className=" col-span-2">
                                <div className="flex items-center space-x-2">
                                    <div className="text-lg font-medium pb-1">
                                    Happy Malaysia Day
                                    </div>
                                </div>
                                <div className="text-sm text-font-secondary md:pr-8">
                                We wish you happy Malaysia day. May...
                                </div>
                            </div>
                            <div className="col-span-1 flex items-end justify-end">
                                <div className="text-sm text-font-secondary">
                                    a month ago
                                </div>
                            </div>
                        </div>
                    </div>

                



                </div>
            </div>

            <div className="hidden lg:block lg:col-span-1">
                <div className="grid grid-cols-[1fr_1fr_1fr] gap-4">

                    <div className="col-span-3">
                        <div className=" text-[22px] font-semibold ">
                            Claim Submitted
                        </div>
                    </div>

                    <div className="col-span-3 border-b-[1px] border-b-secondary-gray">
                        <div className=" text-[10px] text-font-secondary font-normal pb-4">
                        13/10/2023 14:12:11
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className=" text-base text-font-secondary font-normal">
                        We’ll like to inform you that your claim has been submitted. It may take 3-5 working days to be proccessed. Here details for your claim:
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className=" text-lg font-normal text-font-secondary">
                        Date Submission:
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="text-lg font-semibold">
                        10/10/2023
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className=" text-lg font-normal text-font-secondary">
                        Certificate No. :
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="text-lg font-semibold">
                        TMMC0000829/V0499577
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className=" text-lg font-normal text-font-secondary">
                        Product Name:
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="text-lg font-semibold">
                        Motorcycle
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className=" text-lg font-normal text-font-secondary">
                        Status:
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="text-lg font-semibold">
                        In Force
                        </div>
                    </div>

                    <div className="col-span-3">

                    </div>

                    <div className="col-span-3">
                        <button className="text-[18px] text-white bg-primary rounded-[30px] py-3 px-6">
                                Check Status
                         </button>
                    </div>

                </div>
            </div>
          
        </div>
        </section>
          
    
        </main>
      )
   
}