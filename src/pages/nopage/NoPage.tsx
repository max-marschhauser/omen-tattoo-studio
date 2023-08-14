import NavbarPages from "../../layout/navbar/NavbarPages.tsx";

import "../pages.scss";
import "./noPage.scss";

export default function NoPage() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<div>page content</div>
			</main>
		</>
	);
}
