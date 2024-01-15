"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// Assets
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
  const swiperPrevButton = useRef(null);
  const swiperPagination = useRef(null);
  const swiperNextButton = useRef(null);

  return (
    <main>
      <section>
        <div className="mx-auto w-10/12 flex pb-8">
          <Image className="inline-block pr-2" src={arrowBackIcon} alt="" />
          <p>Back</p>
        </div>
        <p className="mx-auto w-10/12 text-[25px] font-bold pb-8">
          Claims
        </p>
        <div className="mx-auto w-10/12 pb-4 flex justify-between">
          <div className="flex flex-wrap gap-2 h-fit">
            <button
              className="border-[#E03DFC] text-[#E03DFC] border-[1px] rounded-[40px] py-2 px-6 bg-[#F1D0F6]">All</button>
            <button
              className="border-[#000000] text-[#000000] border-[1px] rounded-[40px] py-2 px-6 bg-[#FFFFFF]">Approved</button>
            <button
              className="border-[#000000] text-[#000000] border-[1px] rounded-[40px] py-2 px-6 bg-[#FFFFFF]">Pending</button>
            <button
              className="border-[#000000] text-[#000000] border-[1px] rounded-[40px] py-2 px-6 bg-[#FFFFFF]">Failed</button>
          </div>
          <button
            className="text-[18px] text-primary border-[1px] border-primary rounded-[30px] py-2 px-3 w-fit flex items-center">
            <Image className="inline pr-4" src={plusIcon} width={35} alt="" />
            <p>New Submissions</p>
          </button>
        </div>

        {/* Main claims body */}
        <div className="mx-auto w-10/12 shadow-lg rounded-[6px]">
          <div className="grid grid-cols-[2fr_2fr_2fr_2fr_2fr] gap-x-4 p-4">
            <div className="text-font-secondary text-[14px]">
              Certificate No.
            </div>
            <div className="text-font-secondary text-[14px]">
              Products
            </div>
            <div className="text-font-secondary text-[14px]">
              Type of Claim
            </div>
            <div className="text-font-secondary text-[14px]">
              Submission Date
            </div>
            <div className="text-font-secondary text-[14px]">
              Status
            </div>
          </div>

          <div className="border-b-[2px] border-[#BBBBBB] col-span-2"></div>

          <Swiper pagination={{ type: 'fraction', el: swiperPagination.current }} navigation={{
            prevEl: swiperPrevButton.current, nextEl: swiperNextButton.current
          }} modules={[Pagination, Navigation]} className="claimsSwiper" onSwiper={function (swiper) {
            console.log(swiper)
          }}>
            <SwiperSlide>
              <div
                className="grid grid-rows-[50px_50px_50px_50px] alternate-grey-rows text-font-primary text-[18px] items-center pb-8">

                {/* First row */}
                <div className="grid grid-cols-[2fr_2fr_2fr_2fr_2fr] h-full items-center gap-x-4 p-4">
                  <p className="font-semibold">
                    11246685
                  </p>
                  <p>
                    Motorcycle
                  </p>
                  <p>
                    Accidental Death
                  </p>
                  <p>
                    10/10/2023
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-inactive">
                      In Force
                    </p>
                    <Link className="text-primary text-[12px] flex" href="/">
                      See Details <Image className="swiper-chevron" src={chevronRight} alt="" />
                    </Link>
                  </div>
                </div>

                {/* Second row */}
                <div className="grid grid-cols-[1fr_2fr_7fr_2fr] h-full items-center gap-x-4 pl-2">
                  <div>
                    2
                  </div>
                  <div>
                    C057
                  </div>
                  <div>
                    Inclusion of special perils
                  </div>
                  <div>
                    Included
                  </div>
                </div>

                {/* Third row */}
                <div className="grid grid-cols-[1fr_2fr_7fr_2fr] h-full items-center gap-x-4 pl-2">
                  <div>
                    3
                  </div>
                  <div>
                    C108
                  </div>
                  <div>
                    Legal liability to pillion
                  </div>
                  <div>
                    Included
                  </div>
                </div>

                {/* Fourth row */}
                <div className="grid grid-cols-[1fr_2fr_7fr_2fr] h-full items-center gap-x-4 pl-2">
                  <div>
                    4
                  </div>
                  <div>
                    C025
                  </div>
                  <div>
                    Strike, Riot & Civil Commotion
                  </div>
                  <div>
                    Included
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="grid grid-rows-[50px_50px_50px_50px] alternate-grey-rows text-font-primary text-[18px] font-semibold items-center pb-8">

                {/* First row */}
                <div className="grid grid-cols-[1fr_2fr_7fr_2fr] h-full items-center gap-x-4 pl-2">
                  <div>
                    1
                  </div>
                  <div>
                    C200
                  </div>
                  <div>
                    Bike PA Plus-Plan 1
                  </div>
                  <div>
                    5,500
                  </div>
                </div>

                {/* Second row */}
                <div className="grid grid-cols-[1fr_2fr_7fr_2fr] h-full items-center gap-x-4 pl-2">
                  <div>
                    2
                  </div>
                  <div>
                    C057
                  </div>
                  <div>
                    Inclusion of special perils
                  </div>
                  <div>
                    Included
                  </div>
                </div>

                {/* Third row */}
                <div className="grid grid-cols-[1fr_2fr_7fr_2fr] h-full items-center gap-x-4 pl-2">
                  <div>
                    3
                  </div>
                  <div>
                    C108
                  </div>
                  <div>
                    Legal liability to pillion
                  </div>
                  <div>
                    Included
                  </div>
                </div>

                {/* Fourth row */}
                <div className="grid grid-cols-[1fr_2fr_7fr_2fr] h-full items-center gap-x-4 pl-2">
                  <div>
                    4
                  </div>
                  <div>
                    C025
                  </div>
                  <div>
                    Strike, Riot & Civil Commotion
                  </div>
                  <div>
                    Included
                  </div>
                </div>
              </div>

            </SwiperSlide>
            <div className="flex border-[#E7E7E7] border-[1px] rounded-[4px] w-fit ml-auto mb-6">
              <div ref={swiperPrevButton} className="swiper-button-prev w-fit p-4"></div>
              <div ref={swiperPagination} className="swiper-pagination w-fit px-8 py-4 border-x-[1px] border-[#E7E7E7]">
              </div>
              <div ref={swiperNextButton} className="swiper-button-next w-fit p-4"></div>
            </div>
          </Swiper>
        </div>

      </section>

    </main>
  )
}