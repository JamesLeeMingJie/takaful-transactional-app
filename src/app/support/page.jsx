"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Custom components
import Collapsible from "@/components/layout/shared/Collapsible";

// Assets
import arrowBackIcon from '@/icons/arrow-back-icon.svg';
import downloadDocumentIcon from '@/icons/download-document-icon.svg';
import downloadButtonIcon from '@/icons/download-button-icon.svg';
import buttonArrow from '@/icons/button-arrow-icon.svg';
import telephoneIcon from '@/icons/telephone-icon.svg';

export default function Support() {
  return (
    <main>
      <section>
        <div className="mx-auto w-10/12 flex pb-8">
          <Image className="inline-block pr-2" src={arrowBackIcon} alt="" />
          <Link href="/claims">
            <p className="text-font-primary">Back to home</p>
          </Link>
        </div>
        <p className="mx-auto w-10/12 text-[25px] font-bold pb-8 text-black">
          Support
        </p>

        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
          <div className="flex rounded-[7px] justify-between px-6 py-4" style={{ boxShadow: "0px 4px 8px 2px #0000000D" }}>
            <div className="text-[18px]">
              <p className="text-font-secondary">
                Email
              </p>
              <p className="mt-0 text-font-primary">csu@takaful-malaysia.com.my</p>
            </div>
            <Image src={buttonArrow} alt="Button Arrow" />
          </div>
          <div className="flex rounded-[7px] justify-between px-6 py-4" style={{ boxShadow: "0px 4px 8px 2px #0000000D" }}>
            <div className="text-[18px]">
              <p className="text-font-secondary">
                Customer Service
              </p>
              <p className="mt-0 text-font-primary">1-300 88 252 385</p>
            </div>
            <Image src={telephoneIcon} alt="Telephone Icon" />
          </div>
          <div className="flex rounded-[7px] justify-between px-6 py-4" style={{ boxShadow: "0px 4px 8px 2px #0000000D" }}>
            <div className="text-[18px]">
              <p className="text-font-secondary">
                Fax
              </p>
              <p className="mt-0 text-font-primary">+603 2274 0237</p>
            </div>
            <Image src={buttonArrow} alt="Button Arrow" />
          </div>
          <div className="flex rounded-[7px] justify-between px-6 py-4" style={{ boxShadow: "0px 4px 8px 2px #0000000D" }}>
            <div className="text-[18px]">
              <p className="text-font-secondary">
                Claim Guide
              </p>
              <p className="mt-0 text-font-primary">Submit Claim</p>
            </div>
            <Image src={buttonArrow} alt="Button Arrow" />
          </div>
        </div>

        <p className="mx-auto w-10/12 text-[25px] font-bold pb-8 text-black">
          Frequently Asked Questions (FAQ)
        </p>

        <div className="w-10/12 mx-auto px-4 sm:px-6 py-8 custom-shadow rounded-[16px]">
          <Collapsible title={"Who can apply for this plan and what is the eligible entry age?"} spacing={"pb-12"}>
            {/* Find a way to pass state from child back to parent and refactor these elements */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-8 pb-8`}>
              <div className="md:col-span-2 text-[18px] text-[#212721] w-11/12 ">
                An individual aged 19 years old next birthday to 69 years old next birthday can apply for this plan. As a parent, you can also apply for this plan for your child who must be at least 30 days old next birthday to 18 years old next birthday at the point of the enrolment
              </div>
            </div>
          </Collapsible>
          <Collapsible title={"Do I need to go for a medical examination?"}>
            {/* Find a way to pass state from child back to parent and refactor these elements */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-8 pb-8`}>
              <div className="md:col-span-2 text-[18px] text-[#212721] w-11/12 ">
                An individual aged 19 years old next birthday to 69 years old next birthday can apply for this plan. As a parent, you can also apply for this plan for your child who must be at least 30 days old next birthday to 18 years old next birthday at the point of the enrolment
              </div>
            </div>
          </Collapsible>
          <Collapsible title={"Is there a medical card provided for this plan?"}>
            {/* Find a way to pass state from child back to parent and refactor these elements */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-8 pb-8`}>
              <div className="md:col-span-2 text-[18px] text-[#212721] w-11/12 ">
                An individual aged 19 years old next birthday to 69 years old next birthday can apply for this plan. As a parent, you can also apply for this plan for your child who must be at least 30 days old next birthday to 18 years old next birthday at the point of the enrolment
              </div>
            </div>
          </Collapsible>
          <Collapsible title={"How much contribution do I have to pay?"}>
            {/* Find a way to pass state from child back to parent and refactor these elements */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-8 pb-8`}>
              <div className="md:col-span-2 text-[18px] text-[#212721] w-11/12 ">
                An individual aged 19 years old next birthday to 69 years old next birthday can apply for this plan. As a parent, you can also apply for this plan for your child who must be at least 30 days old next birthday to 18 years old next birthday at the point of the enrolment
              </div>
            </div>
          </Collapsible>
          <Collapsible title={"Will I get a refund if I surrender my certificate?"}>
            {/* Find a way to pass state from child back to parent and refactor these elements */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-8 pb-8`}>
              <div className="md:col-span-2 text-[18px] text-[#212721] w-11/12 ">
                An individual aged 19 years old next birthday to 69 years old next birthday can apply for this plan. As a parent, you can also apply for this plan for your child who must be at least 30 days old next birthday to 18 years old next birthday at the point of the enrolment
              </div>
            </div>
          </Collapsible>
        </div>

      </section>
    </main>
  )
}