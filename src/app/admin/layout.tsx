import { AppProps } from 'next/app'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { PropsWithChildren } from 'react'
import { headers } from 'next/headers'

type UrlObject = {
    path: string,
    name: string
}

export default function layout(props: PropsWithChildren) {



    let url = headers().get('referer')
    let pathSplitted = url?.split('/')
    let partOfURL = pathSplitted?.at(pathSplitted.length-1)
    


    let  urls: UrlObject[] = [
        {
            path:  '/admin/roles',
            name: 'Role'
        },
        {
            path:   '/admin/users',
            name: 'Użytkownicy'
        },
        {
            path:   '/admin/posts',
            name: 'Posty'
        },
        {
            path:  '/admin/comments',
            name: 'Komentarze'
        },
        {
            path:  '/admin/statistics', 
            name: 'Statystyki'
        }
    ]

    return (
        <div className="flex flex-col w-full h-svh bg-black">
            <nav className="w-full">
                <div className="text-xl">
                    <Link href="/admin" className="cursor-pointer hover:scale-95 duration-100"> Panel zarządzania witryną</Link>
                   
                </div>
                <div title='Opis danej strony'>

                </div>

            </nav>
            <div className="flex flex-row flex-grow w-full h-full">
                <nav className=" min-w-12 min-h-full flex ">
                    <ul className="
                    [&>*:hover]:scale-95
                    flex flex-col  flex-grow  gap-1 *:ml-4 *:cursor-pointer text-slate-200 text-md">
                       {urls.map(url=>
                      <Link href={url.path}> <li className={url.path=='/admin/'+partOfURL?'text-white':'text-gray-300'}> {url.name}</li></Link> 
                       )}

                    </ul>
                </nav>
                <section className=" flex-grow flex flex-row justify-center ">
                   {props.children}
                </section>
            </div>
        </div>
    )
}
