// App.tsx
import { useUser } from "@clerk/clerk-react";
import MainLayout from "./components/MainLayout";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import NoteSidebar from "./components/NoteSidebar/NoteSidebar";
import NoteWrapper from "./components/Note/NoteWrapper";
import { Box } from "@chakra-ui/react";

export default function App() {
	const user = useUser();
	console.log(user, "useUser");

	return (
		<Router>
			<MainLayout>
				<Box display={"flex"} height={"calc(100vh - 72px)"}>
					<NoteSidebar />
					<NoteWrapper />
					<AppRoutes />
				</Box>
			</MainLayout>
		</Router>
	);
}

const AppRoutes = () => {
	return useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/home", element: <Home /> },
		{ path: "/notes", element: <Notes /> },
	]);
};
