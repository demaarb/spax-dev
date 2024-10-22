import React from 'react'
import Link from "next/link";

export default function CrewMemberButton() {
      
  return (
    <div className="text-center">
        <Link href={'/crewmembers'} type="button">Crew Member Button</Link>
    </div>
  )
}
