'use client'
import React, { useEffect } from 'react'
import Child from './comp/Child'
import { todo } from 'node:test'
type todoArr={
    id:number,
    task:string,
    status:string
}
const todos=[
    { id:1,task:"task1",status:"pending"},
    { id:2,task:"task2",status:"pending"},
    { id:3,task:"task3",status:"pending"},
]

const page = () => {
    const [todo,setTodo]=React.useState(todos)
    const handleComplete=(id:number)=>{
        setTodo(prev=>prev.map((t)=>t.id===id?{...t,status:"completed"}:t))
        
    }

  return (
    <div>
        <Child todos={todo} handleComplete={handleComplete} />
    </div>
  )
}

export default page
