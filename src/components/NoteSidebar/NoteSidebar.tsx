import { Button, Text, Separator, VStack } from "@chakra-ui/react";

import { AiFillHome } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { AiFillTag } from "react-icons/ai";

const NoteSidebar = () => {
	return (
		<VStack
			display="flex"
			flexDirection="column"
			alignItems={"flex-start"}
			w="300px"
			// minH="1000px"
			bg="gray.100"
			color="#000"
			border="1px solid"
			borderColor="gray.300"
			py={4}
		>
			<Button variant="ghost">
				<AiFillHome />
				All notes
			</Button>
			<Button variant="ghost">
				<AiOutlineCloudDownload />
				Archived notes
			</Button>

			<Separator w="100%" borderColor="gray.300" />

			<span
				style={{
					padding: "16px",
					display: "flex",
					flexDirection: "column",
					gap: "8px",
				}}
			>
				<Text
					display="flex"
					alignItems="center"
					gap={2}
					color={"gray.500"}
					fontWeight="bold"
				>
					Tags
				</Text>
				<Text display="flex" alignItems="center" gap={2}>
					<AiFillTag />
					#TODO
				</Text>
				<Text display="flex" alignItems="center" gap={2}>
					<AiFillTag />
					#Archived notes
				</Text>
				<Text display="flex" alignItems="center" gap={2}>
					<AiFillTag />
					#All notes
				</Text>
				<Text display="flex" alignItems="center" gap={2}>
					<AiFillTag />
					#Archived notes
				</Text>
				<Text display="flex" alignItems="center" gap={2}>
					<AiFillTag />
					#All notes
				</Text>
				<Text display="flex" alignItems="center" gap={2}>
					<AiFillTag />
					#Archived notes
				</Text>
			</span>
		</VStack>
	);
};

export default NoteSidebar;
