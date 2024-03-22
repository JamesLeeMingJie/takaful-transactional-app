"use client";

import { useState } from "react";

// Components
import Image from "next/image";
import Link from "next/link";

// Custom components
import Input from "@/components/layout/shared/Form/Input";

// Assets
import testLogo from '@/images/placeholder.jpg';
import kaotimBackgroundImage from '@/images/kaotim-background-image-landing.png';
import customerServiceIcon from '@/icons/customer-service-icon.svg';
import telephoneIcon from '@/icons/telephone-icon.svg';
import emailIcon from '@/icons/email-icon.svg';
import buttonArrow from '@/icons/button-arrow-icon.svg';
import blueArrow from '@/icons/blue-arrow-icon.svg';

// Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <main>
      <Image className="hidden sm:block absolute top-[-10%] right-[-15%] z-1 w-[60%] 3xl:w-[58%]" src={kaotimBackgroundImage} alt="" />
      <section className="z-10 relative overflow-auto">
        <div className="mx-auto w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-x-28">
          <div className="h-fit pb-0 sm:pb-12 lg:pb-0">
            <Swiper spaceBetween={20} pagination={{ clickable: true }} modules={[Pagination]} className="landingSwiper">
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

            <div className="mt-4 hidden sm:flex justify-center">
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
            <p className="text-font-primary text-[22px] sm:text-[32px] font-bold pb-4 sm:pb-8">Welcome to Customer Portal</p>
            <p className="text-font-primary text-[18px] sm:text-[24px] font-normal sm:font-semibold pb-6">Login</p>
            <form action="">
              <div className="grid gap-y-6 pb-8">
                <Input id={"username"} label={"User ID"} type={"text"} name={"username"} spanNum={1} />
                <Input id={"password"} label={"Password"} type={"password"} name={"password"} spanNum={1} />
              </div>
              <button className="mb-10 bg-primary hover:bg-primary/70 transition ease-out duration-300 text-white text-[18px] font-bold w-full rounded-[30px] py-4"
                type="submit">Login</button>
            </form>
            <p className="pb-0 sm:pb-2 flex flex-wrap gap-x-2 gap-y-[5px]">
              <Image className="inline-block" src={blueArrow} alt="" /><span
                className="text-font-primary">Forgot username or password?</span>
              <span className="text-[#237BFF]"><Link href="/register">Click here</Link></span>
            </p>
            <p className="flex gap-x-2">
              <Image className="inline-block" src={blueArrow} alt="" /><span
                className="text-font-primary">New to Kaotim?</span>
              <span className="text-[#237BFF]"><Link href="/register">Register Now</Link></span>
            </p>
          </div>
        </div>

        <div className="mt-12 mx-auto w-9/12 flex sm:hidden justify-center">
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-y-0">
            <div className="p-4 rounded-[8px] grid justify-center w-fit bg-white" style={{
              boxShadow: "0px 4px 4px 0px #C7C9C740"
            }}>

              <div className="pb-2 flex justify-center">
                <Image src={customerServiceIcon} alt="Human Support" />
              </div>

              <p className="text-base font-medium text-font-primary text-center leading-[20px]">Customer Service</p>
              <p className="text-[12px] text-[#595D59] text-center">1-300 88 252 385</p>
            </div>

            <div className="p-4 rounded-[8px] grid justify-center w-full bg-white" style={{
              boxShadow: "0px 4px 4px 0px #C7C9C740"
            }}>
              <div className="pb-2 flex justify-center">
                <Image src={emailIcon} alt="Email Icon" />
              </div>
              <p className="text-base font-medium text-font-primary text-center">Email</p>
              <p className="text-[12px] text-[#595D59] text-center">csu@takaful-<br />malaysia.com.my</p>
            </div>
          </div>
        </div>

      </section>

    </main>
  )
}
