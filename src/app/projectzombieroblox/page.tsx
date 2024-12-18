import React from 'react'
import AnimateLetters from '../components/ui/animations/AnimateLetters'
import Form from 'next/form';
import { redirect, RedirectType } from 'next/navigation';
import { getPrisma } from '../hooks/getPrisma';
import { headers } from 'next/headers';


let comments = [{
    author: "",
    message: ""
}]


export default async function page() {

    let h = await headers()

    let prisma = getPrisma();
    let theLikes: bigint | undefined | number = 0;
    let res = await prisma?.serviceConfig.findFirst()
    theLikes = res?.likes;



    return (
        <div className="flex flex-col w-full h-full bg-slate-100 text-black">
            <img src="johnydixon.png" className="self-start w-full max-h-96"></img>
            <div className=" min-h-fit flex flex-col justify-start items-center text-3xl">
                <div> <h1>Czy chciałbyś przeżyć apokalipsę zombie?</h1></div>
                <div className="flex flex-row gap-1 p-2"><br />

                    <AnimateLetters letters='Project Zombie Roblox' />
                </div>
                <div className="text-sm">
                    Twój najlepszy sposób na przetrwanie apokalipsy zombie. Wciel się w Johnego Dixona i poznaj prawdę o tym kto zrobił pandemię krwiorczych bestii.
                </div>

            </div>
            <div className="min-h-screen text-gray-800 bg-slate-200 flex flex-col items-center justify-center">
                Dev Vlog 1
                - dodano zombie
                <img src="zombi.png"></img>

                {theLikes}👍 <div className="flex flex-row gap-1"><AnimateLetters letters='polubień'></AnimateLetters></div>
                <Form action={async (e) => {
                    "use server"
                    let prisma = getPrisma();
                    if (theLikes != undefined) {
                        if (theLikes == 999)
                            return theLikes = 0
                        theLikes++;

                    }

                    let response = await prisma?.serviceConfig.update({
                        data: {
                            likes: theLikes
                        },
                        where: {
                            id: 1
                        }
                    })
                    console.log("server: " + response?.likes)
                    redirect("/projectzombieroblox", RedirectType.push);
                }}>
                    <button type="submit" className="p-4 bg-red-500 text-white">lajknij</button>

                </Form>


            </div>
            <div className="min-h-screen flex flex-row w-full justify-center items-center">
                <div>
                    <Form className="flex flex-col gap-2 p-2 text-black input:bg-black bg-black"
                        action={async (e: FormData) => {
                            "use server"

                            let author = e.get('author')?.toString()
                            let message = e.get('message')?.toString()
                            if (author == undefined || author == null)
                                return
                            if (message == undefined || message == null)
                                return
                            if(message.length < 3 || message.length > 120)
                                return
                            if(author.length < 3 || author.length > 20)
                                return
                            comments.push({
                                author: author,
                                message: message
                            })
                            redirect("/projectzombieroblox")
                        }}>

                        <label className="text-white" htmlFor="author">twoj nick:</label>
                        <input name="author"></input>
                        <label htmlFor="author" className="text-white">co sądzisz:</label>
                        <input name="message"></input>
                        <button type="submit" className="text-yellow-500">Skomentuj , teraz </button>
                    </Form>


                    <h1 className="text-red-800 text-3xl">OG kielas recenzja</h1>
                    <img src="/ogkielas.png" ></img>
                    <br />
                    komentujacy mysla o nim:<br></br>
                    <div className="flex flex-col gap-2">
                        {comments.map(comment => {
                            return <div key={comment.author} className="flex flex-col gap-2 bg-black p-2 rounded-xl text-white max-w-96 overflow-hidden">
                                <div className="text-sm text-red-500">{comment.author} <span className="text-slate-300">mówi:</span></div>
                                <div className="max-h-16 overflow-y-scroll">{comment.message}</div>
                                <br />

                            </div>
                        })}
                    </div>


                </div>
            </div>
            <div className="min-h-screen">
                section 3
            </div>
        </div>
    )
}
