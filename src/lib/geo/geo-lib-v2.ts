import * as fs from 'fs';
import { inSubNet } from './utils';
import { City } from './types';

const db = fs.readFileSync('assets/db.json');
const citiesData: City[] = JSON.parse(db.toString());

export const resolveIp = (ip: string) => {
  for (const city of citiesData) {
    const { subnets, ...cityData } = city;
    const subnetData = subnets?.find(({ mask }) => inSubNet(ip, mask));
    if (subnetData) {
      return {
        ip,
        ...cityData,
        ...subnetData,
      };
    }
  }

  return null;
};
