const sorting = require("../../app");

describe("Books names test suit", () => {
	test("Books names should be sorted in ascending order", () => {
		expect(
			sorting.sortByName([
				"Гарри Поттер",
				"Властелин Колец",
				"Волшебник изумрудного города",
			])
		).toEqual([
			"Властелин Колец",
			"Волшебник изумрудного города",
			"Гарри Поттер",
		]);
	});

	test("No sorting", () => {
		expect(
			sorting.sortByName(["Гарри Поттер", "Властелин Колец", "Гарри Поттер"])
		).toEqual(["Властелин Колец", "Гарри Поттер", "Гарри Поттер"]);
	});

});