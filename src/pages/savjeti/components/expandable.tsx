import React, { useState } from "react";

import "../savjeti.scss";

interface ExpandableProps {
	id: number;
	title: string;
	subtext: string;
}

const Expandable: React.FC<ExpandableProps> = ({ id, title, subtext }) => {
	const [expanded, setExpanded] = useState(false);

	function toggleExpanded() {
		setExpanded(!expanded);
	}

	return (
		<div className="expandable-item" onClick={toggleExpanded}>
			<button>
				<h2>
					{id + 1}. {title}
				</h2>
				<i className="fa-solid fa-arrow-down"></i>
			</button>
			{expanded && <p>{subtext}</p>}
		</div>
	);
};

export default Expandable;
