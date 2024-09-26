import { NextRequest, NextResponse } from "next/server";
import GlobalConfig from "@/app/app.config";

export const middleware = async (req: NextRequest, res: NextResponse) => {
  if (GlobalConfig.isServiceAccessible) {
    let response = NextResponse.next();
    return response;
  }
  let theURL = new URL(req.url);
  if (theURL.pathname == "/serviceOffline") return NextResponse.next();

  theURL.pathname = "/serviceOffline";

  return NextResponse.redirect(theURL);
};
