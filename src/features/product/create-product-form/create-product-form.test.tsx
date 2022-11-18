import "@testing-library/jest-native/extend-expect";
import "react-native";

import type { RenderAPI, RenderOptions } from "@testing-library/react-native";

import { useCategories } from "@/api";
import {
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react-native";
import React from "react";
import { CreateProductForm } from "./create-product-form.component";

afterEach(cleanup);

const mockedUseCategories = useCategories as jest.Mock<any>;

jest.mock("@/api", () => ({ useCategories: jest.fn() }));

const customRender = (
  ui: React.ReactElement<any>,
  options?: RenderOptions | undefined
): RenderAPI => render(ui, { ...options });

describe("<CreateProductForm />", () => {
  beforeEach(() => {
    const mockedCategoriesData = [
      {
        _id: "62e638f41126b53e1c7deb61",
        name: "Hobby",
      },
    ];

    mockedUseCategories.mockImplementation(() => ({
      isLoading: false,
      data: mockedCategoriesData,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders without crashing", () => {
    render(<CreateProductForm />);
  });

  it("renders correctly", async () => {
    const { findByText } = customRender(<CreateProductForm />);
    expect(await findByText(/Product Title/i));
    expect(await findByText(/Product Price/i));
    expect(await findByText(/Product Description/i));
    expect(await findByText(/Product Image Link/i));
    expect(await findByText(/Selected Category/i));
  });

  it("should display required error when values are empty", async () => {
    const { getByText, findByText, queryByText, getByTestId } = customRender(
      <CreateProductForm />
    );

    const button = getByTestId("create-product-button");

    fireEvent.press(button);

    expect(await findByText(/Product title is required/i)).not.toBeNull();
    expect(await findByText(/Product price is required/i)).not.toBeNull();
    expect(await findByText(/Product description is required/i)).not.toBeNull();
    expect(await findByText(/Product image link is required/i)).not.toBeNull();
    expect(await findByText(/You must choose a category/i)).not.toBeNull();
  });

  it("Should call onSubmit with correct values when values are valid", async () => {
    const mockOnSubmit = jest.fn(
      ({ title, price, description, imageLink, category }) => {
        return Promise.resolve({
          title,
          price,
          description,
          imageLink,
          category,
        });
      }
    );

    const { getByTestId } = customRender(
      <CreateProductForm onSubmit={mockOnSubmit} />
    );

    const button = getByTestId("create-product-button");
    const titleInput = getByTestId("title-input");
    const priceInput = getByTestId("price-input");
    const descriptionInput = getByTestId("description-input");
    const imageLinkInput = getByTestId("image-link-input");
    const category = getByTestId("category-item-Hobby");

    fireEvent.changeText(titleInput, "Test Product");
    fireEvent.changeText(priceInput, "444");
    fireEvent.changeText(descriptionInput, "My new product");
    fireEvent.changeText(imageLinkInput, "test image");
    fireEvent.press(category);
    fireEvent.press(button);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
