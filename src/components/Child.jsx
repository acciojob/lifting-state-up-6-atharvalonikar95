import React from 'react'


const Child = ({todos,handleComplete}:props) => {
  return (
    <div>
        {todos.map((todo)=>(
            <div key={todo.id}>
                <h3>{todo.task}</h3>
                {todo.status==="pending" && <button onClick={()=>handleComplete(todo.id)}>Complete</button>}
            </div>
        ))}
    </div>
  )
}

export default Child
