'use client';

import { useState } from "react";
import Image from "next/image";

// Assets
import claimsIcon from '@/icons/claims-icon.svg';
import paymentIcon from '@/icons/payment-icon.svg';
import documentIcon from '@/icons/document-icon.svg';
import chevronRightShadowIcon from '@/icons/chevron-right-shadow-icon.svg';
import circleCar from '@/icons/circle-car-icon.png';
import circleFamily from '@/icons/circle-family-icon.png';
import circlePlane from '@/icons/circle-plane-icon.png';
import messageWithColor from '@/icons/message-with-color-icon.png';

export default function Homepage() {
  const [tab, setTab] = useState('all');

  const cardShadow = {
    boxShadow: "0px 4px 8px 2px #0000000D"
  };

  return (
    <main>
      <section>
        <p className="mx-auto w-10/12 text-[25px] font-bold pb-4 text-black">
          Certificate
        </p>
        <div className="mx-auto w-10/12 pb-4 flex flex-wrap gap-2">
          <button
            className={`${tab == "all" ? "border-[#E03DFC] text-[#E03DFC] bg-[#F1D0F6]" : "border-[#000000] text-[#000000] bg-[#FFFFFF]"} border-[1px] rounded-[40px] py-2 px-6`} onClick={() => setTab("all")}>All</button>
          <button
            className={`${tab == "active" ? "border-[#E03DFC] text-[#E03DFC] bg-[#F1D0F6]" : "border-[#000000] text-[#000000] bg-[#FFFFFF]"} border-[1px] rounded-[40px] py-2 px-6`} onClick={() => setTab("active")}>Active</button>
          <button
            className={`${tab == "inactive" ? "border-[#E03DFC] text-[#E03DFC] bg-[#F1D0F6]" : "border-[#000000] text-[#000000] bg-[#FFFFFF]"} border-[1px] rounded-[40px] py-2 px-6`} onClick={() => setTab("inactive")}>Inactive</button>
        </div>
        <div className="mx-auto w-10/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pb-12 relative">
          <div className="fixed right-[8.5%] top-[45%] z-10">
            <Image className="rounded-full mb-2" style={{
              boxShadow: "0px 2px 8px 2px #0000000D"
            }} src={circleCar} width={45} alt="" />
            <Image className="rounded-full mb-2" style={{
              boxShadow: "0px 2px 8px 2px #0000000D"
            }} src={circleFamily} width={45} alt="" />
            <Image className="rounded-full mb-2" style={{
              boxShadow: "0px 2px 8px 2px #0000000D"
            }} src={circlePlane} width={45} alt="" />
          </div>

          <div className="fixed right-[8.5%] top-[80%] z-10">
            <Image src={messageWithColor} width={60} height={60} alt="" />
          </div>
          {/* 
          {tab != 'inactive' ? (
            <div>
              Hello
            </div>
          ) : (
            <div>Goodbye</div>
          )} */}

          {/* First card */}
          <div className="px-4 py-8 rounded-[16px] grid" style={cardShadow}>
            <div className="flex items-center justify-between pb-4 border-b-[1px] border-[#EEEEEE] gap-x-8">
              <div>
                <p className="text-[18px] text-font-primary font-semibold">
                  Motor
                </p>
                <p className="text-[15px] text-font-secondary">
                  Kaotim Motorcycle
                </p>
              </div>
              <div className="text-[12px] text-white px-3 py-2 rounded-[5px] bg-active w-fit">
                Active
              </div>
            </div>
            <div className="pt-4 pb-20 grid grid-cols-2 grid-rows-3 gap-y-4">

              {/* First row */}
              <div className="text-base text-font-secondary">
                Vehicle No.
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                TCA8950
              </div>

              {/* Second row */}
              <div className="text-base text-font-secondary">
                Certificate No.
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                86050121
              </div>

              {/* Third row */}
              <div className="text-base text-font-secondary">
                Expiry Date
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                24/12/2023
              </div>

            </div>
            <div className="flex justify-end">
              <button className="text-[18px] text-font-secondary border-[1px] border-font-secondary rounded-[30px] py-3 px-6">
                Show Details
              </button>
            </div>
          </div>

          {/* Second card */}
          <div className="px-4 py-8 rounded-[16px] grid" style={cardShadow}>
            <div className="flex items-center justify-between pb-4 border-b-[1px] border-[#EEEEEE] gap-x-8">
              <div>
                <p className="text-[18px] text-font-primary font-semibold">
                  Medical
                </p>
                <p className="text-[15px] text-font-secondary">
                  Kaotim Medicard
                </p>
              </div>
              <div className="text-[12px] text-white px-3 py-2 rounded-[5px] bg-active w-fit">
                Active
              </div>
            </div>
            <div className="pt-4 pb-20 grid grid-cols-2 grid-rows-3 gap-y-4">

              {/* First row */}
              <div className="text-base text-font-secondary">
                Plan Type
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                Bronze
              </div>

              {/* Second row */}
              <div className="text-base text-font-secondary">
                Contribution
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                RM536
              </div>

              {/* Third row */}
              <div className="text-base text-font-secondary relative col-span-2">
                Annual Limit

                {/* Fourth row */}
                <progress className="bg-active absolute bottom-[-100%] left-0 w-full" value="30" max="100"></progress>
                <p className="absolute bottom-[-200%] text-right text-[14px] w-full">
                  <span className="text-active font-semibold">RM200,000</span>/RM1,000,000
                </p>
              </div>

            </div>

            <div className="flex justify-end">
              <button className="text-[18px] text-font-secondary border-[1px] border-font-secondary rounded-[30px] py-3 px-6">
                Show Details
              </button>
            </div>
          </div>

          {/* Third card */}
          <div className="px-4 py-8 rounded-[16px] grid" style={cardShadow}>
            <div className="flex items-center justify-between pb-4 border-b-[1px] border-[#EEEEEE] gap-x-8">
              <div>
                <p className="text-[18px] text-font-primary font-semibold">
                  Motor
                </p>
                <p className="text-[15px] text-font-secondary">
                  Takaful Motor Private Car
                </p>
              </div>
              <div className="text-[12px] text-white px-3 py-2 rounded-[5px] bg-inactive w-fit">
                Inactive
              </div>
            </div>
            <div className="pt-4 pb-20 grid grid-cols-2 grid-rows-3 gap-y-4">

              {/* First row */}
              <div className="text-base text-font-secondary">
                Vehicle No.
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                TCA8950
              </div>

              {/* Second row */}
              <div className="text-base text-font-secondary">
                Certificate No.
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                KNO003456
              </div>

              {/* Third row */}
              <div className="text-base text-font-secondary">
                Expiry Date
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                24/12/2023
              </div>

            </div>
            <div className="flex justify-end">
              <button className="text-[18px] text-white bg-primary rounded-[30px] py-3 px-6">
                Renew Now
              </button>
            </div>
          </div>

          {/* Fourth card */}
          <div className="px-4 py-8 rounded-[16px] grid" style={cardShadow}>
            <div className="flex items-center justify-between pb-4 border-b-[1px] border-[#EEEEEE] gap-x-8">
              <div>
                <p className="text-[18px] text-font-primary font-semibold">
                  Medical
                </p>
                <p className="text-[15px] text-font-secondary">
                  Kaotim Medicard
                </p>
              </div>
              <div className="text-[12px] text-white px-3 py-2 rounded-[5px] bg-active w-fit">
                Active
              </div>
            </div>
            <div className="pt-4 pb-20 grid grid-cols-2 grid-rows-3 gap-y-4">

              {/* First row */}
              <div className="text-base text-font-secondary">
                Plan Type
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                Silver
              </div>

              {/* Second row */}
              <div className="text-base text-font-secondary">
                Contribution
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                RM594
              </div>

              {/* Third row */}
              <div className="text-base text-font-secondary relative col-span-2">
                Annual Limit

                {/* Fourth row */}
                <progress className="bg-active absolute bottom-[-100%] left-0 w-full" value="30" max="100"></progress>
                <p className="absolute bottom-[-200%] text-right text-[14px] w-full">
                  <span className="text-active font-semibold">RM300,000</span>/RM1,000,000
                </p>
              </div>

            </div>

            <div className="flex justify-end">
              <button className="text-[18px] text-font-secondary border-[1px] border-font-secondary rounded-[30px] py-3 px-6">
                Show Details
              </button>
            </div>
          </div>

          {/* Fifth card */}
          <div className="px-4 py-8 rounded-[16px] grid" style={cardShadow}>
            <div className="flex items-center justify-between pb-4 border-b-[1px] border-[#EEEEEE] gap-x-8">
              <div>
                <p className="text-[18px] text-font-primary font-semibold">
                  Motor
                </p>
                <p className="text-[15px] text-font-secondary">
                  Kaotim Motorcycle
                </p>
              </div>
              <div className="text-[12px] text-white px-3 py-2 rounded-[5px] bg-active w-fit">
                Active
              </div>
            </div>
            <div className="pt-4 pb-20 grid grid-cols-2 grid-rows-3 gap-y-4">

              {/* First row */}
              <div className="text-base text-font-secondary">
                Vehicle No.
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                TCA8950
              </div>

              {/* Second row */}
              <div className="text-base text-font-secondary">
                Certificate No.
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                86050121
              </div>

              {/* Third row */}
              <div className="text-base text-font-secondary">
                Expiry Date
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                24/12/2023
              </div>

            </div>
            <div className="flex justify-end">
              <button className="text-[18px] text-font-secondary border-[1px] border-font-secondary rounded-[30px] py-3 px-6">
                Show Details
              </button>
            </div>
          </div>

          {/* Sixth card */}
          <div className="px-4 py-8 rounded-[16px] grid" style={cardShadow}>
            <div className="flex items-center justify-between pb-4 border-b-[1px] border-[#EEEEEE] gap-x-8">
              <div>
                <p className="text-[18px] text-font-primary font-semibold">
                  Medical
                </p>
                <p className="text-[15px] text-font-secondary">
                  Kaotim Medicard
                </p>
              </div>
              <div className="text-[12px] text-white px-3 py-2 rounded-[5px] bg-active w-fit">
                Active
              </div>
            </div>
            <div className="pt-4 pb-20 grid grid-cols-2 grid-rows-3 gap-y-4">

              {/* First row */}
              <div className="text-base text-font-secondary">
                Plan Type
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                Bronze
              </div>

              {/* Second row */}
              <div className="text-base text-font-secondary">
                Contribution
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                RM536
              </div>

              {/* Third row */}
              <div className="text-base text-font-secondary relative col-span-2">
                Annual Limit

                {/* Fourth row */}
                <progress className="bg-active absolute bottom-[-100%] left-0 w-full" value="30" max="100"></progress>
                <p className="absolute bottom-[-200%] text-right text-[14px] w-full">
                  <span className="text-active font-semibold">RM200,000</span>/RM1,000,000
                </p>
              </div>

            </div>

            <div className="flex justify-end">
              <button className="text-[18px] text-font-secondary border-[1px] border-font-secondary rounded-[30px] py-3 px-6">
                Show Details
              </button>
            </div>
          </div>

          {/* Seventh card */}
          <div className="px-4 py-8 rounded-[16px] grid" style={cardShadow}>
            <div className="flex items-center justify-between pb-4 border-b-[1px] border-[#EEEEEE] gap-x-8">
              <div>
                <p className="text-[18px] text-font-primary font-semibold">
                  Motor
                </p>
                <p className="text-[15px] text-font-secondary">
                  Takaful Motor Private Car
                </p>
              </div>
              <div className="text-[12px] text-white px-3 py-2 rounded-[5px] bg-inactive w-fit">
                Inactive
              </div>
            </div>
            <div className="pt-4 pb-20 grid grid-cols-2 grid-rows-3 gap-y-4">

              {/* First row */}
              <div className="text-base text-font-secondary">
                Vehicle No.
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                TCA8950
              </div>

              {/* Second row */}
              <div className="text-base text-font-secondary">
                Certificate No.
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                KNO003456
              </div>

              {/* Third row */}
              <div className="text-base text-font-secondary">
                Expiry Date
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                24/12/2023
              </div>

            </div>
            <div className="flex justify-end">
              <button className="text-[18px] text-white bg-primary rounded-[30px] py-3 px-6">
                Renew Now
              </button>
            </div>
          </div>

          {/* Eighth card */}
          <div className="px-4 py-8 rounded-[16px] grid" style={cardShadow}>
            <div className="flex items-center justify-between pb-4 border-b-[1px] border-[#EEEEEE] gap-x-8">
              <div>
                <p className="text-[18px] text-font-primary font-semibold">
                  Medical
                </p>
                <p className="text-[15px] text-font-secondary">
                  Kaotim Medicard
                </p>
              </div>
              <div className="text-[12px] text-white px-3 py-2 rounded-[5px] bg-active w-fit">
                Active
              </div>
            </div>
            <div className="pt-4 pb-20 grid grid-cols-2 grid-rows-3 gap-y-4">

              {/* First row */}
              <div className="text-base text-font-secondary">
                Plan Type
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                Silver
              </div>

              {/* Second row */}
              <div className="text-base text-font-secondary">
                Contribution
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                RM594
              </div>

              {/* Third row */}
              <div className="text-base text-font-secondary relative col-span-2">
                Annual Limit

                {/* Fourth row */}
                <progress className="bg-active absolute bottom-[-100%] left-0 w-full" value="30" max="100"></progress>
                <p className="absolute bottom-[-200%] text-right text-[14px] w-full">
                  <span className="text-active font-semibold">RM300,000</span>/RM1,000,000
                </p>
              </div>

            </div>

            <div className="flex justify-end">
              <button className="text-[18px] text-font-secondary border-[1px] border-font-secondary rounded-[30px] py-3 px-6">
                Show Details
              </button>
            </div>
          </div>

          {/* Ninth card */}
          <div className="px-4 py-8 rounded-[16px] grid" style={cardShadow}>
            <div className="flex items-center justify-between pb-4 border-b-[1px] border-[#EEEEEE] gap-x-8">
              <div>
                <p className="text-[18px] text-font-primary font-semibold">
                  Motor
                </p>
                <p className="text-[15px] text-font-secondary">
                  Takaful Motor Private Car
                </p>
              </div>
              <div className="text-[12px] text-white px-3 py-2 rounded-[5px] bg-inactive w-fit">
                Inactive
              </div>
            </div>
            <div className="pt-4 pb-20 grid grid-cols-2 grid-rows-3 gap-y-4">

              {/* First row */}
              <div className="text-base text-font-secondary">
                Vehicle No.
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                TCA8950
              </div>

              {/* Second row */}
              <div className="text-base text-font-secondary">
                Certificate No.
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                KNO003456
              </div>

              {/* Third row */}
              <div className="text-base text-font-secondary">
                Expiry Date
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                24/12/2023
              </div>

            </div>
            <div className="flex justify-end">
              <button className="text-[18px] text-white bg-primary rounded-[30px] py-3 px-6">
                Renew Now
              </button>
            </div>
          </div>

          {/* Tenth card */}
          <div className="px-4 py-8 rounded-[16px] grid" style={cardShadow}>
            <div className="flex items-center justify-between pb-4 border-b-[1px] border-[#EEEEEE] gap-x-8">
              <div>
                <p className="text-[18px] text-font-primary font-semibold">
                  Medical
                </p>
                <p className="text-[15px] text-font-secondary">
                  Kaotim Medicard
                </p>
              </div>
              <div className="text-[12px] text-white px-3 py-2 rounded-[5px] bg-active w-fit">
                Active
              </div>
            </div>
            <div className="pt-4 pb-20 grid grid-cols-2 grid-rows-3 gap-y-4">

              {/* First row */}
              <div className="text-base text-font-secondary">
                Plan Type
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                Bronze
              </div>

              {/* Second row */}
              <div className="text-base text-font-secondary">
                Contribution
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                RM536
              </div>

              {/* Third row */}
              <div className="text-base text-font-secondary relative col-span-2">
                Annual Limit

                {/* Fourth row */}
                <progress className="bg-active absolute bottom-[-100%] left-0 w-full" value="30" max="100"></progress>
                <p className="absolute bottom-[-200%] text-right text-[14px] w-full">
                  <span className="text-active font-semibold">RM200,000</span>/RM1,000,000
                </p>
              </div>

            </div>

            <div className="flex justify-end">
              <button className="text-[18px] text-font-secondary border-[1px] border-font-secondary rounded-[30px] py-3 px-6">
                Show Details
              </button>
            </div>
          </div>

          {/* Eleventh card */}
          <div className="px-4 py-8 rounded-[16px] grid" style={cardShadow}>
            <div className="flex items-center justify-between pb-4 border-b-[1px] border-[#EEEEEE] gap-x-8">
              <div>
                <p className="text-[18px] text-font-primary font-semibold">
                  Motor
                </p>
                <p className="text-[15px] text-font-secondary">
                  Kaotim Motorcycle
                </p>
              </div>
              <div className="text-[12px] text-white px-3 py-2 rounded-[5px] bg-active w-fit">
                Active
              </div>
            </div>
            <div className="pt-4 pb-20 grid grid-cols-2 grid-rows-3 gap-y-4">

              {/* First row */}
              <div className="text-base text-font-secondary">
                Vehicle No.
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                TCA8950
              </div>

              {/* Second row */}
              <div className="text-base text-font-secondary">
                Certificate No.
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                86050121
              </div>

              {/* Third row */}
              <div className="text-base text-font-secondary">
                Expiry Date
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                24/12/2023
              </div>

            </div>
            <div className="flex justify-end">
              <button className="text-[18px] text-font-secondary border-[1px] border-font-secondary rounded-[30px] py-3 px-6">
                Show Details
              </button>
            </div>
          </div>

          {/* Twelfth */}
          <div className="px-4 py-8 rounded-[16px] grid" style={cardShadow}>
            <div className="flex items-center justify-between pb-4 border-b-[1px] border-[#EEEEEE] gap-x-8">
              <div>
                <p className="text-[18px] text-font-primary font-semibold">
                  Medical
                </p>
                <p className="text-[15px] text-font-secondary">
                  Kaotim Medicard
                </p>
              </div>
              <div className="text-[12px] text-white px-3 py-2 rounded-[5px] bg-active w-fit">
                Active
              </div>
            </div>
            <div className="pt-4 pb-20 grid grid-cols-2 grid-rows-3 gap-y-4">

              {/* First row */}
              <div className="text-base text-font-secondary">
                Plan Type
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                Silver
              </div>

              {/* Second row */}
              <div className="text-base text-font-secondary">
                Contribution
              </div>
              <div className="text-right text-base text-font-primary font-bold">
                RM594
              </div>

              {/* Third row */}
              <div className="text-base text-font-secondary relative col-span-2">
                Annual Limit

                {/* Fourth row */}
                <progress className="bg-active absolute bottom-[-100%] left-0 w-full" value="30" max="100"></progress>
                <p className="absolute bottom-[-200%] text-right text-[14px] w-full">
                  <span className="text-active font-semibold">RM300,000</span>/RM1,000,000
                </p>
              </div>

            </div>

            <div className="flex justify-end">
              <button className="text-[18px] text-font-secondary border-[1px] border-font-secondary rounded-[30px] py-3 px-6">
                Show Details
              </button>
            </div>
          </div>
        </div>
        <div className="w-10/12 mx-auto justify-center items-center text-primary flex cursor-pointer">
          <span className="pr-2">See All</span><Image className="inline-block" width={25} src={chevronRightShadowIcon} alt="" />
        </div>
      </section>

      <section>
        <p className="mx-auto w-10/12 text-[25px] font-bold pb-4 text-center sm:text-left">
          Quick Links
        </p>
        <div className="mx-auto w-10/12 flex flex-wrap gap-6 justify-center sm:justify-start">
          <div
            className="w-[200px] h-[200px] rounded-[16px] grid grid-rows-[1fr_50px] py-4 items-center justify-center" style={cardShadow}>
            <Image src={claimsIcon} alt="" />
            <p className="text-[22px] text-center">Claims</p>
          </div>
          <div
            className="w-[200px] h-[200px] rounded-[16px] grid grid-rows-[1fr_50px] py-4 items-center justify-center" style={cardShadow}>
            <Image src={paymentIcon} alt="" />
            <p className="text-[22px] text-center">Payment</p>
          </div>
          <div
            className="w-[200px] h-[200px] rounded-[16px] grid grid-rows-[1fr_50px] py-4 items-center justify-center" style={cardShadow}>
            <Image src={documentIcon} alt="" />
            <p className="text-[22px] text-center">Document</p>
          </div>
        </div>
      </section>

    </main >
  )
}