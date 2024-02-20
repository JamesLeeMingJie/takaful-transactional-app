import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

// Assets
import minusIcon from '@/icons/minus-icon.svg';
import plusIcon from '@/icons/plus-icon.svg';

export default function Collapsible({ title, spacing, children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [padding, setPadding] = useState('pb-8');
  const pathname = usePathname();

  const collapsibleContent = useRef(undefined);

  // To improve later
  const handleCollapsible = () => {
    setIsOpen((prev) => !prev);

    // setTimeout(() => {
    //   setPadding(isOpen ? "reduce-padding" : "pb-8");
    // }, 900)
  };

  return (
    <>
      {/* Collapsible button */}
      <div className={`flex justify-between items-center cursor-pointer ${spacing ? spacing : padding}`} onClick={handleCollapsible}>
        <p className={`text-font-primary ${pathname.includes("/claims/") ? "text-[22px]" : "text-[18px]"} font-bold w-10/12 md:w-full`}>
          {title}
        </p>
        {isOpen ? <Image src={minusIcon} alt="" /> : <Image src={plusIcon} alt="" />}
      </div>

      {/* This condition doesn't work when upon initial render. */}
      {/* Collapsible content */}
      <div ref={collapsibleContent} className="collapsible-animation" style={isOpen ? collapsibleContent === undefined ? {} : { height: collapsibleContent?.current?.scrollHeight + "px" } : { height: "0px" }}>
        {children}
      </div >
    </>
  )
}