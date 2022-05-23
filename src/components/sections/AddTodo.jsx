import React, { useState } from "react";
import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { nanoid } from "nanoid";

export const AddTodo = ({ addTodo }) => {
	const [content, setContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(content)
        if(content){
            const todo = {
                id: nanoid(),
                body: content
            };
    
            addTodo(todo);
            setContent("");

        }
	};

	return (
		<Box as="form" onSubmit={handleSubmit} w="50%">
			<Stack direction="row">
				<Input
					placeholder="Enter your Task"
					variant="filled"
					value={content}
                    required
					onChange={(e) => setContent(e.target.value)}
				/>
				<Button type="submit" colorScheme="pink" px={8} >
					Add Todo
				</Button>
			</Stack>
		</Box>
	);
};
