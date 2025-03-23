import NoteNavbar from "./Navbar/NoteNavbar";

const MainLayout = ({ children }: { children: React.ReactElement }) => {
	return (
		<div>
			<header>
				<NoteNavbar />
			</header>

			<main>{children}</main>

			{/* <footer>footer</footer> */}
		</div>
	);
};

export default MainLayout;
