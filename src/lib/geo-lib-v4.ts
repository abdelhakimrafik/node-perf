import * as fs from 'fs';
import NodeCache from 'node-cache';
import { inSubNet } from './utils';
import { City, GeoResult } from './types';

const db = fs.readFileSync('src/assets/db.json');
const citiesData: City[] = JSON.parse(db.toString());
const cache = new NodeCache({
  useClones: false,
  stdTTL: 60 * 60 * 12, // 12h
});

export const resolveIp = (ip: string) => {
  if (cache.has(ip)) {
    return cache.get<GeoResult>(ip);
  }

  for (const city of citiesData) {
    const { subnets, ...cityData } = city;
    const subnetData = subnets?.find(({ mask }) => inSubNet(ip, mask));
    if (subnetData) {
      const result = {
        ip,
        ...cityData,
        ...subnetData,
      };

      cache.set<GeoResult>(ip, result);
      return result;
    }
  }

  return null;
};
