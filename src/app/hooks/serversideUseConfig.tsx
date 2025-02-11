
import { getPrisma  } from "./getPrisma";
import GlobalConfig from '@/app/app.config.js'

class ServerConfig {
  constructor() {
    this.initialize()
  }

  async initialize () {
    await this.fetchDataFromDatabase()
  } 

   _isServiceAccessible: boolean = false;

  get isServiceAccessible() {
  
    

    return this._isServiceAccessible
  }

  set isServiceAccessible(isAccessible: boolean) {
    const prisma = getPrisma();

    if (prisma) {
      (async () => {
        try {
          await prisma.serviceConfig.update({
            data: {
              isServiceAccessible: isAccessible,
            },
            where: {
              id: 1,
            },
          });
        } catch (error) {
          console.error("Error updating service config:", error);
        }
      })();
    }
  
    this._isServiceAccessible = isAccessible;
    GlobalConfig.isServiceAccessible = isAccessible
  }

  async fetchDataFromDatabase() {
    const prisma = getPrisma();
    const data = await prisma?.serviceConfig.findFirst({});
    if (!data) {
      await prisma?.serviceConfig.create({
        data: {
          isServiceAccessible: false,
        },
      });
      this.fetchDataFromDatabase();
      return;
    }
    
    this._isServiceAccessible = data?.isServiceAccessible;
    GlobalConfig.isServiceAccessible = this._isServiceAccessible 
    }
}

export const serversideUseConfig =async  () => {
  const serverConfig = new ServerConfig();
    await serverConfig.initialize()
  return serverConfig;
};
