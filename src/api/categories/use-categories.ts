import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { client, getQueryKey } from "../common";
import type { Category } from "./types";

const getCategories = async () => {
  const response = await client({
    url: `categories`,
    method: "GET",
  });

  return response.data.categories;
};

type Response = Category[];

export function useCategories(config?: UseQueryOptions<Response, AxiosError>) {
  const queryKey = getQueryKey("categories");
  return useQuery<Response, AxiosError>(queryKey, getCategories, config);
}
