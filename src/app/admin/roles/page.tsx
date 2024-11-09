"use server"

import { UsePermission } from '@/app/hooks/usePermission';
import {getPrisma } from '@/app/hooks/getPrisma'
import { PrismaClient, Role } from '@prisma/client';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';


type RoleRowProps = {
  name: string;
  key: number;
  enabled: boolean;
  value: [string, string];
  role: Role;
  perms: number;
  children: ReactNode;
}



const RoleRow = (props: RoleRowProps) => {
 

  const { role, perms, enabled, children } = props;

  return (
    <button name='roleId' value={[role.id.toString(), perms.toString()]} type="submit">
      <div className={`flex flex-row gap-2 justify-center items-center ${enabled ? 'text-white' : 'text-gray-400'}`}>
        {children}
      </div>
    </button>
  );
};

export default async function Roles() {
  const prisma = new PrismaClient();
  if(!prisma )
    return
  const roles = await prisma.role.findMany();

  return (
    <div className="flex-grow w-full max-h-svh flex flex-col">
      <div className="m-12 px-2 flex flex-col gap-1 flex-grow overflow-y-scroll snap-y">
        {roles?.map((role) => (
          <div className="flex flex-row gap-2 w-full" key={role.id}>
            <div>{role.id}</div>
            <div>{role.name}</div>
            <button style={{ color: role.hexColor }}>{role.hexColor}</button>

            <form action={async (data: FormData) => {
              "use server";
              const theData = data.get('roleId');
              const dataSplitted = theData?.toString().split(',');
              const roleId = dataSplitted?.at(0);
              const perms: number = Number(dataSplitted?.at(1));
              if (!roleId) return;
              const prisma = getPrisma()
              await prisma?.role.update({
                data: {
                  permissions: perms,
                },
                where: {
                  id: BigInt(roleId),
                },
              });

              redirect("/");
            }} className="flex flex-row flex-wrap gap-2 text-xs">
              <div className="flex flex-row gap-1">
                {UsePermission(role.permissions, 'role').getRolePermissions().map(perm => (
                  <RoleRow key={perm.permId} name='roleId' enabled={perm.isEnabled} value={[role.id.toString(), (perm.permId ^ role.permissions).toString()]} role={role} perms={perm.permId ^ role.permissions}>
                    {perm.displayName.toString()}
                  </RoleRow>
                ))}
              </div>
              <div className="border-l-2 b-white ml-4">
                <button className='w-full' type='submit' name='roleId' value={[role.id.toString(), (role.permissions === 255 ? 0 : 255).toString()]}>
                  {role.permissions === 255 ? <div className="bg-green-600 w-full px-1 rounded-sm text-white">Superuser</div> : <div className="text-slate-300">Superuser</div>}
                </button>
              </div>
            </form>

            <form action={async () => {
              "use server";
              const prisma = getPrisma()
              await prisma?.role.delete({ where: { id: role.id } });
              redirect('/admin/roles');
            }}>
              <button type='submit' className='bg-red-500 px-2.5 text-sm py-0.5 text-red-100'>Usuń</button>
            </form>
          </div>
        ))}

        <div className="snap-end"></div>
      </div>

      <form className="flex flex-col gap-1 w-1/4 text-slate-100 select-none [&_input]:bg-gray-900" action={async (e: FormData) => {
        "use server";
        const roleName = e.get('roleName');
        const roleHexColor = e.get('roleHexColor');
        const rolePerms = Number(e.get('rolePerms'));

        if (!roleName || !roleHexColor || isNaN(rolePerms)) return;

        const prisma = getPrisma();
        await prisma?.role.create({
          data: {
            hexColor: roleHexColor as string,
            permissions: rolePerms,
            name: roleName as string,
          },
        });

        redirect('/admin/roles');
      }}>
        <input name='roleName' placeholder='new name for a role' />
        <input name='roleHexColor' placeholder='ex. #ff0000' />
        <input name='rolePerms' placeholder='1' />
        <button type='submit'>dodaj</button>
      </form>
    </div>
  );
}