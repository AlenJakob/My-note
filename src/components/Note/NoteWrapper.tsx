import { Grid, Box, Button } from "@chakra-ui/react";
import NoteButton from "@/components/Note/NoteButton/NoteButton";
import NoteContent from "@/components/Note/NoteContent";
import { FiTrash2, FiDownload } from "react-icons/fi";

const NoteWrapper = () => {
	return (
		<Grid
			templateColumns="1fr 2fr 1fr"
			w={"100%"}
			borderTop="1px solid"
			borderColor="gray.300"
			// maxHeight={"100vh"}
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
			</Box>
			<Grid gap={4}>
				<NoteContent />
			</Grid>
			<Box p={4} borderLeft="1px solid" borderColor="gray.300">
				<Button
					justifyContent="flex-start"
					textAlign="left"
					variant="outline"
					my={2}
					w="100%"
				>
					<FiTrash2 />
					Archiwizuj notatkę
				</Button>
				<Button
					justifyContent="flex-start"
					textAlign="left"
					variant="outline"
					my={2}
					w="100%"
				>
					<FiDownload />
					Usuń Notatkę
				</Button>
			</Box>
		</Grid>
	);
};

export default NoteWrapper;
