import { Outlet } from "react-router-dom";

import Footer from "../footer/Footer.tsx";

const Layout = () => {
	return (
		<>
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
