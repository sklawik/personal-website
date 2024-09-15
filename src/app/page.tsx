
import { FormEvent, PropsWithChildren } from "react";
import Button from "./components/ui/Button";
import Header from "./components/ui/Header";
import AnimateLetters from "./components/ui/animations/AnimateLetters";

export default async function Home(props: PropsWithChildren) {

  console.log("the props: " + props)

  let perms = 255
  perms &= 1
  // 1, 2, 4, 8, 16, 32

  const handleSubmit = async (data: FormData) => {
    "use server"
    console.log("aaaaaaaaa: " + data)
  }

  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)] justify-center items-center ml-96 mr-96">
      <Header />
      <div className="flex flex-col flex-grow w-full h-svh ">
        {/* <div className="w-full border-2 border-slate-950  rounded-xl p-1">
          <input className="w-full bg-slate-900 outline-none select-none"/>
        </div> */}
        <section className="flex flex-col flex-grow justify-center items-center">
          <div className="p-2 w-full h-screen flex flex-row justify-center items-center">
            <form action={handleSubmit}>
              <Button type="submit">
                <AnimateLetters letters={perms.toString()}></AnimateLetters>
              </Button>
            </form>

          </div>
          <div className="p-2  w-full h-screen">
            project 12
          </div>
        </section>
      </div>
    </div>
  );
}
