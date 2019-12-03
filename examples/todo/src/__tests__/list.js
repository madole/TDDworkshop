import React from "react"
import { render, fireEvent } from "@testing-library/react"
import List from "../List"

const todos = ["one", "two", "three", "four", "five"]

test("it should render a container with 5 list items in it", () => {
  const { container } = render(<List todos={todos} />)
  expect(container.querySelectorAll("li").length).toEqual(5)
})

test("it should render one delete button per item", () => {
  const { getAllByText } = render(<List todos={todos} />)
  expect(getAllByText("X").length).toEqual(5)
})

test("it should call removeTodo with the index to be removed when clicked", async () => {
  const removeTodo = jest.fn()
  const { getAllByText } = render(
    <List todos={todos} removeTodo={removeTodo} />
  )
  const index = 3
  const button = getAllByText("X")[index]

  await fireEvent.click(button)

  expect(removeTodo).toBeCalledWith(index)
})
