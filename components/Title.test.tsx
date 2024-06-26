import Title from "./Title";
import { render, screen } from "@testing-library/react-native";
describe("Title", () => {
  it("should render with title", () => {
    render(<Title />);
    screen.getByText("Cars for Sale");
  });
});
