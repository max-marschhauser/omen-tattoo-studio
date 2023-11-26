import React, { useState } from "react";
import "../savjeti.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface ExpandableProps {
	id: number;
	title: string;
	subtext: string;
}

const Expandable: React.FC<ExpandableProps> = ({ id, title, subtext }) => {
	const [expanded, setExpanded] = useState(false);

	function toggleExpanded() {
		setExpanded((prev) => !prev);
	}

	return (
		<div className="expandable-item">
			<button onClick={toggleExpanded}>
				<h2>
					{id + 1}. {title}
				</h2>
				{expanded ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}
			</button>
			{expanded && <p>{subtext}</p>}
		</div>
	);
};

export default Expandable;
