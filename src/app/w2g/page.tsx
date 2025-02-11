

import { revalidatePath } from 'next/cache'
import Form from 'next/form'
import { time, timeStamp } from 'node:console'
import React from 'react'

let currentViewers = 0
let timestampUploaded = 0
let currentVideoUrl: undefined | string  = undefined

function convertToEmbedUrl(youtubeUrl: string ) {
    const url = new URL(youtubeUrl);
    
    let videoId: any = "";
    if (url.hostname === "youtu.be") {
        videoId = url.pathname.substring(1); // Get ID from youtu.be/VIDEO_ID
    } else if (url.hostname.includes("youtube.com")) {
        videoId = url.searchParams.get("v"); // Get ID from watch?v=VIDEO_ID
    }


    
    let timestampToPlay = Math.floor(Date.now()/1000)- timestampUploaded

    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${timestampToPlay}&mute=1` : undefined;
}


export default async function page() {

    currentViewers++;


    return (
        <div className="w-full h-screen flex bg-black flex-col gap-2 *:text-black [&_button]:bg-white justify-center items-center text-white">
            <Form className="flex flex-col gap-2" action={async (e: FormData) => {
                "use server"
                timestampUploaded=Math.floor(Date.now()/1000)
                currentVideoUrl = e.get('url')?.toString()
                revalidatePath("/w2g")
            }}
            >

                {currentVideoUrl != undefined &&
                    <div>

                        <iframe width="560"   height="315" src={convertToEmbedUrl(currentVideoUrl)} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        odtwarzanie: {convertToEmbedUrl(currentVideoUrl)}
                    </div>
                }
                <input type="text" name="url" />
                <button type='submit'>Przeslij</button>

            </Form>
            {currentVideoUrl == undefined && <div>Zadne video nie jest grane</div>}


        </div>
    )
}
