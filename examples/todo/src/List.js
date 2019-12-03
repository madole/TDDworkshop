import React from "react"

const List = props => {
  const { todos, removeTodo } = props

  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={todo + "-" + i}>
          <span>{todo}</span>
          <button onClick={() => removeTodo(i)}>X</button>
        </li>
      ))}
    </ul>
  )
}

export default List
