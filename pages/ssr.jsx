import React from "react";

export function getStaticProps(context) {
	console.log(context);

	// example connect db and fetch user cound
	// const db = await db.totalUser()
	// const userCount = await debugger.totalUser()

	return {
		props: { useCount: userCount },
		// on revalidate it will re-build page again
		revalidate: 10,
	};
}

export default function SSR(props) {
	return (
		<div>
			<h4>Static side rendering</h4>
			{/* {props.useCount} */}
		</div>
	);
}
