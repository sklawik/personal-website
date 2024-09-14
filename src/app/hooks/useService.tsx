


import { PrismaClient } from '@prisma/client'


export default async function useService() {
"use server"
    let isWebsiteAvailable = false

    const prisma =  new PrismaClient()
    const result = await prisma.serviceSettings.findFirst()

    if(!result){

       const res = await prisma.serviceSettings.create({data:{canUsersAccess: true}})
       if(res)
       isWebsiteAvailable = true
    }
    else{
        isWebsiteAvailable = result.canUsersAccess
    }
    
    
 

  return (
    isWebsiteAvailable
  )
}
