"use client";

import React, { FC } from "react";
import Launchlinks from "../launches/launchlinks";
import { CrewMember } from "../components/types/crewtypes";

type Props = {
  data: Array<CrewMember>;
};

const Crewlist: FC<Props> = ({data}) => {
  
  return (
    <div className="mt-6 border-t border-gray-100">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Name
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Agency
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Wiki
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Launch/es
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((mem) => (
            <tr key={mem.id}>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">
                {mem.name}
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">
                {mem.agency}
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">
                {mem.wikipedia}
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">
                <Launchlinks list={mem.launches} />
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left">
                {mem.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Crewlist;