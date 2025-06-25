import React from 'react'

export default function page() {
    return (
        <div className="w-svw h-svh bg-black flex flex-row justify-center items-center">
            <div>
              <video src="/1.mp4" controls  muted={true} loop={true} autoPlay={true} className="w-full h-full"></video>
            </div>
        </div>
    )
}
