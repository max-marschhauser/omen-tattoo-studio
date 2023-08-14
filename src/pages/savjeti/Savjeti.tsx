import { useState } from "react";

import NavbarPages from "../../navbar/NavbarPages.tsx";

import "../pages.scss";
import "./savjeti.scss";

export default function Savjeti() {
	const [opened, setOpened] = useState(false);

	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<h1 className="page-title">Savjeti</h1>
				<div className="expandable-items">
					<div className="expandable-item">
						<button type="button" className="collapsible-button" onClick={() => setOpened(!opened)}>
							Button text
						</button>
						<div className={opened ? "opened content" : "closed content"}>
							<p>Neki tekst </p>
						</div>
					</div>
					<div className="expandable-item">
						<button type="button" className="collapsible-button" onClick={() => setOpened(!opened)}>
							Button text
						</button>
						<div className={opened ? "opened content" : "closed content"}>
							<p>Neki tekst </p>
						</div>
					</div>
					<div className="expandable-item">
						<button type="button" className="collapsible-button" onClick={() => setOpened(!opened)}>
							Button text
						</button>
						<div className={opened ? "opened content" : "closed content"}>
							<p>Neki tekst </p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
