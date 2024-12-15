

import { decodeJwt, jwtVerify, SignJWT } from 'jose';
import React, { useEffect, useState } from 'react'


export default async function ClientSideTest() {

    const JWT_SECRET = process.env.JWT_SECRET
     let cookieToSet = "";
     const secret = new TextEncoder().encode(JWT_SECRET)
     let userId = 1
     const token = await new SignJWT({userId})
     .setProtectedHeader({alg: "HS256"})
     .setIssuedAt()
     .setExpirationTime('1h')
     .sign(secret)

    
    let { payload } = await jwtVerify(token, secret)

    let x = payload
    console.log(x)

  return (
  <div>the test: {token}</div>
  )
}
