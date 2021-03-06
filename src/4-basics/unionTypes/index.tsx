import React from "react";

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#defining-a-union-type

const UnionAdd = () => {
	// union Types can either be two or more types
	// here we can input a number or a string
	const combine = (input1: number | string, input2: number | string) => {
		let result;
		// workaround for TS checking for the types of the arr
		if (typeof input1 === "number" && typeof input2 === "number") {
			result = input1 + input2;
		} else {
			result = input1.toString() + input2.toString();
		}
		return result;
	};

	const combinedAges = combine(30, 29);
	console.log(combinedAges);

	const combinedNames = combine("Max", "Peter");
	console.log(combinedNames);

	return <p>Combined Add</p>;
};

export default UnionAdd;
