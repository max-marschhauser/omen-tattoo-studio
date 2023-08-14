import NavbarPages from "../../navbar/NavbarPages.tsx";
import "../pages.scss";

export default function NoPage() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">No Page</main>
		</>
	);
}
