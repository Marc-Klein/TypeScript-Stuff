import React from "react";

const CombineAdd = () => {
	const combine = (input1: number | string, input2: number | string) => {
		let result;
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

export default CombineAdd;