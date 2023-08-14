import NavbarPages from "../../layout/navbar/NavbarPages.tsx";

import "../pages.scss";
import "./noPage.scss";

export default function NoPage() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<h1 className="page-title">NOPAGE</h1>
				<div>page content</div>
			</main>
		</>
	);
}
