import * as fs from 'fs';
import { inSubNet } from './utils';
import { City, GeoResult } from './types';

const db = fs.readFileSync('assets/db.json');
const citiesData: City[] = JSON.parse(db.toString());
const cache: Record<string, GeoResult> = {};

export const resolveIp = (ip: string) => {
  if (cache[ip]) {
    return cache[ip];
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

      cache[ip] = result;
      return result;
    }
  }

  return null;
};
