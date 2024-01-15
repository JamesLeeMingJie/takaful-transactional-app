import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Assets
import minusIcon from '@/icons/minus-icon.svg';
import plusIcon from '@/icons/plus-icon.svg';

export default function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [height, setHeight] = useState(0);

  const handleCollapsible = () => {
    setIsOpen((prev) => !prev);
  };

  // const collapsibleContent = useRef(null);

  // useEffect(() => {
  //   if (isOpen) setHeight(collapsibleContent.current?.getBoundingClientRect().height);
  //   else setHeight(0);
  // }, [isOpen]);

  // useEffect(() => {
  //   if (!height || !isOpen || !collapsibleContent.current) return undefined;

  //   const resizeObserver = new ResizeObserver((el) => {
  //     setHeight(el[0].contentRect.height);
  //   });

  //   resizeObserver.observe(collapsibleContent.current);
  //   return () => {
  //     resizeObserver.disconnect();
  //   };
  // }, [height, isOpen]);

  return (
    <>
      {/* Collapsible button */}
      <div className="flex justify-between items-center pb-6 cursor-pointer" onClick={handleCollapsible}>
        <p className="text-font-primary text-[18px] font-bold">{title}</p>
        {isOpen ? <Image src={minusIcon} alt="" /> : <Image src={plusIcon} alt="" />}
      </div>

      {/* Collapsible content */}
      {isOpen && <div className="collapsible-animation" >{children}</div>
      }
    </>
  )
}