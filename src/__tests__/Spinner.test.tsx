import { render, screen } from "@testing-library/react";
import { Spinner } from "../components/Spinner/Spinner";

describe("Spinner", () => {
    it("should render spinner element", () => {
        render(<Spinner />);
        const spinner = screen.getByText(/Loading.../);
        expect(spinner).toBeInTheDocument;
    });
});
