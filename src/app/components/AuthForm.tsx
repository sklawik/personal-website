"use client";

import { AnimatePresence, motion } from "framer-motion";
import Form from "next/form";
import React, { useActionState, useState } from "react";
import FadeIn from "./ui/animations/FadeIn";
import { LogIn, Mail, RectangleEllipsis, ScanFace } from "lucide-react";
import SignUser from "../serverActions/signUser";
import { useFormState } from "react-dom";
import clsx from "clsx";


export default function AuthForm() {

  const [isSignup, setIsSignup] = useState(false);



  async function action(previousState: any, e: FormData) {
    let response = await SignUser({
      email: "@",
      "password": "123",
      "repeatPassword": "123"
    })
    if (response == null)
      return "wystapil blad"
  }

  // let [isPending] =  useFormState(state, initialState, permalink);
  const [state, formAction, isPending] = useActionState(action, null);

  return (
    <form
      className="flex flex-col gap-1 p-1 h-auto
        text-slate-200 w-full select-none justify-center items-start  bg-black flex-grow 
        [&_input]:outline-none [&_input]:w-full [&_input]:bg-gray-950 [&_input]:rounded-md [&_input]:placeholder-gray-400 [&_input]:p-2 "
      action={formAction}>
      {state}
      {isPending && "ladownaie"}
      <div className="w-full border-gray-800 flex flex-row justify-center items-center text-center">
        <section onClick={e => setIsSignup(!isSignup)} className="flex flex-row w-full cursor-pointer *:transition-all *:duration-500">
          <div className={clsx(isSignup ? "flex-grow p-1  rounded-sm select-none" : " flex-grow p-1 rounded-sm bg-white text-black select-none")}>
            Logowanie
          </div>
          <div className={clsx(isSignup ? "flex-grow p-1 rounded-sm bg-white select-none text-black" : "flex-grow p-1 rounded-sm select-none ")}>Nowe konto</div>
        </section>
      </div>
      <section className="flex flex-row gap-0.5 p-0.5 justify-center items-center">
        <Mail size="16" />
        <input className="" name="email" placeholder="adres e-mail" />
      </section>
      <section className="flex flex-row gap-0.5 p-0.5 justify-center items-center">
        <RectangleEllipsis size="16" />
        <input className="" name="password" placeholder="hasło do konta" />
      </section>
      <AnimatePresence>
      {isSignup &&
        <motion.section
        initial={{
          y:-50,
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition:{
            duration: 0.25,
            bounce: true,
            delay: 0.24,
         
          }
        }}

        exit={{
          scale: 0,
          opacity: 0,
          transition: {
            duration: 0.25
          }
        }}

        
        className="flex flex-row gap-0.5 p-0.5 justify-center items-center">
          <RectangleEllipsis size="16" />
          <input className="" name="repeatPassword" placeholder="powtórz hasło" />
        </motion.section>}
      </AnimatePresence>
      


      <div className="flex flex-row text-wrap text-xs items-end justify-end w-full p-1">
        <motion.div className="flex flex-col bg-breen-500 w-full flex-grow gap-1 transition-all p-0.5 justify-center items-center"
          initial={{
            scale: 0,
            x: -100
          }}
          animate={{
            scale: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 1
            }
          }}
        >

        </motion.div>

        <button type="submit" className=" cursor-pointer flex-grow hover:bg-slate-200 hover:text-black p-0.5 rounded-md duration-500">
          <LogIn />
        </button>
        {/* +1000 aktywnych użytkowniów w tym momencie */}
        {/* +5 użytkowników było online w ostatnich 30 minutach
                              <a href="/online">Zobacz kto</a> */}
      </div>
    </form>
  );
}
