"use client";

import { LaunchDetail } from '@/app/components/types/launchtypes';
import React, {useEffect, useState} from 'react';
import LaunchInfo from './launchinfo';

export default function Page({params}: {
  params: {
    launch: string,   
  }
}) {

  const [data, setData] = useState<LaunchDetail[]>([]);
  const [launch, setLaunch] = useState<LaunchDetail>();

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v4/launches/?id=${params.launch}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((userData : LaunchDetail[]) => {
        if(userData){
          const filter = userData.find((element => element.id === `${params.launch}`));
          setLaunch(filter);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
     
  }, [params.launch]);

  

   return (
    <LaunchInfo data={launch as LaunchDetail}/>

  )
}
