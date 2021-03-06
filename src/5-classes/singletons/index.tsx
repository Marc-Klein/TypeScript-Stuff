import React from "react";

// this example makes use of the singleton pattern,
// with the singleton pattern you can instantiate a class only once
// here with the accounting Department
// it makes use of private constructors

const Singletons = () => {
	class Department {
		protected employees: string[] = [];

		constructor(protected readonly id: string, public name: string) {}

		addEmployee(employee: string) {
			this.employees.push(employee);
		}

		printEmployeeInfo() {
			console.log(this.employees.length);
			console.log(this.employees);
		}
	}

	class AccountingDepartment extends Department {
		private lastReport: string;
		// it is possible to an Instance in a prop
		private static instance: AccountingDepartment;

		get mostRecentReport() {
			if (this.lastReport) {
				return this.lastReport;
			} else {
				throw new Error("No Report found");
			}
		}

		set mostRecentReport(value: string) {
			if (!value) {
				throw new Error("Please add a valid value");
			}
			this.addReport(value);
		}

		private constructor(id: string, private reports: string[]) {
			super(id, "Accounting");
			this.lastReport = reports[0];
		}

		addReport(text: string) {
			this.reports.push(text);
			this.lastReport = text;
		}

		printReports() {
			console.log(this.reports);
		}

		addEmployee(name: string): void {
			if (name === "Max") return;
			this.employees.push(name);
		}

		static getInstance() {
			// is a instance there return the instance
			if (this.instance) {
				return this.instance;
				// AccountingDepmaretment can here instantiated because were inside of the class
				// remember, because the constructor is private it can only be accessed from inside the class
			} else {
				this.instance = new AccountingDepartment("D2", []);
				return this.instance;
			}
		}
	}
	const accounting = AccountingDepartment.getInstance();
	accounting.mostRecentReport = "Hello";
	accounting.addReport("somethings odd");
	console.log(accounting.mostRecentReport);
	accounting.printReports();

	return <></>;
};

export default Singletons;
