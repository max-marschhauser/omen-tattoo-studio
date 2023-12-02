import NavbarPages from "../../../../layout/navbar/NavbarPages.tsx";

import imagesDataDizajn from "../../../../data/imagesDataDizajn.ts";

import "../../../pages.scss";

export default function Dizajn() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<div className="imageItemsScreen">
					{imagesDataDizajn.map((item) => {
						return (
							<div className="imageItem">
								<h2>{item.title}</h2>
								<img src={item.image} alt={item.desc} />
							</div>
						);
					})}
				</div>
			</main>
		</>
	);
}
