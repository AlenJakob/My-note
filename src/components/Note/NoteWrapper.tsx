import { Grid, Box, Button } from "@chakra-ui/react";
import NoteButton from "./NoteButton/NoteButton";

const NoteWrapper = () => {
	return (
		<Grid
			templateColumns="1fr 2fr 1fr"
			w={"100%"}
			borderTop="1px solid"
			borderColor="gray.300"
			// height={"100vh"}
		>
			<Box
				display="flex"
				flexDirection="column"
				gap={2}
				p={4}
				borderRight="1px solid"
				borderColor="gray.300"
				overflow="auto"
			>
				<Button my={2} w="100%">
					+ Dodaj nową notatkę
				</Button>
				<NoteButton />
				<NoteButton />
				<NoteButton />
				<NoteButton />
				<NoteButton />
				<NoteButton />
				<NoteButton />
				<NoteButton />
				<NoteButton />
				<NoteButton />
				<NoteButton />
				<NoteButton />
				<NoteButton />
			</Box>
			<Box bg="green.100" p={4}>
				Kolumna 2 Lista Notatek
			</Box>
			<Box bg="red.100" p={4} borderLeft="1px solid" borderColor="gray.300">
				Kolumna 3 dodatkowe menu z opcjami aby archiwizowac notatki oraz usuwać
			</Box>
		</Grid>
	);
};

export default NoteWrapper;
