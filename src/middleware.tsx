import { NextRequest, NextResponse } from "next/server";
import GlobalConfig from "@/app/app.config";

export const middleware = async (req: NextRequest) => {
  const theURL = new URL(req.url);
  if (theURL.pathname.startsWith("/_next")) return NextResponse.next();
  if (theURL.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }
  if (GlobalConfig.isServiceAccessible) {
    const response = NextResponse.next();
    return response;
  }

  if (theURL.pathname == "/serviceOffline") return NextResponse.next();
  theURL.pathname = "/serviceOffline";

  return NextResponse.redirect(theURL);
};
