import React from "react";
import Form from "next/form"; // Poprawiony import
import { UsePermission } from "../hooks/UsePermission";

// Funkcja asynchroniczna, która pobiera dane z searchParams
const Page = async ({ searchParams }: { searchParams: Promise<Record<string, string>> }) => {
  // Czekamy na rozstrzygnięcie Promise
  const resolvedParams = await searchParams;

  const step = parseInt(resolvedParams.step || "1", 10); // Używamy wartości domyślnej "1", jeśli nie ma "step"

  const setupTitles = [
    "Dodaj wymagane brakujące role oraz \nich uprawnienia do serwisu.",
  ];

  const roles = UsePermission(255, "role").getRolePermissions();

  return (
    <div className="flex flex-col bg-gray-950 w-full h-full text-white">
      <section className="text-white text-xl flex flex-row justify-center items-center">
        Setup {step}/8
      </section>
      <section className="flex flex-col justify-center items-center h-full w-full bg-blue-950">
        <Form
          action={async (e: FormData) => {
            "use server";
            console.log(e);
          }}
          className="flex flex-col justify-center items-center gap-1 input:bg-white input:border-none input:text-gray-800 *:text-gray-500"
        >
          {setupTitles[step - 1]}
          <section className="flex flex-col">
            <section>
              Wszyscy{" "}
              <input
                className="bg-transparent text-green-200"
                defaultValue="Everyone"
              ></input>
            </section>
            <section className="flex flex-row text-xs">
              {roles.map((role) => (
                <div key={role.permId}>{role.displayName.toString()}</div>
              ))}
            </section>
          </section>
          <section className="flex flex-col gap-1">
            <section>
              Superuser{" "}
              <input
                className="bg-transparent text-green-200"
                defaultValue="Superuser"
              ></input>
            </section>
            <section className="flex flex-row gap-1 text-xs">
              {roles.map((role) => (
                <div key={role.permId}>{role.displayName.toString()}</div>
              ))}
            </section>
          </section>
        </Form>
      </section>
    </div>
  );
};

export default Page;