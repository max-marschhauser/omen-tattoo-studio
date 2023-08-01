import NavbarHome from "../components/NavbarHome";
import "./home.scss";

export default function Home() {
	return (
		<>
			<div className="box">
				<div className="box-inner">
					<div className="full-screen">
						<NavbarHome />
						<p className="homePageQuote">"TURN AND FACE THE STRANGE."</p>
					</div>
				</div>
			</div>
		</>
	);
}
