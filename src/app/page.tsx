


import Header from "./components/ui/Header";



export default async function Home() {




  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)] justify-center items-center ml-96 mr-96">
      <Header />
      <div className="flex flex-col flex-grow w-full h-svh ">
        <div className="w-full border-2 border-slate-950  rounded-xl p-1">
          <input className="w-full bg-slate-900 outline-none select-none"/>
        </div>
        <section className="flex flex-col flex-grow justify-center items-center">
          <div className="p-2 w-full h-screen flex flex-row justify-center items-center">

            test

          </div>
          <div className="p-2  w-full h-screen">
            project 12
          </div>
        </section>
      </div>
    </div>
  );
}
