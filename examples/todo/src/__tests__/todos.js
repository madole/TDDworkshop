import React from "react"
import Todos from "../Todos"
import { render, fireEvent } from "@testing-library/react"

test("should render no list items when no todos are present", () => {
  const { container } = render(<Todos />)

  const list = container.querySelectorAll("li")
  expect(list.length).toEqual(0)
})

test("should add a todo when input is filled and add button is pressed", async () => {
  const { container, getByText } = render(<Todos />)
  const button = getByText("Add todo")
  const input = container.querySelector("input")

  await fireEvent.change(input, { target: { value: "new todo" } })
  await fireEvent.click(button)

  const list = container.querySelectorAll("li")
  expect(list.length).toEqual(1)
})

test("should add a todo when input is filled and enter is pressed", async () => {
  const { container } = render(<Todos />)

  const input = container.querySelector("input")

  await fireEvent.change(input, { target: { value: "new todo" } })
  await fireEvent.keyDown(input, { key: "Enter" })

  const list = container.querySelectorAll("li")
  expect(list.length).toEqual(1)
})

test("should clear the input text after adding the todo", async () => {
  const { container, getByText } = render(<Todos />)
  const button = getByText("Add todo")
  const input = container.querySelector("input")

  await fireEvent.change(input, { target: { value: "new todo" } })
  await fireEvent.click(button)

  expect(input.innerHTML).toEqual("")
})

test("should remove the todo when the delete button associated with the todo is clicked", async () => {
  const { container, getByText, getAllByText } = render(<Todos />)
  const addButton = getByText("Add todo")
  const input = container.querySelector("input")

  await fireEvent.change(input, { target: { value: "first todo" } })
  await fireEvent.click(addButton)
  await fireEvent.change(input, { target: { value: "second todo" } })
  await fireEvent.click(addButton)
  await fireEvent.change(input, { target: { value: "third todo" } })
  await fireEvent.click(addButton)

  const deleteButtons = getAllByText("X")

  await fireEvent.click(deleteButtons[1])

  const list = Array.from(container.querySelectorAll("li > span")).map(
    ({ innerHTML }) => innerHTML
  )
  expect(list.length).toEqual(2)
  expect(list).toEqual(["first todo", "third todo"])
})

test("should not add a list item if the input box has no text in it", async () => {
  const { container, getByText } = render(<Todos />)
  const addButton = getByText("Add todo")
  await fireEvent.click(addButton)
  const list = container.querySelectorAll("li")
  expect(list.length).toEqual(0)
})
