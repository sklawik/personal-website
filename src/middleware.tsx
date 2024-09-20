import { NextRequest, NextResponse } from 'next/server'
// This solution is not perfect and needs optimizations if needed BUT is simple enough to understand how the project runs.
// Every route our website visitor visits, there is a check if the user is logged in - if is, we want to ensure that the data
// in the cookies is UP TO DATE, SO we don't need to fetch DB manually, we just use USER object that shall be updated at all times.
// Of course there will be need, when we in the project check for permission, we still need to fetch the user on the server side, so
// the function not only updates the data from the server to cookies about current logged in user
// but also returns the data for server side checking if needed.



export default async function middleware(req: NextRequest, res: NextResponse) {


  
    return NextResponse.next()

}
