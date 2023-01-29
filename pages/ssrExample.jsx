import React from "react";

export function getStaticProps() {
	return {
		props: { useCounter: Math.random() },
		revalidate: 5,
        // on production revalidate this once in every 5 seconds of req.
	};
}

export default function SsrExample(props) {
	return <h1>{props.useCounter}</h1>;
}
