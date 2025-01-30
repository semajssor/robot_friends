import React from "react";

const Scroll = (props) => {
	return (
		<div style={{ overflowY: "scroll", height: "100vh", width:"100vw" }}>{props.children}</div>
	);
};

export default Scroll;
