"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Assets
import kaotimBackgroundImage from '@/images/kaotim-background-image.png';
import plusIcon from '@/icons/plus-icon.svg';
import arrowBackIcon from '@/icons/arrow-back-icon.svg';
import chevronRight from '@/icons/chevron-right-icon.svg';

// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Claims() {
  const [tab, setTab] = useState('all');

  return (
    <main>
      <Image className="absolute top-[-10%] sm:top-[-32%] right-[-35%] sm:right-[-15%] z-[1] hidden" src={kaotimBackgroundImage} alt="" />
      <section className="z-[2] relative">
        <div className="mx-auto w-10/12 flex pb-8">
          <Image className="inline-block pr-2" src={arrowBackIcon} alt="" />
          <p className="text-font-primary text-base">Back</p>
        </div>
        <div className="mx-auto w-10/12 flex justify-between align-center">
          <p className="text-[25px] font-bold pb-8 text-black">
            Claims
          </p>
          <button
            className="text-[14px] text-primary border-[1px] border-primary bg-[#FFFFFF] rounded-[30px] py-2 px-3 w-fit flex sm:hidden items-center mb-6">
            <Image className="inline pr-4" src={plusIcon} width={35} alt="" />
            <p>New Submissions</p>
          </button>
        </div>
        <div className="mx-auto w-10/12 pb-6 hidden sm:flex flex-wrap justify-between gap-y-4 items-center">
          <div className="flex flex-wrap gap-2 h-fit">
            <button
              className={`${tab == 'all' ? "border-[#E03DFC] text-[#E03DFC]" : "border-[#000000] text-[#000000]"}  border-[1px] rounded-[40px] py-2 px-6`} onClick={() => setTab("all")}>All</button>
            <button
              className={`${tab == 'approved' ? "border-[#4CAF50] text-[#4CAF50]" : "border-[#000000] text-[#000000]"}  border-[1px] rounded-[40px] py-2 px-6`} onClick={() => setTab("approved")}>Approved</button>
            <button
              className={`${tab == 'pending' ? "border-[#F39200] text-[#F39200]" : "border-[#000000] text-[#000000]"} border-[1px] rounded-[40px] py-2 px-6`} onClick={() => setTab("pending")}>Pending</button>
            <button
              className="border-[#000000] text-[#000000] border-[1px] rounded-[40px] py-2 px-6" onClick={() => setTab("failed")}>Failed</button>
          </div>
          <button
            className="text-[14px] text-primary border-[1px] border-primary bg-[#FFFFFF] rounded-[30px] py-2 px-3 w-fit flex items-center">
            <Image className="inline pr-4" src={plusIcon} width={35} alt="" />
            <p>New Submissions</p>
          </button>
        </div>

        <div className="block sm:hidden ml-10 pb-6">
          <Swiper slidesPerView={3.6} spaceBetween={10} className="tabsSwiper">
            <SwiperSlide>
              <button
                className="border-[#E03DFC] text-[#E03DFC] border-[1px] rounded-[40px] py-2 px-6 bg-[#F1D0F6]" onClick={() => setTab("all")}>All</button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                className="border-[#000000] text-[#000000] border-[1px] rounded-[40px] py-2 px-6 bg-[#FFFFFF]" onClick={() => setTab("approved")}>Approved</button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                className="border-[#000000] text-[#000000] border-[1px] rounded-[40px] py-2 px-6 bg-[#FFFFFF]" onClick={() => setTab("pending")}>Pending</button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                className="border-[#000000] text-[#000000] border-[1px] rounded-[40px] py-2 px-6 bg-[#FFFFFF]" onClick={() => setTab("failed")}>Failed</button>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Main claims body */}
        <div className="mx-auto w-11/12 sm:w-10/12 rounded-[6px] bg-white relative z-10" style={{ boxShadow: "0px 4px 8px 2px #0000000D" }}>
          <div className="grid grid-cols-3 md:grid-cols-5 md:gap-y-0 text-left gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-0 py-4 px-4 sm:px-6">
            <div className="text-font-secondary text-[14px]">
              Certificate No.
            </div>
            <div className="text-font-secondary text-[14px]">
              Products
            </div>
            <div className="text-font-secondary text-[14px]">
              Type of Claim
            </div>
            <div className="hidden sm:block text-font-secondary text-[14px]">
              Submission Date
            </div>
            <div className="hidden sm:block text-font-secondary text-[14px] col-span-2 md:col-span-1">
              Status
            </div>
          </div>

          <div className="border-b-[1px] border-secondary-gray col-span-2 w-11/12 sm:w-full mx-auto"></div>

          <Swiper pagination={{ type: 'fraction', el: '.swiper-pagination' }} navigation={{
            prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next'
          }} modules={[Pagination, Navigation]} className="claimsSwiper" >
            <SwiperSlide>
              <div
                className="grid lg:grid-rows-[50px_50px_50px_50px] px-4 sm:px-0 alternate-grey-rows text-font-primary text-base items-center pb-8">

                {/* First row */}
                <div className="grid grid-cols-3 md:grid-cols-5 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                  <p className="font-semibold">
                    11246685
                  </p>
                  <p className="mt-0">
                    Motorcycle
                  </p>
                  <p className="mt-0">
                    Accidental Death
                  </p>
                  <p className="mt-0 hidden sm:block">
                    10/10/2023
                  </p>
                  <div className="hidden sm:flex items-center justify-center md:justify-between col-span-2 md:col-span-1 gap-x-8">
                    <p className="text-inactive">
                      In Force
                    </p>
                    <Link className="text-primary text-[12px] flex items-center" href="/claims/1">
                      <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                    </Link>
                  </div>
                </div>

                {/* Second row */}
                <div className="grid grid-cols-3 md:grid-cols-5 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                  <p className="font-semibold">
                    2346577
                  </p>
                  <p className="mt-0">
                    Medicard
                  </p>
                  <p className="mt-0">
                    Covid-19
                  </p>
                  <p className="mt-0 hidden sm:block">
                    01/10/2023
                  </p>
                  <div className="hidden sm:flex items-center justify-center md:justify-between col-span-2 md:col-span-1 gap-x-8">
                    <p className="text-inactive">
                      In Force
                    </p>
                    <Link className="text-primary text-[12px] flex items-center" href="/claims/1">
                      <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                    </Link>
                  </div>
                </div>

                {/* Third row */}
                <div className="grid grid-cols-3 md:grid-cols-5 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                  <p className="font-semibold">
                    3234535
                  </p>
                  <p className="mt-0">
                    Travel PA
                  </p>
                  <p className="mt-0">
                    Missing Luggage
                  </p>
                  <p className="mt-0 hidden sm:block`">
                    10/09/2023
                  </p>
                  <div className="hidden sm:flex items-center justify-center md:justify-between col-span-2 md:col-span-1 gap-x-8">
                    <p className="text-inactive">
                      In Force
                    </p>
                    <Link className="text-primary text-[12px] flex items-center" href="/claims/1">
                      <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                    </Link>
                  </div>
                </div>

                {/* Fourth row */}
                <div className="grid grid-cols-3 md:grid-cols-5 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                  <p className="font-semibold">
                    4144356
                  </p>
                  <p className="mt-0">
                    Motorcycle
                  </p>
                  <p className="mt-0">
                    Accidental Death
                  </p>
                  <p className="mt-0 hidden sm:block">
                    02/09/2023
                  </p>
                  <div className="hidden sm:flex items-center justify-center md:justify-between col-span-2 md:col-span-1 gap-x-8">
                    <p className="text-inactive">
                      In Force
                    </p>
                    <Link className="text-primary text-[12px] flex items-center" href="/claims/1">
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
                <div className="grid grid-cols-3 md:grid-cols-5 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                  <p className="font-semibold">
                    11246685
                  </p>
                  <p className="mt-0">
                    Motorcycle
                  </p>
                  <p className="mt-0">
                    Accidental Death
                  </p>
                  <p className="mt-0 hidden sm:block">
                    10/10/2023
                  </p>
                  <div className="hidden sm:flex items-center justify-center md:justify-between col-span-2 md:col-span-1 gap-x-8">
                    <p className="text-inactive">
                      In Force
                    </p>
                    <Link className="text-primary text-[12px] flex items-center" href="/claims/1">
                      <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                    </Link>
                  </div>
                </div>

                {/* Second row */}
                <div className="grid grid-cols-3 md:grid-cols-5 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                  <p className="font-semibold">
                    2346577
                  </p>
                  <p className="mt-0">
                    Medicard
                  </p>
                  <p className="mt-0">
                    Covid-19
                  </p>
                  <p className="mt-0 hidden sm:block">
                    01/10/2023
                  </p>
                  <div className="hidden sm:flex items-center justify-center md:justify-between col-span-2 md:col-span-1 gap-x-8">
                    <p className="text-inactive">
                      In Force
                    </p>
                    <Link className="text-primary text-[12px] flex items-center" href="/claims/1">
                      <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                    </Link>
                  </div>
                </div>

                {/* Third row */}
                <div className="grid grid-cols-3 md:grid-cols-5 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                  <p className="font-semibold">
                    3234535
                  </p>
                  <p className="mt-0">
                    Travel PA
                  </p>
                  <p className="mt-0">
                    Missing Luggage
                  </p>
                  <p className="mt-0 hidden sm:block">
                    10/09/2023
                  </p>
                  <div className="hidden sm:flex items-center justify-center md:justify-between col-span-2 md:col-span-1 gap-x-8">
                    <p className="text-inactive">
                      In Force
                    </p>
                    <Link className="text-primary text-[12px] flex items-center" href="/claims/1">
                      <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                    </Link>
                  </div>
                </div>

                {/* Fourth row */}
                <div className="grid grid-cols-3 md:grid-cols-5 h-full items-start sm:items-center text-left gap-x-4 gap-y-4 md:gap-y-0 py-4 px-2 sm:px-6 lg:py-0">
                  <p className="font-semibold">
                    4144356
                  </p>
                  <p className="mt-0">
                    Motorcycle
                  </p>
                  <p className="mt-0">
                    Accidental Death
                  </p>
                  <p className="mt-0 hidden sm:block">
                    02/09/2023
                  </p>
                  <div className="hidden sm:flex items-center justify-center md:justify-between col-span-2 md:col-span-1 gap-x-8">
                    <p className="text-inactive">
                      In Force
                    </p>
                    <Link className="text-primary text-[12px] flex items-center" href="/claims/1">
                      <span className="pr-2">See Details</span><Image className="swiper-chevron" src={chevronRight} alt="" />
                    </Link>
                  </div>
                </div>

              </div>
            </SwiperSlide>
            <div className="flex border-[#E7E7E7] border-[1px] rounded-[4px] w-fit ml-auto mr-4 mb-6">
              <div className="swiper-button-prev w-fit p-3"></div>
              <div className="swiper-pagination w-fit px-6 flex items-center border-x-[1px] border-[#E7E7E7]"></div>
              <div className="swiper-button-next w-fit p-3"></div>
            </div>
          </Swiper>
        </div>

      </section>

    </main>
  )
}