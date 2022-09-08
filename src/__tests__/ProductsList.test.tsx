import { cleanup, render, screen } from "@testing-library/react";
import { ProductsList } from "../components/ProductsList/ProductsList";
import { mockedData } from "../utils/productsMockData";

afterEach(() => {
    cleanup();
});

describe("ProductsList", () => {
    it("should render element with correct name", () => {
        render(<ProductsList products={mockedData.edges} />);
        const nameElement = screen.getByText(/EDEKA Bio H-Vollmilch/);
        expect(nameElement).toBeInTheDocument;
    });

    it("should render element with correct price", () => {
        render(<ProductsList products={mockedData.edges} />);
        const priceElement = screen.getByText('1,59 €');
        expect(priceElement).toBeInTheDocument;
    });

    it("should render element with correct base unit", () => {
        render(<ProductsList products={mockedData.edges} />);
        const unitElement = screen.getByText(/1 Liter/);
        expect(unitElement).toBeInTheDocument;
    });

    it("should render element with correct image", () => {
        render(<ProductsList products={mockedData.edges} />);
        const imgElement = screen.getByRole(/img/);
        expect((imgElement as HTMLImageElement).alt).toBe(
            "EDEKA Bio H-Vollmilch"
        );
    });
});
