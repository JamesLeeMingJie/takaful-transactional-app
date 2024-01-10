"use client"

import Image from "next/image"

// Assets
import testLogo from '@/images/placeholder.jpg';
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

export default function Home() {
  return (
    <main className="pb-20">
      <section>
        <div className="mx-auto w-10/12 grid sm:grid-cols-1 lg:grid-cols-2 gap-x-32">
          <div className="h-fit">
            <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="loginSwiper">
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
              <div className="grid grid-cols-2 gap-x-4">

                <div className="shadow-lg p-4 rounded-[8px] grid justify-center w-fit">
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

                <div className="shadow-lg p-4 rounded-[8px] grid justify-center w-fit">
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

          {/* To change the state of the form once login is successful */}
          <div>
            <p className="text-font-primary text-[32px] font-bold pb-8">Welcome to Customer Portal</p>
            <p className="text-font-primary text-[24px] font-semibold pb-6">Login</p>
            <form action="">
              <input placeholder="920202-06-5105" className="mb-6" type="text" name="user-id"></input>
              <input placeholder="***********" className="mb-10" type="password" name="password"></input>
              <button className="mb-10 bg-primary text-white text-[18px] font-bold w-full rounded-[30px] py-4"
                type="submit">Login</button>
            </form>
            <p className="pb-2 flex gap-x-2">
              <Image className="inline-block" src={blueArrow} alt="" /><span
                className="text-font-primary">Forgot username or password?</span>
              <span className="text-[#237BFF]"><a href="#">Click here</a></span>
            </p>
            <p className="flex gap-x-2">
              <Image className="inline-block" src={blueArrow} alt="" /><span
                className="text-font-primary">New to Kaotim?</span>
              <span className="text-[#237BFF]"><a href="#">Register Now</a></span>
            </p>
          </div>
          {/* End state change */}

        </div>
      </section>


    </main>
  )
}
