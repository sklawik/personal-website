import { serversideUseConfig } from "@/app/hooks/serversideUseConfig";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const serviceConfig = await serversideUseConfig();

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <section className="w-full flex flex-col justify-center items-center">
        <div>
          <form
            action={async () => {
              "use server";
              const serviceConfig = await serversideUseConfig();
              serviceConfig.isServiceAccessible =
                !serviceConfig.isServiceAccessible;
              redirect("/admin/statistics");
            }}
          >
            <button className="bg-white text-black px-6 py-2">
              Lockdown service{" "}
              {serviceConfig.isServiceAccessible ? "online" : "offline"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
