import React from "react";

import Form from "next/form";
import { UsePermission } from "../hooks/UsePermission";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
export default function page(props: PageProps) {
  const searchParams = props.searchParams;
  console.log(searchParams);

  const setupTitles = [
    "Dodaj wymagane brakujące role oraz \nich uprawnienia do serwisu.",
  ];

  return (
    <div
      className="flex flex-col  bg-gray-950  w-full h-full text-white
  "
    >
      <section className="text-white text-xl flex flex-row justify-center items-center">
        Setup {searchParams.step}/8
      </section>
      <section className="flex flex-col justify-center items-center h-full w-full bg-blue-950">
        <Form
          action={async (e: FormData) => {
            "use server";
            console.log(e);
          }}
          className="flex flex-col justify-center items-center gap-1 input:bg-white input:border-none input:text-gray-800 *:text-gray-500"
        >
          {setupTitles[Number(searchParams.step) - 1]}
          <section className="p-1 text-white flex flex-col">
            <section>
              Wszyscy <input name="publicRole" defaultValue="Everyone"></input>
            </section>
            <section className="p-1 text-slate-200">
              {UsePermission(0, "role")
                .getRolePermissions()
                ?.map((perm, index) => (
                  <div key={index}>{perm ? perm.displayName : ""}</div>
                ))}
            </section>
          </section>
      
          <button type="submit">Potwierdź</button>
        </Form>
        <section className="p-1 text-white flex flex-col">
            <section>
              Superuser{" "}
              <input name="adminRole" defaultValue="Superuser"></input>
            </section>
            <section className="p-1 text-slate-200">
              {UsePermission(255, "role")
                .getRolePermissions()
                ?.map((perm, index) => (
                  <div

                    className={perm.isEnabled ? "text-black" : "text-slate-200"}
                    key={index}
                  >
                    <Form 
                    action={async e => {
                      "use server"
                      console.log(e)
                      perm.isEnabled = !perm.isEnabled
                    }}>
                       <button type="submit" name={perm.permId.toString()}>{perm.displayName}</button>
                       
                    </Form>
                  
                  </div>
                ))}
            </section>
          </section>
      </section>
    </div>
  );
}
