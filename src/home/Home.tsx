import NavbarHome from "../navbar/NavbarHome.tsx";
import "./home.scss";

export default function Home() {
	return (
		<>
			<div className="full-screen">
				<NavbarHome />
				<p className="homePageQuote">"TURN AND FACE THE STRANGE."</p>
			</div>
		</>
	);
}
