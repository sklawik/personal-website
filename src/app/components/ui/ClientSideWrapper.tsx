"use client";

import { useTheme } from "@/app/store";
import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import {clsx} from 'clsx'

export default function ClientSideWrapper(props: PropsWithChildren) {

    let theme = useTheme()
 

  return <div className={twMerge(  "w-full h-svh transition-all duration-500 bg-slate-100 ",theme.darkmode == true && ' dark bg-zinc-900')}>{props.children}</div>;
}
