import React from 'react'

enum PermissionsForPost {

}

type Role = {
  name: string,
  hexColor: string

}

type User = {
  nickname: string,
  email: string,
  roles: []
}





export default function useAuth() {

  class Auth {

    isUserLoggedIn<Boolean>() {

    }

    getUser() {
      
    }
  }

  let auth = new Auth()

  return (
    <div>useAuth</div>
  )
}
