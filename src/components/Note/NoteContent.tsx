import { Box, Badge, Stack, Text, Separator, ListRoot } from "@chakra-ui/react";
import { FiTag, FiClock } from "react-icons/fi";

const NoteContent = () => {
	return (
		<Box p={6} borderRadius="md" boxShadow="md" bg="white" maxW="600px">
			<Text fontSize="xl" fontWeight="bold">
				React Performance Optimization
			</Text>

			<Stack direction="row" alignItems="center" mt={2}>
				<FiTag size={16} />
				<Text fontWeight="medium">Tags:</Text>
				<Stack direction="row">
					<Badge colorScheme="purple">Dev</Badge>
					<Badge colorScheme="blue">React</Badge>
				</Stack>
			</Stack>

			<Stack direction="row" alignItems="center" mt={2}>
				<FiClock size={16} />
				<Text fontWeight="medium">Last edited:</Text>
				<Text>29 Oct 2024</Text>
			</Stack>

			<Separator my={4} />

			<Text fontWeight="bold">Key performance optimization techniques:</Text>
			<ListRoot gap={2} mt={2} listStyleType="none">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam
				dignissimos laudantium voluptates mollitia fuga explicabo cupiditate
				nam, excepturi repellat iure totam sequi, eaque natus. Quidem ipsum ea
				aliquam mollitia.
			</ListRoot>
		</Box>
	);
};

export default NoteContent;
