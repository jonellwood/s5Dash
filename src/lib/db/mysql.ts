import mysql from "mysql2/promise";

let mysqlconn: mysql.Connection | null = null;

export async function mysqlconnFn(): Promise<mysql.Connection> {
	if (!mysqlconn) {
		mysqlconn = await mysql.createConnection({
			host: "10.50.10.94",
			port: 3306,
			user: "EmpOrderForm",
			password: "FwpIXaIf1jGCpjS5Banp",
			database: "uniform_orders"
		});
	}
	return mysqlconn;
}
