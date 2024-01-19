import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

// Assets
import minusIcon from '@/icons/minus-icon.svg';
import plusIcon from '@/icons/plus-icon.svg';

export default function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const collapsibleContent = useRef(undefined);

  const handleCollapsible = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Collapsible button */}
      <div className="flex justify-between items-center pb-6 cursor-pointer" onClick={handleCollapsible}>
        <p className={`text-font-primary ${pathname.includes("/claims/") ? "text-[22px]" : "text-[18px]"} font-bold`}>{title}</p>
        {isOpen ? <Image src={minusIcon} alt="" /> : <Image src={plusIcon} alt="" />}
      </div>

      {/* This condition doesn't work when page is refreshed. */}

      {/* Collapsible content */}
      <div ref={collapsibleContent} className="collapsible-animation" style={isOpen ? collapsibleContent === undefined ? {} : { height: collapsibleContent?.current?.scrollHeight + "px" } : { height: "0px" }}>
        {children}
      </div >
    </>
  )
}