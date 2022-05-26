import {
	Box,
	Heading,
	IconButton,
	Stack,
	useColorMode
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

import { TodoList } from "./sections/TodoList";
import { AddTodo } from "./sections/AddTodo";

function App() {
	const tasks = [
		{ id: 1, body: "make the bed" },
		{ id: 2, body: "Feed the cat" },
		{ id: 3, body: "Eat breakfast" },
		{ id: 4, body: "Program" }
	];

	// const [todoTask, setTodoTask] = useState(tasks); //* Sin LocalStorage
	const [todoTask, setTodoTask] = useState(
		() => JSON.parse(localStorage.getItem("todos")) || tasks
	);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todoTask));
	}, [todoTask]);

	// ? add and delete Todos functions
	const addTodo = (newTodo) => {
		setTodoTask((todoTask) => [...todoTask, newTodo]);
	};

	const deleteTodo = (id) => {
		// const newTodos = todoTask.filter((el) => el.id !== id);
		// setTodoTask(()=>newTodos);
		setTodoTask((todos) => todos.filter((todo) => todo.id !== id));
	};

	// ?Theme Dark and Ligth

	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Box as="main" pt="70px" pos="relative">
				<Stack align="center" gap={6}>
					<Heading
						as="h1"
						textAlign="center"
						bgGradient="linear(to-r, pink.500, pink.300, blue.600)"
						backgroundClip="text"
					>
						Todo Application
					</Heading>

					<TodoList todoTask={todoTask} deleteTodo={deleteTodo} />

					<AddTodo addTodo={addTodo} />
				</Stack>

				<IconButton
					icon={
						colorMode === "light" ? <BsMoonStarsFill /> : <BsSunFill />
					}
					onClick={toggleColorMode}
					pos="absolute"
					top="1vh"
					right="1vw"
					isRound="true"
					zIndex="100"
				/>
			</Box>
		</>
	);
}

export default App;
