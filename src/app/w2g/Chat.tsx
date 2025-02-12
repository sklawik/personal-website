"use client"

import React, { useEffect } from 'react'


export default function Chat() {

    let socket: WebSocket

    if(window.location.hostname == "localhost"){
        socket = new WebSocket('ws://localhost:4001');
    }
    else{
        socket = new WebSocket('wss://localhost:4001');
    }
 
        socket.onopen = (ev: Event) => {
            console.log("connection open on the client")
        }

        socket.onmessage = (event: MessageEvent) => {
            console.log('client received:' + event.data);
        };
    return (
        <div>
            <button onClick={e => {

                socket.send("hi from client")
            }}>send shit</button>
        </div>
    )
}
