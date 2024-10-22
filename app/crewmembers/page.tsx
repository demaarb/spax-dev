"use client";

import React,{useEffect, useState} from "react";
import Crewlist from "./crewlist";
import { CrewMember } from '../components/types/crewtypes';

export default function Page() {
  
  const [data, setData] = useState<CrewMember[]>([]);
  
  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/crew")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((userData) => {
        setData(userData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
   
  return (
    <div className="container mx-auto px-4 py-10">
      {/* <div className="text-2xl font-bold text-center py-10">Crew Members</div> */}
      <div className="px-4 sm:px-0">
        <Crewlist data={data}/>
      </div>
    </div>
  );
}
