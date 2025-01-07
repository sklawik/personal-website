
import React from 'react'

type ProjectChartProps = {
    title: string,
    description: React.ReactElement,
    link: string
}

export default function ProjectChart(props: ProjectChartProps) {
  return (
    <div className="flex flex-col gap-2 p-4 dark:bg-gray-950 dark:text-slate-200 rounded-xl max-w-full bg-slate-200">
        <div className="text-slate-600 dark:text-gray-300 flex flex-row justify-between"><h1>{props.title}</h1> <a target="_black" href={props.link} className=" underline px-4 rounded-xl bg-yellow-800 text-white hover:bg-yellow-400 duration-500">link</a></div>
        <div className="text-slate-600 dark:text-gray-300">{props.description}</div>
    </div>
  )
}
