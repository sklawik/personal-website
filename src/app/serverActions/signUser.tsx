"use server";

// const JWT_SECRET = process.env.JWT_SECRET
// let cookieToSet = "";
// const secret = new TextEncoder().encode(JWT_SECRET)
// let userId = 1
// const token = await new SignJWT({userId})
// .setProtectedHeader({alg: "HS256"})
// .setIssuedAt()
// .setExpirationTime('1h')
// .sign(secret)

// let { payload } = await jwtVerify(token, secret)

// let x = payload

type TypeUserAuth = {
  email: string;
  password: string;
  repeatPassword?: string;
};



export default async function SignUser(props: TypeUserAuth) {
    

    await new Promise(resolve => {
        setTimeout(resolve, 2000);
      });

 

    return null
}
