"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Assets
import plusIcon from '@/icons/plus-icon.svg';
import arrowBackIcon from '@/icons/arrow-back-icon.svg';
import chevronRight from '@/icons/chevron-right-icon.svg';
import chevronRightBlack from '@/icons/chevron-right-black-icon.svg';
import kaotimBackgroundImage from '@/images/kaotim-background-image.png';

// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Payment() {
  const [tab, setTab] = useState('successful');

  return (
    <main>
      <Image className="absolute top-[-32%] right-[-15%] z-1 hidden sm:block" src={kaotimBackgroundImage} alt="" />
      <section className="z-10">
        <div className="mx-auto w-10/12 flex pb-8">
          <Image className="inline-block pr-2" src={arrowBackIcon} alt="" />
          <p className="text-font-primary text-base">Back</p>
        </div>
        <p className="mx-auto w-10/12 text-[25px] font-bold pb-8 text-black">
          Payment Overview
        </p>
        <div className="mx-auto w-10/12 pb-6 flex justify-between">
          <div className="flex gap-2 h-fit">
            <button
              className={`${tab == 'successful' ? "border-[#4CAF50] text-[#4CAF50]" : "border-[#000000] text-[#000000]"} border-[1px] rounded-[40px] py-2 px-6`} onClick={() => setTab("successful")}>Successful</button>
            <button
              className={`${tab == 'pending' ? "border-[#F39200] text-[#F39200]" : "border-[#000000] text-[#000000]"} border-[1px] rounded-[40px] py-2 px-6 `} onClick={() => setTab("pending")}>Pending</button>
            <button
              className="border-[#000000] text-[#000000] border-[1px] rounded-[40px] py-2 px-6" onClick={() => setTab("failed")}>Failed</button>
          </div>
        </div>

        {/* Main payment body */}
        <div className="mx-auto w-11/12 sm:w-10/12 rounded-[6px] bg-white relative z-10" style={{ boxShadow: "0px 4px 8px 2px #0000000D" }}>
          <div className={`grid ${tab == 'successful' ? "grid-cols-3 md:grid-cols-4" : "grid-cols-3 md:grid-cols-[1fr_1fr_1fr_2fr]"} text-left gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-0 py-4 px-4 sm:px-6`}>
            <div className="text-font-secondary text-[14px]">
              Certificate No.
            </div>
            <div className="text-font-secondary text-[14px] pl-1 sm:pl-0">
              Name
            </div>
            <div className="text-font-secondary text-[14px]">
              Date & Time
            </div>
            <div className="hidden sm:block text-font-secondary text-[14px]">
              Amount
            </div>
          </div>

          <div className="border-b-[1px] border-secondary-gray col-span-2 w-11/12 sm:w-full mx-auto"></div>

          {tab == "successful" && (
            <Swiper pagination={{ type: 'fraction', el: '.swiper-pagination-successful' }} navigation={{
              prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next'
            }} modules={[Pagination, Navigation]} className="paymentSwiper">
              <SwiperSlide>
                <div
                  className="grid lg:grid-rows-[50px_50px_50px_50px] px-4 sm:px-0 alternate-grey-rows text-font-primary text-base items-center pb-8">

                  {/* First row */}
                  <div className="grid grid-cols-3 md:grid-cols-4 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                    <p className="font-semibold">
                      11246685
                    </p>
                    <p className="mt-0">
                      Motorcycle
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="hidden sm:flex flex-col sm:flex-row items-center justify-between">
                      <p className="mt-0">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center hover:text-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                    </div>
                  </div>

                  {/* Second row */}
                  <div className="grid grid-cols-3 md:grid-cols-4 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                    <p className="font-semibold">
                      2346577
                    </p>
                    <p className="mt-0">
                      Medical
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="hidden sm:flex flex-col sm:flex-row items-center justify-between">
                      <p className="mt-0">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center hover:text-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                    </div>
                  </div>

                  {/* Third row */}
                  <div className="grid grid-cols-3 md:grid-cols-4 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                    <p className="font-semibold">
                      3234535
                    </p>
                    <p className="mt-0">
                      Travel
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="hidden sm:flex flex-col sm:flex-row items-center justify-between">
                      <p className="mt-0">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center hover:text-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                    </div>
                  </div>

                  {/* Fourth row */}
                  <div className="grid grid-cols-3 md:grid-cols-4 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                    <p className="font-semibold">
                      4144356
                    </p>
                    <p className="mt-0">
                      Motorcycle
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="hidden sm:flex flex-col sm:flex-row items-center justify-between">
                      <p className="mt-0">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center hover:text-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="grid lg:grid-rows-[50px_50px_50px_50px] px-4 sm:px-0 alternate-grey-rows text-font-primary text-base items-center pb-8">

                  {/* First row */}
                  <div className="grid grid-cols-3 md:grid-cols-4 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                    <p className="font-semibold">
                      11246685
                    </p>
                    <p className="mt-0">
                      Motorcycle
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="hidden sm:flex flex-col sm:flex-row items-center justify-between">
                      <p className="mt-0">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center hover:text-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                    </div>
                  </div>

                  {/* Second row */}
                  <div className="grid grid-cols-3 md:grid-cols-4 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                    <p className="font-semibold">
                      2346577
                    </p>
                    <p className="mt-0">
                      Medical
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="hidden sm:flex flex-col sm:flex-row items-center justify-between">
                      <p className="mt-0">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center hover:text-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                    </div>
                  </div>

                  {/* Third row */}
                  <div className="grid grid-cols-3 md:grid-cols-4 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                    <p className="font-semibold">
                      3234535
                    </p>
                    <p className="mt-0">
                      Travel
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="hidden sm:flex flex-col sm:flex-row items-center justify-between">
                      <p className="mt-0">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center hover:text-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                    </div>
                  </div>

                  {/* Fourth row */}
                  <div className="grid grid-cols-3 md:grid-cols-4 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                    <p className="font-semibold">
                      4144356
                    </p>
                    <p className="mt-0">
                      Motorcycle
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="hidden sm:flex flex-col sm:flex-row items-center justify-between">
                      <p className="mt-0">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center hover:text-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="flex border-[#E7E7E7] border-[1px] rounded-[4px] w-fit ml-auto mr-4 mb-6">
                <div className="swiper-button-prev w-fit p-3"></div>
                <div className="swiper-pagination-successful w-fit px-6 flex items-center border-x-[1px] border-[#E7E7E7]"></div>
                <div className="swiper-button-next w-fit p-3"></div>
              </div>
            </Swiper>
          )}

          {tab == "pending" && (
            <Swiper pagination={{ type: 'fraction', el: '.swiper-pagination-pending' }} navigation={{
              prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next'
            }} modules={[Pagination, Navigation]} className="paymentSwiper">

              <SwiperSlide>
                <div
                  className="grid lg:grid-rows-[50px_50px_50px_50px] alternate-grey-rows text-font-primary text-base items-center pb-8">

                  {/* First row */}
                  <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_2fr] h-full items-center text-center sm:text-left gap-x-4 gap-y-4 md:gap-y-0 p-6 lg:py-0">
                    <p className="font-semibold">
                      11246685
                    </p>
                    <p className="mt-0">
                      Motorcycle
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center justify-center sm:justify-between">
                      <p className="mt-0 md:pr-20">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center justify-center sm:justify-start hover:text-primary hover:no-underline md:px-8" href="/">
                        <span className="pr-2 whitespace-nowrap">Proceed to payment</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                      <Link className="text-[12px] flex items-center justify-center sm:justify-start text-font-primary hover:text-font-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRightBlack} alt="" />
                      </Link>
                    </div>
                  </div>

                  {/* Second row */}
                  <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_2fr] h-full items-center text-center sm:text-left gap-x-4 gap-y-4 md:gap-y-0 p-6 lg:py-0">
                    <p className="font-semibold">
                      2346577
                    </p>
                    <p className="mt-0">
                      Medical
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center justify-center sm:justify-between">
                      <p className="mt-0 md:pr-20">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center justify-center sm:justify-start hover:text-primary hover:no-underline md:px-8" href="/">
                        <span className="pr-2 whitespace-nowrap">Proceed to payment</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                      <Link className="text-[12px] flex items-center justify-center sm:justify-start text-font-primary hover:text-font-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRightBlack} alt="" />
                      </Link>
                    </div>
                  </div>

                  {/* Third row */}
                  <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_2fr] h-full items-center text-center sm:text-left gap-x-4 gap-y-4 md:gap-y-0 p-6 lg:py-0">
                    <p className="font-semibold">
                      3234535
                    </p>
                    <p className="mt-0">
                      Travel
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center justify-center sm:justify-between">
                      <p className="mt-0 md:pr-20">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center justify-center sm:justify-start hover:text-primary hover:no-underline md:px-8" href="/">
                        <span className="pr-2 whitespace-nowrap">Proceed to payment</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                      <Link className="text-[12px] flex items-center justify-center sm:justify-start text-font-primary hover:text-font-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRightBlack} alt="" />
                      </Link>
                    </div>
                  </div>

                  {/* Fourth row */}
                  <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_2fr] h-full items-center text-center sm:text-left gap-x-4 gap-y-4 md:gap-y-0 p-6 lg:py-0">
                    <p className="font-semibold">
                      4144356
                    </p>
                    <p className="mt-0">
                      Motorcycle
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center justify-center sm:justify-between">
                      <p className="mt-0 md:pr-20">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center justify-center sm:justify-start hover:text-primary hover:no-underline md:px-8" href="/">
                        <span className="pr-2 whitespace-nowrap">Proceed to payment</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                      <Link className="text-[12px] flex items-center justify-center sm:justify-start text-font-primary hover:text-font-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRightBlack} alt="" />
                      </Link>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="grid lg:grid-rows-[50px_50px_50px_50px] alternate-grey-rows text-font-primary text-base items-center pb-8">

                  {/* First row */}
                  <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_2fr] h-full items-center text-center sm:text-left gap-x-4 gap-y-4 md:gap-y-0 p-6 lg:py-0">
                    <p className="font-semibold">
                      11246685
                    </p>
                    <p className="mt-0">
                      Motorcycle
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center justify-center sm:justify-between">
                      <p className="mt-0 md:pr-20">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center justify-center sm:justify-start hover:text-primary hover:no-underline md:px-8" href="/">
                        <span className="pr-2 whitespace-nowrap">Proceed to payment</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                      <Link className="text-[12px] flex items-center justify-center sm:justify-start text-font-primary hover:text-font-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRightBlack} alt="" />
                      </Link>
                    </div>
                  </div>

                  {/* Second row */}
                  <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_2fr] h-full items-center text-center sm:text-left gap-x-4 gap-y-4 md:gap-y-0 p-6 lg:py-0">
                    <p className="font-semibold">
                      2346577
                    </p>
                    <p className="mt-0">
                      Medical
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center justify-center sm:justify-between">
                      <p className="mt-0 md:pr-20">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center justify-center sm:justify-start hover:text-primary hover:no-underline md:px-8" href="/">
                        <span className="pr-2 whitespace-nowrap">Proceed to payment</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                      <Link className="text-[12px] flex items-center justify-center sm:justify-start text-font-primary hover:text-font-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRightBlack} alt="" />
                      </Link>
                    </div>
                  </div>

                  {/* Third row */}
                  <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_2fr] h-full items-center text-center sm:text-left gap-x-4 gap-y-4 md:gap-y-0 p-6 lg:py-0">
                    <p className="font-semibold">
                      3234535
                    </p>
                    <p className="mt-0">
                      Travel
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center justify-center sm:justify-between">
                      <p className="mt-0 md:pr-20">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center justify-center sm:justify-start hover:text-primary hover:no-underline md:px-8" href="/">
                        <span className="pr-2 whitespace-nowrap">Proceed to payment</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                      <Link className="text-[12px] flex items-center justify-center sm:justify-start text-font-primary hover:text-font-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRightBlack} alt="" />
                      </Link>
                    </div>
                  </div>

                  {/* Fourth row */}
                  <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_2fr] h-full items-center text-center sm:text-left gap-x-4 gap-y-4 md:gap-y-0 p-6 lg:py-0">
                    <p className="font-semibold">
                      4144356
                    </p>
                    <p className="mt-0">
                      Motorcycle
                    </p>
                    <p className="mt-0">
                      21/06/2023 15:02:22
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center justify-center sm:justify-between">
                      <p className="mt-0 md:pr-20">
                        234.09
                      </p>
                      <Link className="text-primary text-[12px] flex items-center justify-center sm:justify-start hover:text-primary hover:no-underline md:px-8" href="/">
                        <span className="pr-2 whitespace-nowrap">Proceed to payment</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                      </Link>
                      <Link className="text-[12px] flex items-center justify-center sm:justify-start text-font-primary hover:text-font-primary hover:no-underline" href="/">
                        <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRightBlack} alt="" />
                      </Link>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
              <div className="flex border-[#E7E7E7] border-[1px] rounded-[4px] w-fit ml-auto mr-4 mb-6">
                <div className="swiper-button-prev w-fit p-3"></div>
                <div className="swiper-pagination-pending w-fit px-6 flex items-center border-x-[1px] border-[#E7E7E7]"></div>
                <div className="swiper-button-next w-fit p-3"></div>
              </div>
            </Swiper>
          )}

        </div>

      </section>

    </main>
  )
}