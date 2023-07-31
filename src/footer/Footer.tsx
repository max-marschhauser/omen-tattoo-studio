import "./footer.scss";

export default function Footer() {
	return (
		<footer>
			<ul>
				<li>OMEN</li>
				<li>Studio za izradu tetovaža</li>
				<li>Gundulićeva 118, 31000 Osijek</li>
				<li>Tel. 091/918-9853</li>
				<li>e-mail</li>
			</ul>
			<ul>
				<li>Radno vrijeme po dogovoru</li>
				<li>Copyright &copy;{+new Date().getFullYear()}.</li>
			</ul>
			<ul className="line-flex">
				<li>
					<a href="#" target="_blank" rel="noreferrer">
						<i className="fa-brands fa-facebook fa-3x"></i>
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noreferrer">
						<i className="fa-brands fa-instagram fa-3x"></i>
					</a>
				</li>
			</ul>
		</footer>
	);
}
