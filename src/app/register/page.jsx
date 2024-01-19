"use client"

import { useState } from "react";

// Components
import Image from "next/image";
import Link from "next/link";

// Assets
import testLogo from '@/images/placeholder.jpg';
import kaotimBackgroundImage from '@/images/kaotim-background-image.png';
import customerServiceIcon from '@/icons/customer-service-icon.svg';
import telephoneIcon from '@/icons/telephone-icon.svg';
import emailIcon from '@/icons/email-icon.svg';
import buttonArrow from '@/icons/button-arrow-icon.svg';
import blueArrow from '@/icons/blue-arrow-icon.svg';
import questionIcon from '@/icons/question-icon.svg';

// Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Register() {
  const [idType, setIdType] = useState('');
  const [isFocus_1, setIsFocus_1] = useState(false);
  const [isFocus_2, setIsFocus_2] = useState(false);
  const [isFocus_3, setIsFocus_3] = useState(false);
  const [isFocus_4, setIsFocus_4] = useState(false);

  function handleInputChange_1(e) {
    e.target.value != "" ? setIsFocus_1(true) : setIsFocus_1(false)
  }

  function handleInputChange_2(e) {
    e.target.value != "" ? setIsFocus_2(true) : setIsFocus_2(false)
  }

  function handleInputChange_3(e) {
    e.target.value != "" ? setIsFocus_3(true) : setIsFocus_3(false)
  }

  function handleInputChange_4(e) {
    e.target.value != "" ? setIsFocus_4(true) : setIsFocus_4(false)
  }

  return (
    <main>
      <Image className="hidden sm:block absolute top-[-15%] right-[-20%] z-1" src={kaotimBackgroundImage} alt="" />
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
            <p className="text-font-primary text-[32px] font-bold pb-8">Register</p>
            <p className="text-font-primary text-[24px] font-semibold pb-6">Register as new user</p>
            <form action="">
              <div className="grid grid-cols-3 gap-x-4">
                <div className="form-parent col-span-1">

                  {/* To fix chevron another time */}
                  <select className={idType != "" ? "ring-1 ring-primary" : ""} name="id-type" value={idType} onChange={(e) => setIdType(e.target.value)}>
                    <option value=""></option>
                    <option value="NRIC">NRIC</option>
                  </select>
                  <label className={idType != "" ? "focused" : ""} htmlFor="id-type">Identification Type</label>
                </div>
                <div className="form-parent col-span-2">
                  <input type="text" name="user-id" onChange={handleInputChange_1}></input>
                  <label className={isFocus_1 ? "focused" : ""} htmlFor="identification-no">Identification No.</label>
                </div>
              </div>

              <div className="form-parent">
                <input type="text" name="email" onChange={handleInputChange_2}></input>
                <label className={isFocus_2 ? "focused" : ""} htmlFor="email">Email</label>
              </div>

              <div className="form-parent">
                <input type="text" name="phone-number" onChange={handleInputChange_3}></input>
                <label className={isFocus_3 ? "focused" : ""} htmlFor="phone-number">Phone Number</label>
              </div>

              <div className="form-parent">
                <input type="text" name="security-phrase" onChange={handleInputChange_4}></input>
                <label className={`${isFocus_4 ? "focused" : ""} flex items-center gap-x-1`} htmlFor="security-phrase">Security Phrase <Image src={questionIcon} alt="" /></label>
              </div>

              <button className="mb-10 bg-primary text-white text-[18px] font-bold w-full rounded-[30px] py-4"
                type="submit">Register</button>
            </form>
            <p className="pb-2 flex gap-x-2">
              <Image className="inline-block" src={blueArrow} alt="" /><span
                className="text-font-primary">Have an account?</span>
              <span className="text-[#237BFF]"><Link href="/">Login here</Link></span>
            </p>
            <p className="pb-4 sm:pb-2 flex flex-wrap gap-x-2 gap-y-[5px]">
              <Image className="inline-block" src={blueArrow} alt="" /><span
                className="text-font-primary">Forgot username or password?</span>
              <span className="text-[#237BFF]"><Link href="/forgot-password">Click here</Link></span>
            </p>
          </div>

        </div>
      </section>


    </main>
  )
}
