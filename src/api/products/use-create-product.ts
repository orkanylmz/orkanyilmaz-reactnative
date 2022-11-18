import Config from '@config';
import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { client } from '../common';
import type { Product } from './types';

type Input = {
  name: string;
  avatar: string;
  description: string;
  price: number;
  category: string;
};

type Response = Product;

const createProduct = async (input: Input): Promise<Response> => {
  return client({
    url: 'products',
    method: 'POST',
    data: {
      ...input,
      developerEmail: Config.DEVELOPER_EMAIL,
    },
  }).then((response) => response.data.product);
};

export function useCreateProduct(
  config?: UseMutationOptions<Response, AxiosError, Input>
) {
  return useMutation<Response, AxiosError, Input>(createProduct, config);
}
