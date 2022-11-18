import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { client, getQueryKey } from "../common";
import type { Product } from "./types";

type Params = { id: string };

const getProduct = async ({ id }: Params) => {
  const response = await client({
    url: `products/${id}`,
    method: "GET",
  });

  return response.data.product;
};

type Response = Product;

export function useProduct(
  params: Params,
  config?: UseQueryOptions<Response, AxiosError>
) {
  const queryKey = getQueryKey<Params>("product", params);
  return useQuery<Response, AxiosError>(
    queryKey,
    () => getProduct(params),
    config
  );
}
