import React from 'react'
interface Props{
    name:string
    age: number
}

export default function LoginCard({name,age}:Props) {
  return (
    <div className="text-white lg:bg-red-50 md:bg-yellow-200 sm:bg-purple-300 bg-green-300">my{name}is{age}</div>
  )
}
