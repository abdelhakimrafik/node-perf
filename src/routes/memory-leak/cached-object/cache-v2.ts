import { LRUCache } from 'lru-cache';

const cache = new LRUCache<string, any>({ max: 5, ttl: 60 * 60 * 12 });

export const computeV2 = (key: string) => {
  if (!cache.has(key)) cache.set(key, doCompute());
  return cache.get(key);

  function doCompute() {
    // do something
    return Buffer.alloc(1e3); // 1kb
  }
};
