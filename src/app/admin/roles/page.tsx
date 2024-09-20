

import AnimateLetters from '@/app/components/ui/animations/AnimateLetters'
import { MotionDiv } from '@/app/components/ui/animations/MotionDiv'
import Button from '@/app/components/ui/Button'
import { usePermission } from '@/app/hooks/usePermission'
import { usePrisma } from '@/app/hooks/usePrisma'
import { PrismaClient, Role } from '@prisma/client'
import { headers } from 'next/headers'
import { redirect, RedirectType, usePathname } from 'next/navigation'
import { NextResponse } from 'next/server'
import { permission } from 'process'
import React from 'react'
import {twMerge} from 'tailwind-merge'


let RoleRow = (props) => {

  let role = props.role
  let perms: number = props.perms




  return (
    props.enabled ?
      <button name='roleId' value={[role.id, perms]} type="submit">
        <div className="flex flex-row gap-2 justify-center items-center text-white">

          {props.children}
        </div>

      </button>
      :
      <button name='roleId' value={[role.id, perms]} type="submit">

        <div className="flex flex-row gap-2 justify-center items-center text-gray-400">
          {props.children}
        </div>

      </button>

  )
}

export default async function roles() {
  let prisma = usePrisma()
  let roles = await prisma.role.findMany()

  let handleClick = async (data: FormData) => {
    "use server"
    let theData = data.get('roleId')
    let dataSplitted = theData?.toString().split(',')
    console.log(dataSplitted)
    let roleId = dataSplitted?.at(0)
    let perms: any = dataSplitted?.at(1)



    let prisma = usePrisma()


    await prisma.role.update({
      data: {
        permissions: Number.parseInt(perms)
      },
      where: {
        id: roleId
      }
    })

    redirect("/admin/roles", RedirectType.replace)


  }


  // await prisma.role.create({data:{
  //   name: 'Moderator',
  //   hexColor: '#ffaacc',
  //   permissions: 255
  // }})

  

  return (
    <div className="flex-grow w-full max-h-svh flex flex-col ">
      <div className="m-12  px-2 flex flex-col gap-1 flex-grow overflow-y-scroll snap-y  ">

        {roles?.map((role) => (
          <div className="flex flex-row gap-2  w-full" key={role.id}>
            <div>
              {role.id}
            </div>
            <div>
              {role.name}
            </div>
            <button variant='default' style={{color: role.hexColor}}>
              {role.hexColor}
            </button>

            <form action={handleClick} className="flex flex-row flex-wrap gap-2 text-xs">
              <div className="flex flex-row gap-1 ">
                {usePermission(role.permissions, 'role').getRolePermissions().map(perm =>
                  <RoleRow name='roleId' enabled={perm.isEnabled} value={[role.id, perm.permId ^ role.permissions]} role={role} perms={perm.permId ^ role.permissions}>
                    {perm.displayName}
                  </RoleRow>)}
              </div>
              <div className="border-l-2 b-white ml-4 ">
                <button className='w-full' type='submit' name='roleId' value={[role.id, role.permissions == 255 ? 0 : 255]} >
                  {role.permissions == 255 ? <div className="bg-green-600 w-full px-1 rounded-sm text-white">Superuser</div> : <div className="text-slate-300">Superuser</div>}
                </button>
              </div>
            </form>
          </div>

        ))}

        <div className="snap-end"></div>
      </div>


    </div>
  )
}
