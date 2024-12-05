
import Header from "./components/ui/Header";
import ClientSideTest from "./components/ClientSideTest";

export const dynamic = 'force-dynamic';

export default async function Home() {

  return (
    <div className=" flex flex-col font-[family-name:var(--font-geist-sans)] justify-center items-center sm:ml-96 sm:mr-96">


      <div className="flex flex-col flex-grow w-full h-svh ">
        <section className="flex-grow min-h-full  bg-green-500">
          123
        </section>
        <section className="flex-grow min-h-full  bg-red-500">
          123
        </section>
      </div>
    </div>
  );
}
 