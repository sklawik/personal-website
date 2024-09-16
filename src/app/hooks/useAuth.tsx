import React from 'react'

enum PermissionsForPost  {

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
  return (
    <div>useAuth</div>
  )
}
