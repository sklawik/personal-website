import React from 'react'

export default async function serverWrapper() {

    let serverFunc = async function(){
        return 'some data'
    }

  return (
    <div>serverWrapper</div>
  )
}
