import { Badge, Box, Stack, Text } from "@chakra-ui/react";

const NoteButton = () => {
	return (
		<Box
			borderBottom="1px solid"
			borderColor="gray.100"
			_hover={{
				background: "gray.100",
				cursor: "pointer",
				borderRadius: "md",
			}}
			transition="all 0.3s"
			display="flex"
			flexDirection="column"
			alignItems="flex-start"
			p={2}
			gap={2}
		>
			<Text fontWeight="bold">React Performance </Text>
			<Stack direction="row">
				<Badge>Default</Badge>
				<Badge colorPalette="green">Success</Badge>
				<Badge colorPalette="purple">New</Badge>
			</Stack>
			<Text>29 Oct 2024</Text>
		</Box>
	);
};

export default NoteButton;
