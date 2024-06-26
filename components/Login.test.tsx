import Login from "./Login";
import { fireEvent, render, screen } from "@testing-library/react-native";
describe("Login", () => {
  it("should call onPress function", () => {
    const onPress = jest.fn();
    render(<Login onLogin={onPress} />);
    const button = screen.getByText("Sign In");
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });
});
