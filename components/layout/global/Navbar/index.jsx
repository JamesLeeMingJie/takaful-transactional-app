"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

// Assets
import navLogo from '../../../../public/logo.svg';
import gridIcon from '@/icons/grid-icon.svg';
import gridPurpleIcon from '@/icons/grid-purple-icon.svg';
import bellIcon from '@/icons/bell-icon.svg';
import notificationIcon from '@/icons/notification-icon.svg';
import userIcon from '@/icons/user-icon.svg';
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <header className={`mx-auto w-10/12 pt-8 pb-12 ${pathname == "/" || pathname == "/register" || pathname == "/forgot-password" ? "" : "flex justify-between"}`}>
      <Link className="block w-fit" href={"/"}>
        <Image src={navLogo} alt="" />
      </Link>
      {pathname == "/" || pathname == "/register" || pathname == "/forgot-password" ? "" :
        <div className="flex sm:pr-8 items-end">
          <div className="relative mr-2 z-10" onMouseEnter={() => setIsMenuVisible(true)} onMouseLeave={() => setIsMenuVisible(false)}>
            {isMenuVisible ? <Image src={gridPurpleIcon} alt="" /> : <Image src={gridIcon} alt="" />}
            {isMenuVisible &&
              <div className="absolute right-0">
                <div className="text-font-secondary text-[18px] font-normal px-4 py-8 rounded-[16px] w-[260px] bg-white" style={{ boxShadow: "0px 4px 8px 2px #0000000D" }}>
                  <p className="pb-3">
                    <Link href={"/homepage"}>
                      Home
                    </Link>
                  </p>
                  <p className="pb-3">
                    Certificate
                  </p>
                  <p className="pb-3">
                    Claims
                  </p>
                  <p className="pb-3">
                    Payment
                  </p>
                  <p className="pb-3">
                    Document
                  </p>
                  <p className="pb-3">
                    Support
                  </p>
                </div>
              </div>
            }
          </div>
          <div className="relative">
            <Image className="mr-2" src={bellIcon} alt="" />
            <Image className="absolute top-0 right-[10%]" src={notificationIcon} alt="" />
          </div>
          <Image src={userIcon} alt="" />
        </div >
      }
    </header >
  )
}