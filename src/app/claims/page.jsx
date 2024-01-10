import Image from "next/image";

// Assets
import plusIcon from '@/icons/plus-icon.svg';

export default function Claims() {
  return (
    <main className="pb-24">
      <section>
        <p className="mx-auto w-10/12 text-[25px] font-bold pb-4">
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
            <Image classNameName="inline pr-2" src={plusIcon} alt="" />
            <p>New Submissions</p>
          </button>
        </div>

        {/* Main claims body */}
        <div className="mx-auto w-10/12">

        </div>

        {/* Claims detail inner page */}
        <div className="mx-auto w-10/12">

        </div>

        {/* New submission inner page */}
        <div className="mx-auto w-10/12">

        </div>


      </section>

    </main>
  )
}