import {
    render,
    screen,
    act,
    cleanup,
    fireEvent,
} from "@testing-library/react";
import Home from "../../pages/index";

afterEach(() => {
    cleanup();
});

describe("Home", () => {
    it("should render loading screen", () => {
        render(<Home />);
        const spinner = screen.getByText(/Loading.../);
        expect(spinner).toBeInTheDocument;
    });

    it("should render all the products", async () => {
        render(<Home />);
        await act(async () => {
            await new Promise((r) => setTimeout(r, 1500));
            const imageElement = screen.getAllByRole(/img/);
            expect(imageElement).toBeInTheDocument;
        });
    });

    it("should render all the products and then search for specific", async () => {
        render(<Home />);
        await act(async () => {
            await new Promise((r) => setTimeout(r, 1500));
            const inputElement = screen.getByPlaceholderText(/Search Products/);
            fireEvent.change(inputElement, { target: { value: "Edeka" } });
            expect((inputElement as HTMLInputElement).value).toBe("Edeka");
        });
    });
});
