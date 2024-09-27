import React from "react";

export default function footer() {
 

  let app_version = process.env.APP_VERSION

  return <div className="w-1/2 bg-green-500 text-xs">
    footer
    wersja aplikacji: {app_version}
    </div>;
}
