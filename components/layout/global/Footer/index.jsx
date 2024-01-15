"use client"
import { usePathname } from "next/navigation";

import Image from "next/image";

// Assets
import pidmLogo from '@/icons/pidm-logo.svg';
import messageWithColor from '@/icons/message-with-color-icon.svg';


export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-background-primary z-10">
      <div className="text-center text-font-secondary py-6 flex flex-col justify-center w-10/12 mx-auto relative">
        {pathname == "/homepage" ? <Image className="absolute top-0 right-0 translate-y-[-60%] sm:translate-y-[-45%]" src={messageWithColor} alt="" /> : ""}
        <p className="pb-4 sm:pb-2">Security | Terms & Conditions | Privacy Notice | Customer Service Charter</p>
        <p className="pb-4 sm:pb-1">Managed by © <span className="text-[#2194FF] underline">Syarikat Takaful Malaysia Keluarga Berhad</span> 198401019089 (131646-K).</p>
        <p className="pb-4 sm:pb-1">Licensed under the Islamic Financial Services Act 2013 and regulated by Bank Negara Malaysia.</p>
        <p className="flex items-center justify-center gap-x-[5px] flex-wrap">A <Image src={pidmLogo} alt="PIDM logo" /> Member. For more info, please
          refer to <span className="text-[#2194FF] underline">PIDM’s TIPS Brochure</span></p>
      </div>
    </footer>
  )
}

{/* <footer className="bg-background-primary text-font-secondary py-10 flex flex-col justify-center">
      <div className="w-10/12 mx-auto">
        <p className="pb-4 font-semibold">Underwritten by Syarikat Takaful Malaysia Keluarga Berhad [198401019089 (131646-K)] 2023</p>
        <p>(Licensed under the Financial Services Act 2013 and regulated by Bank Negara Malaysia)</p>
      </div>
    </footer> */}