import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout.tsx";

import Home from "./pages/home/Home.tsx";
import Radovi from "./pages/radovi/Radovi.tsx";
import Tetovaze from "./pages/radovi/pages/tetovaze/Tetovaze.tsx";
import Dizajn from "./pages/radovi/pages/dizajn/Dizajn.tsx";
import Savjeti from "./pages/savjeti/Savjeti.tsx";
import Umjetnica from "./pages/umjetnica/Umjetnica.tsx";
import Kontakt from "./pages/kontakt/Kontakt.tsx";

import NoPage from "./pages/nopage/NoPage.tsx";

import "./app.scss";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="radovi" element={<Radovi />} />
					<Route path="radovi/tetovaze" element={<Tetovaze />} />
					<Route path="radovi/dizajn" element={<Dizajn />} />
					<Route path="savjeti" element={<Savjeti />} />
					<Route path="umjetnica" element={<Umjetnica />} />
					<Route path="kontakt" element={<Kontakt />} />

					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
