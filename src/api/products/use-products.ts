import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { client, getQueryKey } from '../common';
import type { Product } from './types';

const getProducts = async () => {
  const response = await client({
    url: `products`,
    method: 'GET',
  });

  return response.data.products;
};

type Response = Product[];

export function useProducts(config?: UseQueryOptions<Response, AxiosError>) {
  const queryKey = getQueryKey('products');
  return useQuery<Response, AxiosError>(queryKey, getProducts, config);
}
