'use client'

import React, { FC } from "react";
import { LaunchDetail } from "@/app/components/types/launchtypes";
import Image from "next/image";

type Props = {
  data: LaunchDetail;
};

const LaunchInfo: FC<Props> = ({ data }) => {
  console.log("URL: ", data?.links.patch.small);
  let crewMember = "Robert Behnken";
  return (
    // <div>
    //   <div className="text-center"><span>Launch Pad: </span>{data?.launchpad}</div>
    // </div>
    <section className="px-8 py-1">
        <div className="container mx-auto text-center">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">Launch</h2>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">{`${crewMember} - Latest launch `}</p>
        </div>
        <div className="mt-24">
         
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* CARD 1 */}
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
              <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
              <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 capitalize">Links</h5>
              <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">
                <a href={data?.links.article} id="article">Article - Spaceflight Now</a>
              </p>
              <p>
                {data?.links.patch.small !== undefined && (
                  <Image src={`${data?.links.patch.small}`} id="patchthumb" alt="patch" width={50} height={50} />
                )}
                
              </p>
              </div>
            </div>
             {/* CARD 2 */}
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
              <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6"></div>
            </div>
            {/* CARD 3 */}
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
              <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6"></div>
            </div>
          </div>
        </div>
        <div className="text-center m-6" >
         IMAGE
        </div>
    </section>
    
  );
};

export default LaunchInfo;
