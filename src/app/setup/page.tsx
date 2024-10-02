"use client";

import React from "react";

import TextSlider from "../components/ui/TextSlider";
import Button from "../components/ui/Button";
export default function page() {
  return (
    <div>
      <section>
        <TextSlider  openAtStart={true} trigger={<h1>Naglowek</h1>}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            quidem fugit est omnis ullam. Ipsum consectetur molestiae ut, iusto,
            alias obcaecati, numquam iste velit ullam eos nesciunt dolorum
            cupiditate explicabo!
          </div>
        </TextSlider>
        <TextSlider openAtStart={true} trigger={<h1>naglowek 2</h1>}>
        <div className="flex flex-col gap-1">
      qwe
          </div>
         
        </TextSlider>
      </section>
    </div>
  );
}
