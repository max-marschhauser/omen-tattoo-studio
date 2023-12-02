import NavbarPages from "../../layout/navbar/NavbarPages.tsx";
import Expandable from "./components/expandable.tsx";

import savjetiData from "../../data/savjetiData.ts";

import "../pages.scss";
import "./savjeti.scss";

export default function Savjeti() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<div className="expandable-items">
					{savjetiData.map((item) => {
						return <Expandable key={item.id} id={item.id} title={item.title} subtext={item.subtext} />;
					})}
				</div>
			</main>
		</>
	);
}
