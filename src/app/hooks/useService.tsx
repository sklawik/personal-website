
import { usePrisma } from './usePrisma'


export default async function useService() {
  "use server"
  let isWebsiteAvailable = false

  const prisma = usePrisma()
  const result = await prisma.serviceSettings.findFirst()

  if (!result) {

    const res = await prisma.serviceSettings.create({ data: { isServiceOnline: true } })
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
