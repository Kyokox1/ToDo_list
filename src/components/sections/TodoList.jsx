import { HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const TodoList = ({todoTask, deleteTodo}) => {
	return (
		<Stack w="60%" p={3} outline="2px #00000020 solid" borderRadius="xl">
			{todoTask.map((task, i) => (
				<HStack
					key={task.id}
					justify="space-between"
					pb={2}
					borderBottom={i !== todoTask.length - 1 && "2px #00000020 solid"}
				>
					<Text>{task.body}</Text>
					<IconButton onClick={()=>deleteTodo(task.id)} />
				</HStack>
			))}
		</Stack>
	);
};
