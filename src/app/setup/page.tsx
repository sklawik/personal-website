import React from "react";

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
        <form className="flex flex-col justify-center items-center gap-1 input:bg-white input:border-none input:text-gray-800 *:text-gray-500">
          {setupTitles[Number(searchParams.step) - 1]}
          <section>
            Wszyscy <input defaultValue="Everyone"></input>
          </section>
          <section>
            Superuser <input defaultValue="Superuser"></input>
          </section>
        </form>
      </section>
    </div>
  );
}
