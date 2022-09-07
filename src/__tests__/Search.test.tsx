import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Search } from "../components/Search/Search";

const mockedFilterProducts = jest.fn();

afterEach(() => {
    cleanup();
});

describe("Search", () => {
    it("should render input element", () => {
        render(<Search handleChange={mockedFilterProducts} />);
        const inputElement = screen.getByPlaceholderText(/Search Products/);
        expect(inputElement).toBeInTheDocument;
    });
});

describe("Search", () => {
    it("should be able to type in input field", () => {
        render(<Search handleChange={mockedFilterProducts} />);
        const inputElement = screen.getByPlaceholderText(/Search Products/);
        fireEvent.change(inputElement, { target: { value: "Edeka" } });
        expect((inputElement as HTMLInputElement).value).toBe("Edeka");
    });
});
