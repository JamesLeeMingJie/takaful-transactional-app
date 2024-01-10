"use client";

import Image from "next/image";
import { useState } from "react";

// Assets
import arrowBackIcon from '@/icons/arrow-back-icon.svg';
import generalTakafulIcon from '@/icons/general-takaful-icon.svg';
import familyTakafulIcon from '@/icons/family-takaful-icon.svg';
import minusIcon from '@/icons/minus-icon.svg';
import calendarIcon from '@/icons/calendar-icon.svg';
import downloadDocumentIcon from '@/icons/download-document-icon.svg';
import downloadButtonIcon from '@/icons/download-button-icon.svg';

export default function CertificateDetails() {
  const [tab, setTab] = useState("certificate");

  return (
    <main className="pb-24">
      <section>
        <div className="mx-auto w-10/12 flex pb-8">
          <Image className="inline-block pr-2" src={arrowBackIcon} alt="" />
          <p>Back</p>
        </div>

        <div className="mx-auto w-10/12 grid grid-cols-[1fr_3fr] gap-x-4 pb-8">
          <p className="text-[25px] font-bold self-end leading-none">
            Certificate Details
          </p>
          <div>
            <div className="bg-background-primary py-2 px-3 w-fit flex gap-x-4 rounded-[8px]">
              <button className={`${tab == "certificate" ? "bg-white" : ""} text-font-primary text-[18px] font-medium py-2 px-2.5 rounded-[6px]`}
                onClick={() => setTab("certificate")}>
                Certificate
              </button>
              <button className={`${tab == "claims" ? "bg-white" : ""} text-font-primary text-[18px] font-medium py-2 px-2.5 rounded-[6px]`}
                onClick={() => setTab("claims")}>
                Claims
              </button>
              <button className={`${tab == "payment" ? "bg-white" : ""} text-font-primary text-[18px] font-medium py-2 px-2.5 rounded-[6px]`}
                onClick={() => setTab("payment")}>
                Payment
              </button>
              <button className={`${tab == "document" ? "bg-white" : ""} text-font-primary text-[18px] font-medium py-2 px-2.5 rounded-[6px]`}
                onClick={() => setTab("document")}>
                Document
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto w-10/12 grid grid-cols-[1fr_3fr] gap-x-4">
          {/* ===== Left column ===== */}
          <div>
            {/* General Takaful */}
            <div className="pb-8">
              <div className="flex">
                <Image className="pr-2 -translate-y-1" src={generalTakafulIcon} alt="" />
                <p className="text-font-primary text-[18px] font-bold">
                  General Takaful
                </p>
              </div>
              {/* To add padding below here if needed */}
              <div className="border-[#EEEEEE] border-l-[1px]">
                {/* This translate will produce some frontend "bugs", to perfect later */}
                <div className="translate-y-[15px]">
                  <div className="py-3 px-4 rounded-[12px] bg-background-primary ml-4">
                    <p className="text-[18px]">
                      <span className="text-font-primary font-bold">Motor - </span>
                      <span className="text-font-secondary">Kaotim Motorcycle</span>
                    </p>
                    <p className="text-[#BBBBBB] text-[10px]">
                      Certificate No- TMMC0000829/V0499577
                    </p>
                  </div>
                  <div className="py-3 px-4 rounded-[12px] ml-4">
                    <p className="text-[18px]">
                      <span className="text-font-primary font-bold">Motor - </span>
                      <span className="text-font-secondary">Kaotim Motorcycle</span>
                    </p>
                    <p className="text-[#BBBBBB] text-[10px]">
                      Certificate No- TMMC0000829/V0499577
                    </p>
                  </div>
                  <div className="py-3 px-4 rounded-[12px] ml-4">
                    <p className="text-[18px]">
                      <span className="text-font-primary font-bold">Motor - </span>
                      <span className="text-font-secondary">Kaotim Motorcycle</span>
                    </p>
                    <p className="text-[#BBBBBB] text-[10px]">
                      Certificate No- TMMC0000829/V0499577
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End General Takaful */}

            {/* Family Takaful */}
            <div>
              <div className="flex">
                <Image className="pr-2 -translate-y-1" src={familyTakafulIcon} alt="" />
                <p className="text-font-primary text-[18px] font-bold">
                  Family Takaful
                </p>
              </div>
              {/* To add padding below here if needed */}
              <div className="border-[#EEEEEE] border-l-[1px]">
                {/* This translate will produce some frontend "bugs", to perfect later */}
                <div className="translate-y-[15px]">
                  <div className="py-3 px-4 rounded-[12px] ml-4">
                    <p className="text-[18px]">
                      <span className="text-font-primary font-bold">Takaful - </span>
                      <span className="text-font-secondary">Medicard</span>
                    </p>
                    <p className="text-[#BBBBBB] text-[10px]">
                      Certificate No- TMMC0000829/V0499577
                    </p>
                  </div>
                  <div className="py-3 px-4 rounded-[12px] ml-4">
                    <p className="text-[18px]">
                      <span className="text-font-primary font-bold">Takaful - </span>
                      <span className="text-font-secondary">Term</span>
                    </p>
                    <p className="text-[#BBBBBB] text-[10px]">
                      Certificate No- TMMC0000829/V0499577
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Family Takaful */}
          </div>
          {/* ===== End Left column ===== */}

          {/* ===== Right column ===== */}
          <div className="px-6 py-8 custom-shadow rounded-[16px]">
            {/* Certificate tab */}

            {/* tab-content-animation */}
            {tab == "certificate" &&
              <div>
                {/* ===== First collapsible ===== */}
                <div className="border-b-[1.5px] border-[#EEEEEE] certificate-padding active">
                  {/* Collapsible button */}
                  <div className="flex justify-between pb-6 certificate-collapsible">
                    <p className="text-font-primary text-[18px] font-bold">Certificate Details</p>
                    <Image src={minusIcon} alt="" />
                  </div>

                  {/* Collapsible content */}
                  <div className="grid grid-cols-2 gap-y-8 certificate-content active">
                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Certificate No.
                      </p>
                      <p className="text-font-primary font-semibold">
                        TMMC0000829/V0499577
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Product Name
                      </p>
                      <p className="text-font-primary font-semibold">
                        Kaotim Motorcycle
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Vehicle No.
                      </p>
                      <p className="text-font-primary font-semibold">
                        JQV6531
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Vehicle Model
                      </p>
                      <p className="text-font-primary font-semibold">
                        SYM Jet Power
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        NCD(%)
                      </p>
                      <p className="text-font-primary font-semibold">
                        0.00
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Sum Covered (RM)
                      </p>
                      <p className="text-font-primary font-semibold">
                        1,400
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Effective Date
                      </p>
                      <p className="text-font-primary font-semibold">
                        11/08/2023
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Expiry Date
                      </p>
                      <p className="text-font-primary font-semibold">
                        10/08/2024
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Details of Branch
                      </p>
                      <p className="text-font-primary font-semibold">
                        MYCC Menara Takaful Malaysia
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Excess (RM)
                      </p>
                      <p className="text-font-primary font-semibold">
                        0
                      </p>
                    </div>

                  </div>
                </div>
                {/* ===== End First collapsible ===== */}

                {/* ===== Second collapsible ===== */}
                <div className="pt-6 border-b-[1.5px] border-[#EEEEEE] certificate-padding active">
                  {/* Collapsible button */}
                  <div className="flex justify-between pb-6 certificate-collapsible">
                    <p className="text-font-primary text-[18px] font-bold">Participant Details</p>
                    <Image src={minusIcon} alt="" />
                  </div>

                  {/* Collapsible content */}
                  <div className="grid grid-cols-2 gap-y-8 certificate-content active">
                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Full Name
                      </p>
                      <p className="text-font-primary font-semibold">
                        Ismail Abu bin Mamat
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Phone No.
                      </p>
                      <p className="text-font-primary font-semibold">
                        0123456789
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Identification No.
                      </p>
                      <p className="text-font-primary font-semibold">
                        601112-01-5543
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Gender
                      </p>
                      <p className="text-font-primary font-semibold">
                        Male
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Email
                      </p>
                      <p className="text-font-primary font-semibold">
                        ismail.abu20@gmail.com
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Marital Status
                      </p>
                      <p className="text-font-primary font-semibold">
                        Married
                      </p>
                    </div>

                    <div className="text-[18px] col-span-2">
                      <p className="text-font-secondary">
                        Address Line 1
                      </p>
                      <p className="text-font-primary font-semibold">
                        No 100-2-G, Casadera Apartment
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Address Line 2
                      </p>
                      <p className="text-font-primary font-semibold">
                        Persiaran Margosa
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Address Line 3
                      </p>
                      <p className="text-font-primary font-semibold">
                        Jalan PJU/9
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Postcode
                      </p>
                      <p className="text-font-primary font-semibold">
                        52200
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        City
                      </p>
                      <p className="text-font-primary font-semibold">
                        Bandar Sri Damansara
                      </p>
                    </div>

                    <div className="text-[18px] col-span-2">
                      <p className="text-font-secondary">
                        State
                      </p>
                      <p className="text-font-primary font-semibold">
                        Kuala Lumpur
                      </p>
                    </div>

                  </div>
                </div>
                {/* ===== End Second collapsible ===== */}

                {/* ===== Third collapsible ===== */}
                <div className="pt-6 border-b-[1.5px] border-[#EEEEEE] certificate-padding active">
                  {/* Collapsible button */}
                  <div className="flex justify-between pb-6 certificate-collapsible">
                    <p className="text-font-primary text-[18px] font-bold">Contribution Details</p>
                    <Image src={minusIcon} alt="" />
                  </div>

                  {/* Collapsible content */}
                  <div className="grid grid-cols-2 gap-y-8 certificate-content active">
                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Basic Contribution
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-primary font-bold">
                        RM1073.47
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-primary">
                        No Claim Discount (38.33%)
                      </p>
                    </div>


                    <div className="text-[18px]">
                      <p className="text-primary font-bold">
                        -RM411.46
                      </p>
                    </div>

                    {/* Width below will not be responsive! Find a better solution */}
                    <div className="border-b-[1.5px] border-[#EEEEEE] col-span-2 w-[63%]"></div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Base Contribution
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-primary font-bold">
                        RM662.01
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Service Tax (6%)
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-primary font-bold">
                        RM36.83
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Stamp Duty
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-primary font-bold">
                        RM10.00
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-primary">
                        Rebate (10%)
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-primary font-bold">
                        -RM70.88
                      </p>
                    </div>

                    <div className="border-b-[1.5px] border-[#EEEEEE] col-span-2 w-[63%]"></div>

                    <div className="text-[18px] col-span-2">
                      <p className="text-font-primary">
                        Add On
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Legal liability to passengers
                      </p>
                    </div>

                    <div className="text-[18px]">
                      <p className="text-font-primary font-bold">
                        RM250
                      </p>
                    </div>

                    <div className="border-b-[1.5px] border-[#EEEEEE] col-span-2 w-[63%]"></div>

                    <div className="text-[18px]">
                      <p className="text-font-secondary">
                        Total Contribution
                      </p>
                    </div>

                    <div className="text-[22px]">
                      <p className="text-font-primary font-bold">
                        RM887.96
                      </p>
                    </div>

                  </div>
                </div>
                {/* ===== End Third collapsible ===== */}

                {/* ===== Fourth collapsible ===== */}
                <div className="pt-6 mb-6 border-b-[1.5px] border-[#EEEEEE] certificate-padding active">
                  {/* Collapsible button */}
                  <div className="flex justify-between pb-6 certificate-collapsible">
                    <p className="text-font-primary text-[18px] font-bold">List of Rider Coverage</p>
                    <Image src={minusIcon} alt="" />
                  </div>

                  {/* Collapsible content */}
                  <div className="certificate-content active">
                    <div className="grid grid-cols-[1fr_2fr_7fr_2fr] gap-x-4 pb-2 pl-2 ">
                      <div className="text-font-secondary text-[14px]">
                        No.
                      </div>
                      <div className="text-font-secondary text-[14px]">
                        Endorsement Code
                      </div>
                      <div className="text-font-secondary text-[14px]">
                        Description
                      </div>
                      <div className="text-font-secondary text-[14px]">
                        Sum Covered (RM)
                      </div>
                    </div>

                    <div className="border-b-[2px] border-[#BBBBBB] col-span-2"></div>

                    <div className="swiper certificateSwiper">
                      <div className="swiper-wrapper">
                        {/* First slide */}
                        <div className="swiper-slide">
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
                        </div>

                        {/* Second slide */}
                        <div className="swiper-slide">
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
                        </div>

                        {/* Third slide */}
                        <div className="swiper-slide">
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
                        </div>

                      </div>

                      {/* W-fit and justify-end doesn't work together */}
                      <div className="flex justify-end">
                        <div className="flex w-fit rounded-[4px] border-[#E7E7E7] border-[1px]">
                          <div className="swiper-button-prev p-2"></div>
                          <div className="border-[#E7E7E7] border-x-[1px] px-4 py-[3px] swiper-pagination"></div>
                          <div className="swiper-button-next p-2"></div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
                {/* ===== End Fourth collapsible ===== */}

                <p className="text-font-primary text-[18px] font-bold pb-4">
                  Others
                </p>

                <div className="flex gap-x-2">
                  <button
                    className="text-[18px] text-font-secondary border-[1px] border-font-secondary rounded-[30px] py-3 px-6">
                    Download e-Certificate
                  </button>
                  <button
                    className="text-[18px] text-font-secondary border-[1px] border-font-secondary rounded-[30px] py-3 px-6">
                    View Notice of Expiry
                  </button>
                </div>
              </div>
            }
            {/* End certificate tab */}

            {/* Claims tab */}
            {tab == "claims" &&
              <div>
                {/* ===== First collapsible ===== */}
                <div className="border-b-[1.5px] border-[#EEEEEE] certificate-padding active">
                  {/* Collapsible button */}
                  <div className="flex justify-between pb-6 certificate-collapsible">
                    <p className="text-font-primary text-[18px] font-bold">Claim Result</p>
                    <Image src={minusIcon} alt="" />
                  </div>

                  {/* Collapsible content */}
                  <div className="grid grid-cols-2 gap-y-8 certificate-content active">
                    <div className="form-parent overflow-visible">
                      <Image className="absolute right-[3%] top-[25%]" src={calendarIcon} alt="" />
                      <input id="daterangepicker" className="pl-2 text-[18px] text-font-secondary" type="text" name="daterange"
                        value="--Choose Date--"></input>
                      <label for="daterangepicker">Filter by Date</label>
                    </div>

                    <p className="text-base text-font-primary col-span-2">
                      Status: <span className="text-inactive">Pending</span>
                    </p>

                    <div className="col-span-2 flex items-center">
                      <p className="text-[18px] font-semibold text-font-primary pr-12">
                        To submit or check status claim please click here
                      </p>

                      <button className="text-[18px] text-primary border-[1px] border-primary rounded-[30px] py-3 px-6 w-fit">
                        Claim Now
                      </button>
                    </div>

                  </div>
                </div>
                {/* ===== End First collapsible ===== */}
              </div>
            }
            {/* End claims tab */}

            {/* Payment tab */}
            {tab == "payment" &&
              <div>
                {/* ===== First collapsible ===== */}
                <div className="border-b-[1.5px] border-[#EEEEEE] certificate-padding active">
                  {/* Collapsible button */}
                  <div className="flex justify-between pb-6 certificate-collapsible">
                    <p className="text-font-primary text-[18px] font-bold">Payment & Receipts</p>
                  </div>

                  {/* Collapsible content */}
                  <div className="grid grid-cols-2 gap-y-8 certificate-content active">
                    <div className="form-parent overflow-visible">
                      <Image className="absolute right-[3%] top-[25%]" src={calendarIcon} alt="" />
                      <input id="daterangepicker" className="pl-2 text-[18px] text-font-secondary" type="text" name="daterange"
                        value="--Choose Date--"></input>
                      <label for="daterangepicker">Filter by Date</label>
                    </div>

                    <p className="text-base text-font-primary col-span-2">
                      Status: <span className="text-inactive">Pending</span>
                    </p>

                    <div className="col-span-2 flex items-center">
                      <p className="text-[18px] font-semibold text-font-primary pr-12">
                        To submit or check status claim please click here
                      </p>

                      <button className="text-[18px] text-primary border-[1px] border-primary rounded-[30px] py-3 px-6 w-fit">
                        Claim Now
                      </button>
                    </div>

                  </div>
                </div>
                {/* ===== End First collapsible ===== */}
              </div>
            }
            {/* End payment tab */}

            {/* Document tab */}
            {tab == "document" &&
              <div>
                {/* ===== First collapsible ===== */}
                <div>
                  {/* Collapsible button */}
                  <div className="flex justify-between pb-6">
                    <p className="text-font-primary text-[18px] font-bold">Related Documents</p>
                  </div>

                  {/* Collapsible content */}
                  <div className="grid gap-y-8">
                    <div className="flex justify-between">
                      <div className="flex">
                        <Image className="pr-4" src={downloadDocumentIcon} alt="" />
                        <p className="text-[18px] text-font-primary">policy_cert_14804.pdf</p>
                      </div>
                      <div>
                        <Image className="cursor-pointer" src={downloadButtonIcon} alt="" />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex">
                        <Image className="pr-4" src={downloadDocumentIcon} alt="" />
                        <p className="text-[18px] text-font-primary">policy_cert_14804.pdf</p>
                      </div>
                      <div>
                        <Image className="cursor-pointer" src={downloadButtonIcon} alt="" />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex">
                        <Image className="pr-4" src={downloadDocumentIcon} alt="" />
                        <p className="text-[18px] text-font-primary">policy_cert_14804.pdf</p>
                      </div>
                      <div>
                        <Image className="cursor-pointer" src={downloadButtonIcon} alt="" />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex">
                        <Image className="pr-4" src={downloadDocumentIcon} alt="" />
                        <p className="text-[18px] text-font-primary">policy_cert_14804.pdf</p>
                      </div>
                      <div>
                        <Image className="cursor-pointer" src={downloadButtonIcon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* ===== End First collapsible ===== */}
              </div>
            }
            {/* End document tab */}

          </div>
          {/* ===== End Right column ===== */}
        </div>

      </section>

    </main>
  )
}