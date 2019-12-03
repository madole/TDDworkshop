// export default function reducer(state, action) {
//   if (action.type === "add-todo") {
//     return [...state, action.todo]
//   }
//   if (action.type === "remove-todo") {
//     const newState = [...state]
//     newState.splice(action.position, 1)
//     return newState
//   }
//   return state
// }

export default function reducer(state = [], action) {
  switch (action.type) {
    case "add-todo":
      return [...state, action.todo]
    case "remove-todo": {
      const newState = [...state]
      newState.splice(action.position, 1)
      return newState
    }
    default:
      return state
  }
}
