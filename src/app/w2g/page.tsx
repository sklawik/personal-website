

import { revalidatePath } from 'next/cache'
import Form from 'next/form'
import { headers } from 'next/headers'
import React from 'react'
import Chat from'./Chat'
import wssServer from './getWebSocket'

let currentViewers = 0
let timestampUploaded = 0
let currentVideoUrl: undefined | string = undefined

let historyLink: string[] = [""]

function timeNow() {
    return Math.floor(Date.now() / 1000)
}

function convertToEmbedUrl(youtubeUrl: any): string | undefined {
    const url = new URL(youtubeUrl);

    let videoId: string | null = "";
    if (url.hostname === "youtu.be") {
        videoId = url.pathname.substring(1); // Get ID from youtu.be/VIDEO_ID
    } else if (url.hostname.includes("youtube.com")) {
        videoId = url.searchParams.get("v"); // Get ID from watch?v=VIDEO_ID
    }

    let timestampToPlay = timeNow() - timestampUploaded

    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${timestampToPlay}&mute=1` : undefined;
}

let setCurrentVideo = (youtubeurl: any) => {

    currentVideoUrl = youtubeurl
    if (currentVideoUrl)
        historyLink.push(youtubeurl)
}

export default async function page() {

    let x = await headers()
    let y = wssServer
   
    if(y){
        y.on('connection', (ws: WebSocket)=>{
        
         
           ws.onmessage = function(msg: MessageEvent){
           console.log("server received: " + msg.data)
           }
         
           
        } )
    }
    currentViewers++;

    
    return (
        <div className="w-full h-screen flex bg-black flex-row gap-2 *:text-black [&_button]:bg-white justify-center items-center text-white">
            <section className="flex flex-col justify-center items-center w-full">
                <Form className="flex flex-col gap-2" action={async (e: FormData) => {
                    "use server"

                    timestampUploaded = timeNow();
                    if(wssServer){
                        wssServer.on('connection', (ws: WebSocket)=>{
                            ws.send("hej")
                        })
                    }
                  
                    setCurrentVideo(e.get('url')?.toString())
                    
                    revalidatePath("/w2g")
                }}
                >

                    {currentVideoUrl != undefined &&
                        <div>

                            <iframe width="560" height="315" src={convertToEmbedUrl(currentVideoUrl)} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <span className="text-white">odtwarzanie: {currentVideoUrl}</span>
                        </div>
                    }
                    <input className="text-red-100" placeholder={currentVideoUrl ? currentVideoUrl : "link do youtube"} type="text" name="url" />
                    <button type='submit'>Przeslij</button>

                </Form>
                {currentVideoUrl == undefined && <div>Zadne video nie jest grane</div>}
                {historyLink &&
                    <div className="flex flex-col gap-2 p-2 *:text-white ">
                        <h6>historia:</h6>
                        {historyLink.map(link => <div key={link.valueOf()} className="w-full text-gray-400 ">

                            <Form action={async e => {
                                "use server"
                                timestampUploaded = timeNow();
                                setCurrentVideo(link)
                                revalidatePath("/w2g")
                            }}>
                                <button className="bg-none text-black bg-black" type="submit">{link}</button>
                            </Form>
                        </div>)}
                    </div>}
            </section>
            <section className="flex-grow w-full flex flex-row justify-center items-center">
                <Chat />
            </section>

        </div>
    )
}
