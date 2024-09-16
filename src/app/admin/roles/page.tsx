import AnimateLetters from '@/app/components/ui/animations/AnimateLetters'
import { MotionDiv } from '@/app/components/ui/animations/MotionDiv'
import Button from '@/app/components/ui/Button'
import { usePermission } from '@/app/hooks/usePermission'
import { usePrisma } from '@/app/hooks/usePrisma'
import { PrismaClient, Role } from '@prisma/client'
import { headers } from 'next/headers'
import React from 'react'

export default async function roles() {

  let handleClick = async (data: FormData) => {
    "use server"
    console.dir(data)

  }

  let head = headers()

  let prisma = usePrisma()


  let roles = await prisma.role.findMany()

  // await prisma.role.create({data:{
  //   name: 'Moderator',
  //   hexColor: '#ffaacc',
  //   permissions: 255
  // }})

  let roleManager = usePermission(255, 'role')


  let newPermission = roleManager?.modifyPermission('canCommentPosts', 'revoke')


  return (
    <div className="flex-grow w-full max-h-svh flex flex-col  ">
      <section className="flex flex-row flex-grow ">
        <section className="flex-grow flex flex-row  justify-center overflow-y-scroll ">
          <div className="min-w-36  px-2 max-w-80 flex flex-col gap-10 flex-grow max-h-80 overlow-y-scroll ">

            {roles?.map((role) => (

              <div className="flex flex-col bg-black px-6 py-2 rounded-xl ">
                <section>
                  <div className={"text-[" + role.hexColor + ']' + " px-4 py-0.5 text-center rounded-xl w-20 "} key={role.id}>
                    {role.name} 
                  </div>
                  {usePermission(role.permissions, 'role').isSuperuser() && 'is superuser'}
                  <input type="checkbox" className="checked:size-10" />
                </section>
                <section>

                </section>

              </div>



            ))}
          </div>

        </section>
        <section className="flex flex-col">
          sample sidebar
        </section>
      </section>

      <div className="order-last mt-auto p-4 h-auto bg-black flex flex-col  ">
        Sample bottom

      </div>
    </div>
  )
}
