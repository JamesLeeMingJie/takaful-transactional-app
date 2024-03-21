"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef } from 'react';

// Components
import Input from '@/components/layout/shared/Form/Input';
import Select from '@/components/layout/shared/Form/Select';
import Date from '@/components/layout/shared/Form/Date';
import FilesDragAndDrop from '@/components/layout/shared/FilesDragAndDrop';
import FilesClickAndUpload from '@/components/layout/shared/FilesClickAndUpload';
import SignatureCanvas from 'react-signature-canvas';

// Assets
import arrowBackIcon from '@/icons/arrow-back-icon.svg';
import uploadIcon from '@/icons/upload-icon.svg';
import downloadDocumentIcon from '@/icons/download-document-icon.svg';
import deleteButtonIcon from '@/icons/delete-button-icon.svg';

export default function NewSubmission() {
  const [signature, setSignature] = useState(null);
  const [signatureModal, setSignatureModal] = useState(false);
  const signatureCanvas = useRef();

  const onUpload = (files) => {
    console.log(files);
  }

  const createSignature = () => {
    const URL = signatureCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setSignature(URL);
    setSignatureModal(false);
  }

  return (
    <main>
      <section>
        <div className="mx-auto w-10/12 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
          <div>
            <div className="flex pb-8">
              <Image className="inline-block pr-2" src={arrowBackIcon} alt="" />
              <Link href="/claims">
                <p className="text-font-primary text-base">Back</p>
              </Link>
            </div>
            <p className="text-[25px] font-bold text-black pb-2">
              New Submission Claims
            </p>
            <p className='text-font-secondary text-[18px] mt-0 pb-6'>
              Fill in all the information needed
            </p>

            <div className='flex items-center gap-x-4 pb-8'>
              <p className='text-font-primary text-[22px] font-bold text-nowrap'>
                General Details
              </p>
              <div className='border-[#E7E7E7] border-b-[1px] w-full'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-none gap-4 pb-8'>
              <Input id={"date-submission"} label={"Date Submission"} type={"text"} name={"date-submission"} spanNum={1} />
              <Select id={"certificate-no"} label={"Certificate No."} name={"certificate-no"} spanNum={1}>
                <option value=""></option>
                <option value="TMMC0000829/V0499577">TMMC0000829/V0499577</option>
              </Select>
              <Input id={"product-name"} label={"Product Name"} type={"text"} name={"product-name"} spanNum={1} />
              <Input id={"status"} label={"Status"} type={"text"} name={"status"} spanNum={1} />
            </div>

            <div className='flex items-center gap-x-4 pb-8'>
              <p className='text-font-primary text-[22px] font-bold text-nowrap'>
                Participant Details
              </p>
              <div className='border-[#E7E7E7] border-b-[1px] w-full'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-8'>
              <Input id={"name"} label={"Name"} type={"text"} name={"name"} spanNum={2} />
              <Input id={"vehicle-no"} label={"Vehicle No."} type={"text"} name={"vehicle-no"} spanNum={1} />
              <Input id={"phone-no"} label={"Phone No."} type={"text"} name={"phone-no"} spanNum={1} />
              <Input id={"email"} label={"Email"} type={"text"} name={"email"} spanNum={2} />
            </div>

            <div className='flex items-center gap-x-4 pb-8'>
              <p className='text-font-primary text-[22px] font-bold text-nowrap'>
                Loss Details
              </p>
              <div className='border-[#E7E7E7] border-b-[1px] w-full'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-none gap-4 pb-8'>
              <Date />
              <Select id={"type-of-claim"} label={"Type of Claim"} name={"type-of-claim"} spanNum={1}>
                <option value=""></option>
                <option value="Accidental Death">Accidental Death</option>
              </Select>
              <Input id={"location"} label={"Location"} type={"text"} name={"location"} spanNum={1} />
              <Input id={"extent-of-injury"} label={"Extent of Injury/Diagnosis"} type={"text"} name={"extent-of-injury"} spanNum={1} />
            </div>

            <div className='flex items-center gap-x-4 pb-2'>
              <p className='text-font-primary text-[22px] font-bold text-nowrap'>
                Documents
              </p>
              <div className='border-[#E7E7E7] border-b-[1px] w-full'></div>
            </div>
            <p className='text-font-secondary text-[14px] pb-2'>
              File supported: JPEG/PNG/PDF
            </p>
            <p className='text-font-secondary text-[14px] pb-4 mt-0'>
              Maximum size: 2MB
            </p>

            <FilesDragAndDrop onUpload={onUpload} count={1} formats={["jpeg", "jpg", "png", "pdf"]}>
              <div className='w-full h-[100px] flex items-center justify-center text-[#BBBBBB] border-[2px] border-[#c3c3c3] border-dashed rounded-[6px]'>
                <div>
                  <Image className='pb-[3px] mx-auto' src={uploadIcon} alt='' />
                  <div className='flex items-center text-[12px]'>
                    <p className='text-font-secondary'>Drag and drop file here or</p>
                    <FilesClickAndUpload />
                  </div>
                </div>
              </div>
            </FilesDragAndDrop>

            <p className='text-font-primary text-[12px] pb-8'>
              Uploaded Documents
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 pb-8'>
              <div className='grid grid-cols-[50px_1fr_40px] border-[#E7E7E7] border-b-[1px] pb-4'>
                <div className='flex justify-center items-start'>
                  <Image src={downloadDocumentIcon} alt='download-document' />
                </div>
                <div>
                  <p className='text-font-primary text-[14px]'>
                    letter_administration.pdf
                  </p>
                  <p className='text-font-secondary text-[8px]'>
                    Size:500KB
                  </p>
                </div>
                <div className='flex justify-end'>
                  <Image src={deleteButtonIcon} alt='delete-button' />
                </div>
              </div>
              <div>
                {/* Empty for the purpose of spacing */}
              </div>
            </div>

            <div className='flex items-center gap-x-4 pb-8'>
              <p className='text-font-primary text-[22px] font-bold text-nowrap'>
                Declaration
              </p>
              <div className='border-[#E7E7E7] border-b-[1px] w-full'></div>
            </div>
            <div className="flex mb-12">
              <input id="declaration-checkbox" className="w-[14px] h-[14px] rounded accent-primary" type="checkbox" value="" />
              <label htmlFor="declaration-checkbox" className="ms-3 mt-[-5px] text-[18px] text-font-primary">
                I/We hereby declare that the above statements, facts and details are true and accurate, copies of documents are identical with the original one, and that I/We have not withheld from the Company, any information within my/our knowledge connected with the accident. Syarikat Takaful Malaysia Am Berhad shall be released from any claim or liability whatsover in reliance upon such statements, facts and details disclosed herein by me/us.
                <br /><br />
                I/We hereby authorise any physician, nurse, medical staff, hospital, clinic, organization, institution or individual that has any records or knowledge of me/us to disclose all information pertaining to my health/medical history/claims and to provide copies of all medical records/certifications, including any earlier medical history to Syarikat Takaful Malaysia Am Berhad in order to process my/our claims. Syarikat Takaful Malaysia Am Berhad may use the above medical information for any and all purposes pertaining to or arising out of the claim by the undersigned. This authorisation shall remain valid until the above referenced claim has been finalised, but in no event longer than 7 years from the date below.
                <br /><br />
                I/We understand that I/We have the right to receive a copy of this authorisation. Photocopies of this authorisation shall be considered as valid as the original. Syarikat Takaful Malaysia Am Berhad is committed to protect the personal data submitted by and collected from you. For further details, please refer to our Data Privacy Notice' published on Our website.
              </label>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 mb-16 gap-4'>
              <div className='form-parent-signature h-[122px]'>
                <label>Signature</label>
                <div className='flex'>
                  {signature && (
                    <img className='m-auto' src={signature} alt="signature" />
                  )}
                </div>
              </div>
              <div>
                <button className='bg-background-primary text-font-primary text-[12px] p-[10px] w-fit rounded-[3px] mb-2' onClick={() => setSignatureModal(true)}>
                  Draw Signature
                </button>
                <div className='bg-background-primary text-font-primary text-[12px] p-[10px] w-fit rounded-[3px]'>
                  Upload Signature
                </div>
              </div>
            </div>

            {signatureModal && (
              <div className="modal-container">
                <div className="modal">
                  <div className="signature-pad-container">
                    <SignatureCanvas penColor="black" canvasProps={{ className: "w-full" }} ref={signatureCanvas} />
                  </div>
                  <div className="modal-bottom">
                    <button className='mr-2 clear' onClick={() => signatureCanvas.current.clear()}>Clear</button>
                    <button className='mr-2 border-active border-[1px] text-active create' onClick={createSignature}>Create</button>
                    <button className='border-failed border-[1px] text-failed cancel' onClick={() => setSignatureModal(false)}>Cancel</button>
                  </div>
                </div>
              </div>
            )}

            <div className='flex flex-wrap gap-4'>
              <button className='w-[180px] py-3 text-center bg-white border-[#BBBBBB] border-[1px] rounded-[30px] text-[#BBBBBB] text-[18px] font-bold'>
                Cancel
              </button>
              <button className='w-[180px] py-3 text-center bg-primary rounded-[30px] text-white text-[18px] font-bold'>
                Submit
              </button>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}