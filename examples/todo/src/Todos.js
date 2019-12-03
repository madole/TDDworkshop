import React, { useRef, useReducer } from "react"
import reducer from "./reducer"
import List from "./List"

const Todos = () => {
  const [state, dispatch] = useReducer(reducer)

  const ref = useRef()

  function addTodo() {
    const todo = ref.current.value
    if (todo === "") {
      return
    }
    dispatch({
      type: "add-todo",
      todo
    })
    ref.current.value = ""
  }

  function removeTodo(index) {
    dispatch({
      type: "remove-todo",
      position: index
    })
  }

  function onKeyDown({ key }) {
    if (key === "Enter") {
      addTodo()
    }
  }

  return (
    <>
      <input ref={ref} onKeyDown={onKeyDown} />
      <button onClick={addTodo}>Add todo</button>
      {Array.isArray(state) && <List todos={state} removeTodo={removeTodo} />}
    </>
  )
}

export default Todos
