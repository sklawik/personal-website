
import { WebSocketServer } from "ws"

let wssServer: WebSocketServer | undefined = undefined

if( wssServer == undefined ){
   
        wssServer = new WebSocketServer({ port: 4001 })
    
}

export default wssServer