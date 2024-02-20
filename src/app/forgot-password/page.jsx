"use client"

import { useState } from "react";

// Components
import Image from "next/image";
import Link from "next/link";

// Custom components
import Input from "@/components/layout/shared/Form/Input";
import Select from "@/components/layout/shared/Form/Select";

// Assets
import testLogo from '@/images/placeholder.jpg';
import kaotimBackgroundImage from '@/images/kaotim-background-image.png';
import customerServiceIcon from '@/icons/customer-service-icon.svg';
import telephoneIcon from '@/icons/telephone-icon.svg';
import emailIcon from '@/icons/email-icon.svg';
import buttonArrow from '@/icons/button-arrow-icon.svg';
import blueArrow from '@/icons/blue-arrow-icon.svg';

// Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function ForgotPassword() {
  return (
    <main>
      <Image className="hidden sm:block absolute top-[-20%] right-[-20%] z-1 w-[55%]" src={kaotimBackgroundImage} alt="" />
      <section className="z-10 relative">
        <div className="mx-auto w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-x-28">
          <div className="h-fit pb-12 lg:pb-0">
            <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="landingSwiper">
              <SwiperSlide>
                <Image src={testLogo} alt=""></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={testLogo} alt=""></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={testLogo} alt=""></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={testLogo} alt=""></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={testLogo} alt=""></Image>
              </SwiperSlide>
            </Swiper>

            <div className="mt-4 flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 sm:gap-y-0">
                <div className="shadow-lg p-4 rounded-[8px] grid justify-center w-fit bg-white">
                  <div className="grid grid-cols-[30px_1fr] gap-x-2 items-center">
                    <Image src={customerServiceIcon} alt="Human Support" />
                    <p className="text-base font-medium text-font-primary">Customer Service</p>
                  </div>
                  <div className="grid grid-cols-[1fr_40px] items-center">
                    <p className="text-[12px] text-[#595D59]">1-300 88 252 385</p>
                    <div className="flex justify-end cursor-pointer">
                      <Image src={telephoneIcon} alt="Telephone Icon" />
                    </div>
                  </div>
                </div>

                <div className="shadow-lg p-4 rounded-[8px] grid justify-center w-full bg-white">
                  <div className="grid grid-cols-[30px_1fr] gap-x-4 items-center">
                    <Image src={emailIcon} alt="Email Icon" />
                    <p className="text-base font-medium text-font-primary">Email</p>
                  </div>
                  <div className="grid grid-cols-[1fr_40px] gap-x-4 items-center justify-between">
                    <p className="text-[12px] text-[#595D59]">csu@takaful-<br />malaysia.com.my</p>
                    <div className="flex justify-end cursor-pointer">
                      <Image src={buttonArrow} alt="Button Arrow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-font-primary text-[32px] font-bold pb-8">Forgot your password</p>
            <p className="text-font-primary text-[24px] font-semibold pb-6">Reset your password/username</p>
            <form action="">
              <div className="pb-6">
                <Input id={"email"} label={"Email"} type={"text"} name={"email"} spanNum={1} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 md:grid-rows-none gap-y-4 md:gap-y-0 gap-x-4 pb-8">
                {/* To fix chevron another time */}
                <Select id={"identification-type"} label={"Identification Type"} name={"identification-type"} spanNum={1}>
                  <option value=""></option>
                  <option value="NRIC">NRIC</option>
                </Select>
                <Input id={"identification-no"} label={"Identification No"} type={"text"} name={"identification-no"} spanNum={2} />
              </div>

              <button className="mb-10 bg-primary text-white text-[18px] font-bold w-full rounded-[30px] py-4"
                type="submit">Send To Email</button>
            </form>
            <p className="pb-2 flex gap-x-2">
              <Image className="inline-block" src={blueArrow} alt="" /><span
                className="text-font-primary">Have an account?</span>
              <span className="text-[#237BFF]"><Link href="/">Login here</Link></span>
            </p>
            <p className="flex gap-x-2">
              <Image className="inline-block" src={blueArrow} alt="" /><span
                className="text-font-primary">First time here?</span>
              <span className="text-[#237BFF]"><Link href="/register">Register here</Link></span>
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}
