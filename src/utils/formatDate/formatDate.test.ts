import { formatDate, ordinalSuffixOf } from "./formatDate";

test("Format given date", () => {
  expect(formatDate("2023-03-29T11:45:00Z")).toBe("March 29th, 2023 2:45PM");
});

test("Format second date", () => {
  expect(formatDate("2023-03-22T15:30:00Z")).toBe("March 22nd, 2023 6:30PM");
});

test("Format empty string", () => {
  expect(formatDate("")).toBe("No Date");
});

test("Format undefined date", () => {
  expect(formatDate(undefined)).toBe("No Date");
});

test("Ordinal suffix of 2", () => {
  expect(ordinalSuffixOf(2)).toBe("2nd");
});

test("Ordinal suffix of 21", () => {
  expect(ordinalSuffixOf(21)).toBe("21st");
});
