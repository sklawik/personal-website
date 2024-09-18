import { PrismaClient } from "@prisma/client"

type PrismaHandlerProps = null | PrismaClient

let prisma: PrismaHandlerProps = null 

export const usePrisma = function (){
    if(prisma == null){
        prisma = new PrismaClient()
    }
    return prisma
}