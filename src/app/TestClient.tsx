"use client"

import React from 'react'
import { useBearStore } from "./store";

export default function TestClient
() 


{
    const bears = useBearStore((state) => state)


  return (
    <div>
        TestClient: {bears.bears}
        <button onClick={e=>bears.increasePopulation()}>click me</button>
    </div>
  )
}
