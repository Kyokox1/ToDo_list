import { Box, Heading, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AddTodo } from "./sections/AddTodo";
import { TodoList } from "./sections/TodoList";

function App() {
	const tasks = [
		{ id: 1, body: "make the bed" },
		{ id: 2, body: "Feed the cat" },
		{ id: 3, body: "Eat breakfast" },
		{ id: 4, body: "Program" }
	];
	const [todoTask, setTodoTask] = useState(tasks);

	const addTodo = (newTodo) => {
		setTodoTask([...todoTask, newTodo]);
	};

	const deleteTodo = (id) => {
		const newTodos = todoTask.filter((el) => el.id !== id);
		setTodoTask(newTodos);
	};

	return (
		<>
			<Box as="main" pt="70px">
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
			</Box>
		</>
	);
}

export default App;
