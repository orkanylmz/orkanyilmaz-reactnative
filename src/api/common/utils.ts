type KeyParams = {
  [key: string]: any;
};

export function getQueryKey<T extends KeyParams>(key: string, params?: T) {
  return [key, ...(params ? [params] : [])];
}

export function getUrlParameters(
  url: string | null
): { [k: string]: string } | null {
  if (url === null) {
    return null;
  }
  let regex = /[?&]([^=#]+)=([^&#]*)/g,
    params = {},
    match;
  while ((match = regex.exec(url))) {
    if (match[1] !== null) {
      //@ts-ignore
      params[match[1]] = match[2];
    }
  }
  return params;
}
