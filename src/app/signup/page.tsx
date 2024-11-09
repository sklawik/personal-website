import React from "react";
import { getPrisma } from "../hooks/getPrisma";
// import { cookies } from "next/headers";
// import { SignJWT } from "jose";

export default function page() {
  return (
    <div>
      signup
      <form
        action={async (data: FormData) => {
          "use server";
        const _login = data.get("login")?.toString()
        const _password = data.get("password")?.toString()

        if(!_password)
            return
        if(!_login)
            return

            const prisma = getPrisma()
            await prisma?.user.create({data:{
                password: _password,
                email: _login
            }})

            // const payload = { 
            //     test: "123",
            // }

            // const jwt = new SignJWT()
            // const signed = jwt.sign()

          //  jwt.sign()
          
            // cookies().set("jwt", `${authData}`)

        }}
    >
        <input name="login" />
        <input name="password" />
        <button type="submit">signup</button>
      </form>
    </div>
  );
}
