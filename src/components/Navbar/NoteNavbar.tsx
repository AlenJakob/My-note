import { Box, Button } from "@chakra-ui/react";
import { ClerkAuth } from "@/lib/clerk/ClerkAuth";
import { useNavigate } from "react-router-dom";

const NoteNavbar = () => {
	const navigate = useNavigate();

	return (
		<Box p={4} bg="gray.100" display="flex" justifyContent="space-between">
			<Box spaceX={2}>
				<Button colorScheme="teal" onClick={() => navigate("/home")}>
					Home
				</Button>
				<Button colorScheme="teal" onClick={() => navigate("/notes")}>
					Notes
				</Button>
			</Box>
			<ClerkAuth />
		</Box>
	);
};
export default NoteNavbar;
