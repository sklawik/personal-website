
import { usePrisma } from './usePrisma'


export default async function useService() {
  "use server"
  try{
    let isWebsiteAvailable = false

    const err = null
    const prisma = usePrisma()
  
    if(err != null)
      return false
  
    const result = await prisma?.serviceSettings.findFirst()
  
    if (!result) {
  
      const res = await prisma?.serviceSettings.create({ data: { isServiceOnline: true } })
      if (res)
        isWebsiteAvailable = true
    }
    else {
      isWebsiteAvailable = result.isServiceOnline
    }
    return (
      isWebsiteAvailable
    )
  }
  catch(err){
    return false
  }
 
}
