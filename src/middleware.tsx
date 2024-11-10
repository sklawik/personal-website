import { NextRequest, NextResponse } from 'next/server'


export default function middleware(req: NextRequest, res: NextResponse) {
   
    if(new URL(req.url).pathname == "/admin"){
      return NextResponse.rewrite(new URL(req.url)+"/roles")
    }
  return NextResponse.next()
}
