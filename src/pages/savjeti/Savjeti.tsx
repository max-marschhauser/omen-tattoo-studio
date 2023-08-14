import NavbarPages from "../../layout/navbar/NavbarPages.tsx";
import Expandable from "./components/expandable.tsx";

import dataSavjeti from "../../data/dataSavjeti.ts";

import "../pages.scss";
import "./savjeti.scss";

export default function Savjeti() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<div className="expandable-items">
					{dataSavjeti.map((item) => {
						return <Expandable key={item.id} id={item.id} title={item.title} subtext={item.subtext} />;
					})}
				</div>
			</main>
		</>
	);
}
