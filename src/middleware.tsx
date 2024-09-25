import { NextRequest, NextResponse } from "next/server"

export const middleware = async (req: NextRequest, res: NextResponse) =>{
    
    return NextResponse.next()
}