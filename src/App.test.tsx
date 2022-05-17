import { screen, render, cleanup } from "@testing-library/react";
import { App } from "./App";

describe("App component", () => {
  it("should display the text present in the app component ", () => {
    render(<App />);
    expect(screen.getByTestId("app-content")).toHaveTextContent(
      "Rendered from react app"
    );
  });

  afterAll(cleanup);
});
