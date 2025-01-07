import { FaGithub } from "react-icons/fa";
import ProjectChart from "./components/ProjectChart";
import Footer from "./components/ui/Footer";
import AnimateLetters from "./components/ui/animations/AnimateLetters";
import { IoMdBuild } from "react-icons/io";

export default async function Home() {

  return (
    <div className=" flex flex-col font-[family-name:var(--font-geist-sans)] justify-center items-center sm:ml-96 sm:mr-96 m-0 snap  gap-4">


      <section className="flex flex-col flex-grow w-full min-h-96  snap-start justify-center items-center dark:text-white text-center">
        <h2 className="flex flex-row gap-1 justify-center items-center">Work in progress! <IoMdBuild />
        </h2>
        <h4 className="flex flex-row">
          <AnimateLetters letters="Stworzona_na_bazie_NextJS15,_zawierać_będzie_dynamiczny,_interaktywny_nagłówek_oddziałowujący_na_elementy_strony_www."></AnimateLetters>
        
          </h4>
        <br />
        <a target="_blank" href="https://github.com/sklawik/personal-website" className="underline text-black dark:text-white">kod źródłowy</a>
      </section>
      <h1 className="p-2 dark:text-white text-xl">Projekty</h1>
      <section className="flex flex-col flex-grow w-full min-h-96 snap-end justify-center items-center">

        <section className="flex flex-col gap-4 ">
          <ProjectChart link="https://github.com/sklawik/szkodnik-rp" title="Skrypt dla wieloosobowej gry RolePlay" description={<div>
            Napisałem go będąc w wieku ok. 16 lat (okolice 2017-2018), łącznie pracowałem nad nim przez około 2 lata praktycznie codziennie.
            Symulował on prawdziwe życie w grze video (wliczając pojazdy należące do graczy, grup, frakcji w tym publicznych i porządkowych, systemów własnych domów, mieszkań, instytucji publicznych np. więzień i szpitali), przedmiotów z których gracze mogli korzystać, był głównie tworzony 4fun dla grupy internetowych znajomych oraz dla tych którzy przybyli z internetu czy dla tych, którzy odkryli go drogą pantoflową.
            Następujące rzeczy, które wyniosłem po tym projekcie na projekty, który pisałem i zajmuje się nimi w przyszłości:
            <ul className="flex flex-col p-2 gap-2 list-disc m-2">
              <li>
                <span className="text-blue-400">Modularność:</span> <br />Ten skrypt ma niespełna 20 tyś. linijek kodu, które napisałem w jednym pliku. Od teraz przy bieżących projektach dokonuje re-searchu aby wybrać konkretny model
                na dany projekt. Np. Model-View-Controller (stosowany przy projektach Java).
              </li>
              <li>
                <span className="text-green-400">Bazy danych:</span> <br /> Początkowo zapis dany był do zwykłych plików tekstowych (wtedy odkryłem, że od razu przy zapisie wypadałoby użyć szyfrowania/hashowania danych) tak więc rezygnując z systemu plików
                nauczyłem się języka Sql (MySql) i przy tym używałem SHA256 do zapisu haseł jak i ich odczytywania. Zagłębiając temat, użyłem tzw. soli by hasła przy potencjalnym wycieku były bezpieczniejsze.
                Nie można też zapomnieć o tym, że zwykły Sql przy większym tego typu projekcie się wypali, gdyż skrypt na starcie zawsze odtwarzał bazę danych - zawsze trzeba było ją migrować aby nie tracić tego co baza zachowywała wcześniej przy zmianach z automatu.
                Takie rozwiązanie to PrismaDB dla innego środowiska programistycznego.
              </li>
              <li>
                <span className="text-red-400">Bezpieczeństwo:</span> <br />Skrypt przyjmował od graczy wartości, które po stronie klienta mogłyby być modyfikowane. Pomimo tego, że sama platforma nie pozwalała na to by klient mógłby je modyfikować niczym
                F12 w przeglądarce, to jednak za pomocą narzędzi stron trzecich (np. Cheat Engine) pozwalało ono na modyfikację wartości, które serwer musiał weryfikować i im po prostu nie ufać.
              </li>
              <li>
                <span className="text-gray-800 dark:text-gray-200">Hosting:</span><br /> Aby serwis się utrzymywał, dość prędko przybył okres, w którym nastąpiło przejście z gamingowego hostingu na VPS, który wymagał zabezpieczeń i konfiguracji oraz skryptów, które pilnowały aby
                w przypadku wysypania się aplikacji mogła ona wrócić online oraz zapisała log z takiego wypadku.
              </li>
              <li>
                <span className="text-purple-600 dark:text-gray-200">Git:</span><br />
                Naszła potrzeba na nowe funkcjonalności, wracanie do poprzednich stanów skryptu oraz przetrzymwanie go w porządnym miejscu - łącznie do kolaboracji z innymi.
                Wtedy nauczyłem się Gita aby móc lepiej zarządzać projektem i mieć więcej możliwości co do jego rozbudowy jak i zarządzania.
              </li>

            </ul>
          </div>}></ProjectChart>
          <ProjectChart
            link="https://github.com/sklawik/Steam-library-UI-design/tree/master"
            title="Edytor interfejsu dla platformy samp napisany w C#"
            description={<div className="flex flex-row justify-center items-center">
              <img src ="/image.png"></img>
            </div>}>

          </ProjectChart>
          <ProjectChart
            link="    https://github.com/sklawik/Steam-library-UI-design/tree/masterr"
            title="Prosty design biblioteki Steam"
            description={<div className="flex flex-col">
              <section>
                Ćwiczyłem w tym projekcie umiejętności flexbox w CSS patrząc na oryginał
              </section>
              <section className="flex flex-col sm:flex-row justify-center items-center m-4">
                <img className="sm:w-1/2 w-full h-96" src="   https://assets.rockpapershotgun.com/images/2019/09/steam-library-3.jpg">
                </img>

                <img className="sm:w-1/2 w-full h-full" src="https://camo.githubusercontent.com/b62d2462077dde99fe2832b6386ffd2c2b7324fdf190ad8e71bac52ce78c121c/68747470733a2f2f696d6775722e636f6d2f74644d4e4a57612e6a7067">
                </img>
              </section>
            </div>}>

          </ProjectChart>

          <span className="dark:text-white text-slate-800">Proste modyfkacje do gier napisane w Lua: </span>
          <ProjectChart link="https://github.com/sklawik/TeardownGodmode" title="Godmode dla gry Teardown" description={<div className="flex flex-col">
            <ol className="flex flex-col gap-1">
              <li className="flex flex-row gap-2">Liczba akywnych użytkowników korzystających z moda: <span className="text-red-500 flex flex-row"><AnimateLetters letters="+3500"></AnimateLetters></span> </li>
              <li className="flex flex-row gap-2">W ulubionych: <span className="text-blue-500 flex flex-row"><AnimateLetters letters="+40"></AnimateLetters></span></li>
              <li className="flex flex-row gap-2">Wyświetleń:<span className="text-blue-500 flex flex-row"> <AnimateLetters letters="+5000"></AnimateLetters></span></li>
            </ol>

            Bardzo prosty skrypt, który załącza się do głównego ticku gry i stąd ją modyfikuje w niesmiertelność gracza.

          </div>}>
          </ProjectChart>
          <section className="flex flex-col justify-center items-center dark:text-white">
            <div className="flex flex-col justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-800 p-2 duration-500 rounded-xl underline">
              <a target="_blank" href="https://github.com/sklawik">


                <h1>Więcej projektów znajduje się na moim Githubie </h1>


              </a>
              <div><FaGithub className="mt-2" size="36" /> </div>
            </div>
          </section>

        </section>
      </section>
      <Footer />
    </div >
  );
}
