import React from "react";
import {
	Badge,
	Box,
	HStack,
	IconButton,
	Stack,
	StackDivider,
	Text
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

export const TodoList = ({ todoTask, deleteTodo }) => {
	return (
		<>
			{todoTask.length > 0 ? (
				<Stack
					w="60%"
					p={3}
					outline="2px #00000020 solid"
					borderRadius="xl"
					divider={<StackDivider />}
				>
					{todoTask.map((task, i) => (
						<HStack
							key={task.id}
							justify="space-between"
							pb={2}
							// borderBottom={i !== todoTask.length - 1 && "2px #00000020 solid"} //* Solucion sin aplicar el "StackDivider" de arriba.
						>
							<Text>{task.body}</Text>
							<IconButton
								icon={<FaTrash />}
								isRound="true"
								onClick={() => deleteTodo(task.id)}
							/>
						</HStack>
					))}
				</Stack>
			) : (
				<Box py={4}>
					<Badge p={5} colorScheme="green" borderRadius="lg">
						Yeiii no Todos!!!
					</Badge>
				</Box>
			)}
		</>
	);
};
