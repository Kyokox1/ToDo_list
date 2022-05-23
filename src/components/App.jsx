import { Box, Heading, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AddTodo } from "./sections/AddTodo";
import { TodoList } from "./sections/TodoList";

function App() {
	const tasks = [
		{ id: 1, body: "Hacer la cama" },
		{ id: 2, body: "Alimentar al gato" },
		{ id: 3, body: "Almorzar" },
		{ id: 4, body: "Hacer algo" }
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
		<Box>
			<main>
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
			</main>
		</Box>
	);
}

export default App;
