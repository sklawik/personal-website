import React from "react";
import { usePermission as UsePermission } from "../hooks/usePermission";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
export default function page(props: PageProps) {
  const searchParams = props.searchParams;
  console.log(searchParams);

  const setupTitles = [
    "Dodaj wymagane brakujące role oraz \nich uprawnienia do serwisu.",
  ];

  const roles = UsePermission(255, 'role').getRolePermissions()

  return (
    <div
      className="flex flex-col  bg-gray-950  w-full h-full text-white
  "
    >
      <section className="text-white text-xl flex flex-row justify-center items-center">
        Setup {searchParams.step}/8
      </section>
      <section className="flex flex-col justify-center items-center h-full w-full bg-blue-950">
        <form className="flex flex-col justify-center items-center gap-1 input:bg-white input:border-none input:text-gray-800 *:text-gray-500">
          {setupTitles[Number(searchParams.step) - 1]}
          <section className="flex flex-col">
            <section>
            Wszyscy  <input className="bg-transparent text-green-200" defaultValue="Everyone"></input>

            </section>
            <section className="flex flex-row  text-xs">
            {roles.map(role => <div key={role.permId}>{role.displayName.toString()}</div>)}
              </section>
        
         
          </section>
          <section className="flex flex-col gap-1">
            <section>
            Superuser <input className="bg-transparent text-green-200" defaultValue="Superuser"></input>

            </section>
            <section className="flex flex-row gap-1 text-xs">
            {roles.map(role => <div key={role.permId}>{role.displayName.toString()}</div>)}
              </section>
        
         
          </section>
        </form>
      </section>
    </div>
  );
}
