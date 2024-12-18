
import Header from "./components/ui/Header";
import ClientSideTest from "./components/ClientSideTest";

export const dynamic = 'force-dynamic';

export default async function Home() {

  return (
    <div className=" flex flex-col font-[family-name:var(--font-geist-sans)] justify-center items-center sm:ml-96 sm:mr-96 snap ">

    
      <div className="flex flex-col flex-grow w-full min-h-screen  snap-start">
      
      </div>
      <div className="flex flex-col flex-grow w-full min-h-screen snap-end ">
      
      </div>
    </div>
  );
}
 