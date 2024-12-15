"use client";

import { motion } from "framer-motion";
import Form from "next/form";
import React, { useActionState } from "react";
import FadeIn from "./ui/animations/FadeIn";
import { LogIn, ScanFace } from "lucide-react";
import SignUser from "../serverActions/signUser";
import { useFormState } from "react-dom";


export default function AuthForm() {

  async function action(previousState: any, e: FormData){
      let response = await SignUser({
        email: "@",
        "password": "123",
        "repeatPassword": "123"
      })
      if(response == null)
      return "wystapil blad"
  }

  // let [isPending] =  useFormState(state, initialState, permalink);
  const [state, formAction, isPending] = useActionState(action, null);

  return (
    <form
      className="flex flex-col gap-1 p-1 h-auto
        text-slate-200 w-full select-none justify-center items-start  bg-black flex-grow 
        [&_input]:outline-none [&_input]:w-full [&_input]:bg-gray-950 [&_input]:rounded-md [&_input]:placeholder-gray-400 [&_input]:p-0.5 "
     action={formAction}
    >
     {state}
     {isPending && "ladownaie"}

      <input className="" name="email" placeholder="adres e-mail" />
      <input className="" name="password" placeholder="hasło do konta" />
      <div className="flex flex-row text-wrap text-xs items-end justify-between">
        <div className="flex flex-row flex-grow gap-1 transition-all p-0.5">
          <div className="text-xl cursor-pointer peer ">?</div>
          <div className="opacity-0 peer-hover:opacity-100 relative duration-500">
            Jeśli nie masz konta, wystarczy że wprowadzisz dane tak jakby
            tworzyć nowe.
          </div>
        </div>

        <button type="submit" className="cursor-pointer flex-grow hover:bg-slate-200 hover:text-black p-0.5 rounded-md duration-500">
          <LogIn />
        </button>
        {/* +1000 aktywnych użytkowniów w tym momencie */}
        {/* +5 użytkowników było online w ostatnich 30 minutach
                              <a href="/online">Zobacz kto</a> */}
      </div>
    </form>
  );
}
