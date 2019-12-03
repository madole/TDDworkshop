import reducer from "../reducer"

const state = ["one", "two"]

test("it should return state if no action is matched", () => {
  const result = reducer(state, { type: "no-match" })
  expect(result).toEqual(state)
})

test("it should add a todo to the state", () => {
  const type = "add-todo"
  const todo = "Don't forget the milk"

  const result = reducer(state, { type, todo })

  expect(result.length).toEqual(3)
  expect(result).toEqual([...state, todo])
})

test("it should remove a todo at the position given", () => {
  const type = "remove-todo"
  const position = 1

  const result = reducer(state, { type, position })

  expect(result.length).toEqual(1)
  expect(result).toEqual(["one"])
})
