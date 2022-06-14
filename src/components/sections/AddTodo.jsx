import React, { useEffect, useState } from "react";
import { Box, Button, Input, Stack, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

export const AddTodo = ({ addTodo, editTodo, updateTodo }) => {
	const [content, setContent] = useState("");
	const toast = useToast();

	useEffect(() => {
		if (editTodo) {
			setContent(editTodo.body);
		}
	}, [editTodo]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(content)
		if (content) {
			const todo = {
				id: nanoid(),
				body: content
			};
			if (editTodo) updateTodo({ ...todo, id: editTodo.id });
			if (!editTodo) addTodo(todo);
			setContent("");
		} else {
			toast({
				title: "No content.",
				description: "add a task.",
				status: "error",
				duration: 2000,
				isClosable: true
			});
		}
	};

	return (
		<Box
			as="form"
			onSubmit={handleSubmit}
			w={{ base: "90%", md: "80%", lg: "70%", xl: "50%" }}
		>
			<Stack direction={{ base: "column", lg: "row" }}>
				<Input
					placeholder="Enter your Task"
					variant="filled"
					value={content}
					autoFocus
					onChange={(e) => setContent(e.target.value)}
				/>
				<Button
					type="submit"
					colorScheme={!editTodo ? "pink" : "green"}
					px={8}
				>
					{!editTodo ? "Add Todo" : "Edit Todo"}
				</Button>
			</Stack>
		</Box>
	);
};
