import data from "../services/cars";

it("should be the first of the list", () => {
  const desiredCar = {
    id: 1,
    brand: "Dodge",
    model: "Ram Wagon B250",
    year: 1993,
  };
  expect(desiredCar).toMatchObject(data[0]);
});
