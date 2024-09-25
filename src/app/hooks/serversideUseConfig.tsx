import { usePrisma } from "./serversideUsePrisma";

class ServerConfig {
  constructor() {
    this.initialize()
  }

  async initialize () {
    await this.fetchDataFromDatabase()
  } 

   _isServiceAccessible: boolean = false;

  get isServiceAccessible() {
    return this._isServiceAccessible;
  }

  set isServiceAccessible(isAccessible: boolean) {
    const prisma = usePrisma();

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
  }

  async fetchDataFromDatabase() {
    const prisma = usePrisma();
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
  }
}

export const serversideUseConfig =async  () => {
  let serverConfig = new ServerConfig();
    await serverConfig.initialize()
  return serverConfig;
};
