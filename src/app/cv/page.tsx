import React from "react";
import Underline from "../components/ui/Underline";

export default function page() {
  return (
    <div className="flex h-full justify-center items-center flex-row gap-1 w-full   ">
      <section className="  h-full">
        <section>
          <h1 className="text-2xl no-underline">Technik Programista (zdjecie ryja)</h1>
        </section>

        <section className="">
          <section className="flex text-md  flex-row w-full gap-2 ">
            <div>sebklawik@gmail.com</div>
            <div className="">❖</div>
            <div>(+48) 536 298 408</div>
            <div>❖</div>
            <div>Gdańsk, PL</div>
            <div>❖</div>
            <div>
              <a href="https://sklawik.pl">sklawik.pl</a>
            </div>
          </section>
         <Underline/>
         <br/>
          <h1 className="uppercase">Education</h1>
          <Underline/>
          <Underline/>
          <section className="w-full flex flex-row justify-between items-cente text-xs font-bold">
            <div className="">
            Centrum Kształcenia Zasadniczego i Ustawicznego nr. 1 w Gdańsku
            </div>
            <div>
            02.2024-teraz
            </div>
          </section>
          <br/>
          <h1 className="uppercase">Work experience</h1>
          <Underline/>
          <Underline/>
          <section className="w-full flex flex-row justify-between items-cente text-xs font-bold">
            <div className="">
            Centrum Kształcenia Zasadniczego i Ustawicznego nr. 1 w Gdańsku
            </div>
            <div>
            02.2024-teraz
            </div>
          </section>
          <br/>
          <h1 className="uppercase">Certifications, skills & interests</h1>
          <Underline/>
          <Underline/>
          <section className="w-full flex flex-row justify-between items-cente text-xs font-bold">
            <ul>
              <li>lil</li>
              <li>lil</li>
              <li>lil</li>
            </ul>
          </section>
        </section>
      </section>
    </div>
  );
}
