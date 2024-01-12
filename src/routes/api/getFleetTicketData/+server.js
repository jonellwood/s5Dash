import data from "./ticketData.json" assert { type: "json" };

// We will need this once we get access to a database
// import { mysqlconnFn } from "$lib/db/mysql";

// export async function POST() {
// 	let mysqlconn = await mysqlconnFn();

// 	const query = `SELECT * FROM emp_ref WHERE seperation_date IS NULL LIMIT 10`;

// 	let results = {};

// 	try {
// 		const result = await Promise.all([mysqlconn.query(query)]);

// 		results = result[0][0];
// 	} catch (error) {
// 		console.log(error);
// 		return new Response("Internal Server Error", { status: 500 });
// 	}
// 	return new Response(JSON.stringify(results), { headers: { "Content-Type": "application/json" } });
// }

export async function POST() {
	return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
}
