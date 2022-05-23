import { Button, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
	const [content, setContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(content)

		const todo = {
			id: 4,
			body: content
		};

		addTodo(todo);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Stack direction="row">
				<Input
					placeholder="Enter your Task"
					variant="filled"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<Button type="submit" colorScheme="pink" px={8}>
					Add Todo
				</Button>
			</Stack>
		</form>
	);
};
