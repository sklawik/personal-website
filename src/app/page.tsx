import Footer from "./components/ui/Footer";

export default async function Home() {

  return (
    <div className=" flex flex-col font-[family-name:var(--font-geist-sans)] justify-center items-center sm:ml-96 sm:mr-96 snap ">
     

      <div className="flex flex-col flex-grow w-full min-h-screen  snap-start justify-center items-center dark:text-white">
      <h2>Strona internetowa jest w ciągłej budowie..</h2>
    <h4>Stworzona na bazie NextJS15, zawierać będzie dynamiczny, interaktywny nagłówek oddziałowujący na elementy strony www.</h4>  
      <br/>
     <a href="https://github.com/sklawik/personal-website" className="underline text-black dark:text-white">kod źródłowy</a> 
      </div>
     
      <div className="flex flex-col flex-grow w-full min-h-screen snap-end ">
  
      </div>
      <Footer/>
    </div>
  );
}
