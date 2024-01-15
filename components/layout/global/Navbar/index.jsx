"use client";
import { usePathname } from "next/navigation";

import Image from "next/image"

// Assets
import navLogo from '../../../../public/logo.svg';
import gridIcon from '@/icons/grid-icon.svg';
import bellIcon from '@/icons/bell-icon.svg';
import notificationIcon from '@/icons/notification-icon.svg';
import userIcon from '@/icons/user-icon.svg';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <header className={`mx-auto w-10/12 pt-8 pb-12 ${pathname == "/" || pathname == "/register" || pathname == "/forgot-password" ? "" : "flex justify-between"}`}>
      <Image src={navLogo} alt="" />
      {pathname == "/" || pathname == "/register" || pathname == "/forgot-password" ? "" :
        <div className="flex pr-8 items-center">
          <Image className="mr-2" src={gridIcon} alt="" />
          <div className="relative">
            <Image className="mr-2" src={bellIcon} alt="" />
            <Image className="absolute top-0 right-[10%]" src={notificationIcon} alt="" />
          </div>
          <Image src={userIcon} alt="" />
        </div>
      }
    </header>
  )
}