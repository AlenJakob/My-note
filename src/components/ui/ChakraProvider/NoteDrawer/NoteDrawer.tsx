import {
	Button,
	CloseButton,
	Drawer,
	IconButton,
	Portal,
} from "@chakra-ui/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NoteDrawer = () => {
	// const [open, setOpen] = useState(true);
	return (
		<Drawer.Root
			open
			// onOpenChange={(e) => setOpen(e.open)}
			placement="start"
		>
			{/* <Drawer.Trigger asChild>
				<IconButton
					variant="outline"
					size="sm"
					display={{ base: "block", sm: "none", md: "none" }}
				>
					<GiHamburgerMenu />
				</IconButton>
			</Drawer.Trigger> */}
			<Portal>
				<Drawer.Positioner>
					<Drawer.Content>
						<Drawer.Header>
							<Drawer.Title>Drawer Title</Drawer.Title>
						</Drawer.Header>
						<Drawer.Body>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</Drawer.Body>
						<Drawer.Footer>
							{/* <Button variant="outline">Cancel</Button>
							<Button>Save</Button> */}
						</Drawer.Footer>
						{/* <Drawer.CloseTrigger asChild>
							<CloseButton size="sm" />
						</Drawer.CloseTrigger> */}
					</Drawer.Content>
				</Drawer.Positioner>
			</Portal>
		</Drawer.Root>
	);
};

export default NoteDrawer;
