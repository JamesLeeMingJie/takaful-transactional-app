"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Custom components
import Collapsible from "../../../../components/layout/shared/Collapsible";

// Assets
import plusIcon from '@/icons/plus-icon.svg';
import arrowBackIcon from '@/icons/arrow-back-icon.svg';
import downloadDocumentIcon from '@/icons/download-document-icon.svg';
import downloadButtonIcon from '@/icons/download-button-icon.svg';

export default function ClaimsDetail({ params }) {
  const [tab, setTab] = useState("all");

  return (
    <main>
      <section>
        <div className="mx-auto w-10/12 flex pb-8">
          <Image className="inline-block pr-2" src={arrowBackIcon} alt="" />
          <p className="text-font-primary">Back</p>
        </div>
        <p className="mx-auto w-10/12 text-[25px] font-bold pb-8 text-black">
          Claims
        </p>
        <div className="mx-auto w-10/12 pb-6 flex flex-wrap justify-between gap-y-4 items-center">
          <div className="flex flex-wrap gap-2 h-fit">
            <button
              className="border-[#E03DFC] text-[#E03DFC] border-[1px] rounded-[40px] py-2 px-6 bg-[#F1D0F6]" onClick={() => setTab("all")}>All</button>
            <button
              className="border-[#000000] text-[#000000] border-[1px] rounded-[40px] py-2 px-6 bg-[#FFFFFF]" onClick={() => setTab("approved")}>Approved</button>
            <button
              className="border-[#000000] text-[#000000] border-[1px] rounded-[40px] py-2 px-6 bg-[#FFFFFF]" onClick={() => setTab("pending")}>Pending</button>
            <button
              className="border-[#000000] text-[#000000] border-[1px] rounded-[40px] py-2 px-6 bg-[#FFFFFF]" onClick={() => setTab("failed")}>Failed</button>
          </div>
          <button
            className="text-[18px] text-primary border-[1px] border-primary rounded-[30px] py-2 px-3 w-fit flex items-center">
            <Image className="inline pr-4" src={plusIcon} width={35} alt="" />
            <p>New Submissions</p>
          </button>
        </div>

        <div className="w-10/12 mx-auto px-4 sm:px-6 py-8 custom-shadow rounded-[16px]">
          <Collapsible title={"Claims Details"}>
            {/* Find a way to pass state from child back to parent and refactor these elements */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-8 pb-6`}>
              <div className="md:col-span-2 text-[18px] text-font-primary font-bold">
                General Details
              </div>

              <div className="text-[18px]">
                <p className="text-font-secondary">
                  Date Submission
                </p>
                <p className="text-font-primary font-semibold">
                  10/10/2023
                </p>
              </div>

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
                  Motorcycle
                </p>
              </div>

              <div className="text-[18px]">
                <p className="text-font-secondary">
                  Status
                </p>
                <p className="text-font-primary font-semibold">
                  In Force
                </p>
              </div>

              <div className="border-b-[1.5px] border-[#EEEEEE] md:col-span-2"></div>

              <div className="md:col-span-2 text-[18px] text-font-primary font-bold">
                Participant Details
              </div>

              <div className="text-[18px]">
                <p className="text-font-secondary">
                  Name
                </p>
                <p className="text-font-primary font-semibold">
                  Ismail bin Abu
                </p>
              </div>

              <div className="text-[18px]">
                <p className="text-font-secondary">
                  Vehicle No.
                </p>
                <p className="text-font-primary font-semibold">
                  TCA8950
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
                  Email
                </p>
                <p className="text-font-primary font-semibold">
                  ismail.abu20@gmail.com
                </p>
              </div>

              <div className="border-b-[1.5px] border-[#EEEEEE] md:col-span-2"></div>

              <div className="md:col-span-2 text-[18px] text-font-primary font-bold">
                Injured Person Details
              </div>

              <div className="text-[18px]">
                <p className="text-font-secondary">
                  Name
                </p>
                <p className="text-font-primary font-semibold">
                  Ismail bin Abu
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

              <div className="text-[18px] md:col-span-2">
                <p className="text-font-secondary">
                  Relationship with Participant
                </p>
                <p className="text-font-primary font-semibold">
                  Own self
                </p>
              </div>

              <div className="border-b-[1.5px] border-[#EEEEEE] md:col-span-2"></div>

              <div className="md:col-span-2 text-[18px] text-font-primary font-bold">
                Loss Details
              </div>

              <div className="text-[18px]">
                <p className="text-font-secondary">
                  Date of Accident
                </p>
                <p className="text-font-primary font-semibold">
                  14/10/2023
                </p>
              </div>

              <div className="text-[18px]">
                <p className="text-font-secondary">
                  Type of Claim
                </p>
                <p className="text-font-primary font-semibold">
                  Accidental Death
                </p>
              </div>

              <div className="text-[18px]">
                <p className="text-font-secondary">
                  Location
                </p>
                <p className="text-font-primary font-semibold">
                  Ampang
                </p>
              </div>

              <div className="text-[18px]">
                <p className="text-font-secondary">
                  Extent of Injury/Diagnosis
                </p>
                <p className="text-font-primary font-semibold">
                  -
                </p>
              </div>

              <div className="border-b-[1.5px] border-[#EEEEEE] md:col-span-2"></div>

              <div className="md:col-span-2 text-[18px] text-font-primary font-bold">
                Documents
              </div>

              <div className="grid gap-y-8">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <Image className="pr-4" src={downloadDocumentIcon} width={40} alt="" />
                    <p className="text-base sm:text-[18px] text-font-primary">death_cert.pdf</p>
                  </div>
                  <div>
                    <Image className="cursor-pointer" src={downloadButtonIcon} alt="" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <Image className="pr-4" src={downloadDocumentIcon} width={40} alt="" />
                    <p className="text-base sm:text-[18px] text-font-primary">police_report.pdf</p>
                  </div>
                  <div>
                    <Image className="cursor-pointer" src={downloadButtonIcon} alt="" />
                  </div>
                </div>
              </div>

            </div>
          </Collapsible>
        </div>

      </section>
    </main>
  )
}