import { NextRequest, NextResponse } from "next/server"

export const middleware = async (req: NextRequest, res: NextResponse) =>{
    console.log("req: " + req + "res: " + res)
    return NextResponse.next()
}