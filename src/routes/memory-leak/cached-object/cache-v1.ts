const cache: Record<string, any> = {};

export const compute = (term: string): void => {
  return cache[term] || (cache[term] = doCompute());

  function doCompute() {
    // do something
    return Buffer.alloc(1e3); // 1kb
  }
};
