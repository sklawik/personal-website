import React from "react";

export default function footer() {
  return <div className="w-1/2 bg-green-500 text-xs">
    footer
    wersja aplikacji: {process.env.APP_VERSION}
    </div>;
}
