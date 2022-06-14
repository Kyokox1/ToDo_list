import React from "react";
import {
	Badge,
	Box,
	Checkbox,
	HStack,
	IconButton,
	Stack,
	StackDivider,
	Text
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

export const TodoList = ({ todoTask, deleteTodo, setEditTodo, toggleTodo }) => {
	return (
		<>
			{todoTask.length > 0 ? (
				<Stack
					w={{ xl: "60%", lg: "70%", md: "80%", base: "90%" }}
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
							<HStack
								maxW={{
									base: "75%",
									md: "85%",
									lg: "90%"
								}}
							>
								<Checkbox
									onChange={() => toggleTodo(task.id)}
									defaultChecked={task.completed}
								/>
								<Text
									maxW="100%"
									textDecorationLine={
										task.completed && "line-through"
									}
									onDoubleClick={() => setEditTodo(task)}
								>
									{task.body}
								</Text>
							</HStack>
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
