import React from "react";

export default function SSR(props) {
	return (
		<div>
			<pre>{props.googleFirst200Chars}</pre>
			<h1>Hey there</h1>
		</div>
	);
}
export async function getServerSideProps(context) {
	//1
	// console.log(context.query.codedamn);

	// (context.res.statusCode = 418),
	// 	context.res.write(JSON.stringify({ something: "Something COooooOOOl." }));
	// context.res.end();
	// return {
	// props: {},
	// };

	//2
	// return {
	// redirect: {
	// destination: "https://google.com",
	// permanent: false,
	//307, 308 && true == permanent redirect && false == temp redirect
	// after using this it will be cached so even if I remove all and pass props again it will redirect me to google.com
	// so if user gets permanent redirect in their browser we will not able to remove that and it will cause us some issues.
	// },
	// will get permanent in header of dev tools
	// };

	//2 -> if i remove redirect and set props again
	// return {
	// 	props: {},
	// };

	// 3 sends 404 page of next.js
	// return {
	// notFound: true,
	// ex:
	// fetch from db
	// if (!record) return notFound: true;
	// };

	const data = await (
		await fetch("https://google.com").then((t) => t.text())
	).slice(0, 200);
	// Example
	return {
		props: {
			googleFirst200Chars: data,
		},
	};
}
