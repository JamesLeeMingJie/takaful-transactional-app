import Image from "next/image";

// Assets
import pidmLogo from '../../../../public/icons/pidm-logo.svg'

export default function Footer() {
  return (
    <footer className="bg-background-primary text-center text-font-secondary py-6 flex flex-col justify-center">
      <p className="pb-2">Security | Terms & Conditions | Privacy Notice | Customer Service Charter</p>
      <p className="pb-1">Managed by © <span className="text-[#2194FF] underline">Syarikat Takaful Malaysia Keluarga
        Berhad</span>
        198401019089 (131646-K).</p>
      <p className="pb-1">Licensed under the Islamic Financial Services Act 2013 and regulated by Bank Negara Malaysia.</p>
      <p className="flex items-center justify-center gap-x-[5px]">A <Image src={pidmLogo} alt="PIDM logo" /> Member. For more info, please
        refer to <span className="text-[#2194FF] underline">PIDM’s TIPS Brochure</span></p>
    </footer>
  )
}

{/* <footer className="bg-background-primary text-font-secondary py-10 flex flex-col justify-center">
      <div className="w-10/12 mx-auto">
        <p className="pb-4 font-semibold">Underwritten by Syarikat Takaful Malaysia Keluarga Berhad [198401019089 (131646-K)] 2023</p>
        <p>(Licensed under the Financial Services Act 2013 and regulated by Bank Negara Malaysia)</p>
      </div>
    </footer> */}