import NavbarPages from "../../../../layout/navbar/NavbarPages.tsx";

import imagesDataTattoo from "../../../../data/imagesDataTattoo.ts";

import "../../../pages.scss";

export default function Tetovaze() {
	return (
		<>
			<NavbarPages />
			<main className="page-content">
				<div className="imageItemsScreen">
					{imagesDataTattoo.map((item) => {
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
